import axios from 'axios'
import {sort_events} from "@/actions/sort.js"

export async function get_events(){
    let result = await axios.get("https://xzqb8gypka.execute-api.ap-northeast-1.amazonaws.com/api/events?mode=upcoming")
    return await sort_events([], result.data.Items)
}