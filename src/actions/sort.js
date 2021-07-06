function delete_array(array, item){
    const index = array.findIndex((v)=>v.eventID === item.eventID)
    array.splice(index,1)
    return array
}

function delete_items(array, items){
    let returnArray = array
    items.forEach((item)=>{
        returnArray = delete_array(returnArray, item)
    })
    return returnArray
}

function add_array_sorted_by_isNET(array1, array2){
    const confirmedArray =  array2.filter((v)=>!v.isNET)
    const NETArray = array2.filter((v)=>v.isNET)
    array1.push(...confirmedArray)
    array1.push(...NETArray)
    return array1
}

/*
ランク別に並べ替え
TimeConfirmed → TimeTBD → Month → Quarter → Year -> TBD
同じのがあって、NETだったら後にする
*/

function sort_events_by_type(array) {
    let returnArray = []
    let restArray = array
    let confirmedArray = []

    //時間が確定してるやつ
    confirmedArray = restArray.filter((v)=> v.time_type !== 'TBD')
    restArray = delete_items(restArray, confirmedArray)
    returnArray = add_array_sorted_by_isNET(returnArray, confirmedArray)

    //月が確定してるやつ
    confirmedArray = restArray.filter((v)=> v.date_type === 'MONTH')
    restArray = delete_items(restArray, confirmedArray)
    returnArray = add_array_sorted_by_isNET(returnArray, confirmedArray)

    //四半期が確定してるやつ
    confirmedArray = restArray.filter((v)=> v.date_type === 'QUARTER')
    restArray = delete_items(restArray, confirmedArray)
    returnArray = add_array_sorted_by_isNET(returnArray, confirmedArray)

    //前半/後半が確定してるやつ
    confirmedArray = restArray.filter((v) => v.date_type.lastIndexOf("YEAR") > 0)
    restArray = delete_items(restArray, confirmedArray)
    returnArray = add_array_sorted_by_isNET(returnArray, confirmedArray)

    //残りを最後に足す
    returnArray = add_array_sorted_by_isNET(returnArray, restArray)
    return returnArray
}

export async function sort_events(returnArray, restArray) {
    if (!restArray.length) {
        return returnArray
    }
    else {
        const latestMission = restArray.reduce((a,b)=> a.datetime < b.datetime ? a : b)

        let samedateMissions = restArray.filter((item, index) => item.datetime === latestMission.datetime)

        if (samedateMissions.length>1){
            samedateMissions = sort_events_by_type(samedateMissions)
            samedateMissions.forEach((mission)=>{
                returnArray.push(mission)
                restArray = delete_array( restArray, mission )
            })
        }else{
            restArray = delete_array( restArray, latestMission )
            returnArray.push(latestMission)
        }

        return sort_events(returnArray, restArray)
    }
}
