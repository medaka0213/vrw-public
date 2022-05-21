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
