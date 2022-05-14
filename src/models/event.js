/* eslint-disable */ 
import { Record } from "immutable";

const keys = [
  "date_JP",
  "pk", "sk", "NextSpaceFlight","unique",
  //search keys
  "name", "datetime", "NextSpaceFlight", "COSPAR",
  "name_JP", "site_JP", "pad_JP", "rocket_JP",
  //datetime keys
  "datetime_format", "datetime_format_JP", "datetime","datetime_time_type","datetime_date_type", "datetime_isNET", "datetime_time_type",
]

function setCollection (){
  let result = {}
  for (let key of keys){
    result[key] = null
  }
  return result
}
export const eventCollection = setCollection()

export class Event extends Record(eventCollection) {
  isLaunch() { return (this.pk.startsWith("launch")); }
  notFound(){
    return !Boolean(this.pk) 
  }
  nextSpaceFlightLink() {
    return ("https://nextspaceflight.com/events/");
  }
  virtualRocketWatchingLink() { return (`/events/i/launch/${this.unique}`); }
  data() { 
    let result = {}
    for (let key of keys) {
      if ( this[key] !== undefined && this[key] !== null ) result[key] = this[key]
    }
    return result
  }
  get_jp_value(key) {
    return this[key + "_JP"] || this[key + "_jp"]  || this[key]
  }
}