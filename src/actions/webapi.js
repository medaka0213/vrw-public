import axios from 'axios'
import {sort_events} from "@/actions/sort.js"

const ROOT_API_URL = "https://xzqb8gypka.execute-api.ap-northeast-1.amazonaws.com/api"

export async function api_get(path=""){
    if(!path.startsWith("/") & !path.startsWith("\\")){
        path = "/" + path
    }
    let result = await axios.get(ROOT_API_URL + path)
    return result
}

export async function get_events(mode="upcoming"){
    let result = await api_get(`/events?mode=${mode}`)
    return await sort_events([], result.data.Items)
}

export async function get_meetups(mode="upcoming"){
    let result = await api_get(`/meetups?mode=${mode}`)
    return await sort_events([], result.data.Items)
}

export async function get_slides(){
    let result = await api_get(`/slides`)
    return result.data.Items
}
