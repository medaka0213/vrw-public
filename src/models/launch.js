/* eslint-disable */ 
import { Record } from "immutable";

const keys = [
  "pk", "sk", "NextSpaceFlight","unique",
  //search keys
  "name", "datetime", "site", "pad", "rocket", "result", "NextSpaceFlight", "COSPAR",
  "name_JP", "site_JP", "pad_JP", "rocket_JP",
  "overview", "overview_JP",
  //datetime keys
  "datetime_format", "datetime_format_JP", "datetime","datetime_time_type","datetime_date_type", "datetime_isNET", "datetime_time_type",
  
  //unique rel keys
  'rocket', 'site', 'pad', "provider"
]

function setCollection (){
  let result = {}
  for (let key of keys){
    result[key] = null
  }
  return result
}
export const eventCollection = setCollection()

export class Launch extends Record(eventCollection) {
  isLaunch() { return true }
  notFound() {
    return !Boolean(this.pk) 
  }
  nextSpaceFlightLink() {
      return (`https://nextspaceflight.com/launches/details/${this.unique.replace(/[^0-9]/g, '')}`);
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