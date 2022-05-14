import axios from 'axios'
import {sort_events} from "@/actions/sort.js"
import {time_between} from "@/actions/time.js"

const ROOT_API_URL = "https://w2wmwyvb45.execute-api.ap-northeast-1.amazonaws.com/api"

export async function api_get(path=""){
    if(!path.startsWith("/") & !path.startsWith("\\")){
        path = "/" + path
    }
    let result = await axios.get(ROOT_API_URL + path)
    return result
}

export async function get_events(mode="upcoming"){
    let datetimes = time_between(mode)
    let result = await api_get(`/q/launch?datetime=${datetimes[0]}...${datetimes[1]}`)
    return result.data.Items
}

export async function get_meetups(mode="upcoming"){
    let datetimes = time_between(mode)
    let result = await api_get(`/q/meetup?start=${datetimes[0]}&end=${datetimes[1]}`)
    return result.data.Items
}

export async function get_slides(){
    let result = await api_get(`/q/slide`)
    return result.data.Items
}
