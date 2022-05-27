/* eslint-disable */
import axios from 'axios'
import {time_between} from "@/actions/time.js"
import Models from '@/models/index'

const ROOT_API_URL = "https://api.virtualrocketwatching.net/v0"

export async function api_get(path=""){
    if(!path.startsWith("/") & !path.startsWith("\\")){
        path = "/" + path
    }
    let result = await axios.get(ROOT_API_URL + path)
    return result
}

export async function get_event(mode="upcoming"){
    let datetimes = time_between(mode)
    let result = await api_get(`/q/event?datetime=${datetimes[0]}...${datetimes[1]}`)
    let items = result.data.Items
    return items.map(item => new Models.Event(item))
}

export async function get_launch(mode="upcoming"){
    let datetimes = time_between(mode)
    let result = await api_get(`/q/launch?datetime=${datetimes[0]}...${datetimes[1]}`)
    let items = result.data.Items
    return items.map(item => new Models.Launch(item))
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


export async function get_single_item(type, pk){
    let result = await api_get(`/q/${type}/i/${pk}`)
    return result.data.Item
}

//関連項目のパース
function parse_items (items) {
    let _items = {}
    items.forEach(i => {
        const type = i.sk.replace("_item", "")

        //const Model = GetModel(type)
        //i = new Model(i)
        
        if (type in _items) {
            _items[type].push(i)
        } else {
            _items[type] = [i]
        }
    })
    return _items
}

//関連項目の取得
export async function get_item_relation(type, pk, key=null){
    let path = `/q/${type}/i/${pk}/rel/`
    if(key){
        path += `${key}/`
    }
    let result = await api_get(path)
    result = result.data.Items
    if(key){
        return result
    } else {
        return parse_items(result)
    }
}

//参照項目の取得
export async function get_item_reference(type, pk, key=null){
    let path = `/q/${type}/i/${pk}/ref/`
    if(key){
        path += `${key}/`
    }
    let result = await api_get(path)
    result = result.data.Items
    if(key){
        return result
    } else {
        return parse_items(result)
    }
}
