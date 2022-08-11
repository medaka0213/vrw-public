import { BaseModel, BaseModelIF } from "./baseModel"
import { format_datetime_JP } from "@/actions/time"

export interface MissionIF extends BaseModelIF {
  NextSpaceFlight: string
  name: string
  name_JP: string
  datetime: string
  datetime_format: string
  datetime_format_JP: string
  datetime_time_type: string
  datetime_date_type: string
  datetime_isNET: boolean

  overview: string
  overview_JP: string
  description : string
  description_JP : string

  image_url: string
  image_credit: string
}

export class MissionBaseModel extends BaseModel implements MissionIF {
  NextSpaceFlight: string
  name: string
  name_JP: string
  datetime: string
  datetime_format: string
  datetime_format_JP: string
  datetime_time_type: string
  datetime_date_type: string
  datetime_isNET: boolean

  overview: string
  overview_JP: string
  description : string
  description_JP : string

  image_url: string
  image_credit: string

  constructor(data:MissionIF){
    super(data)
    this.NextSpaceFlight = data.NextSpaceFlight || ""
    this.name = data.name || ""
    this.name_JP = data.name_JP || ""
    this.datetime = data.datetime || ""
    this.datetime_format = data.datetime_format || ""
    this.datetime_format_JP = data.datetime_format_JP || ""
    this.datetime_time_type = data.datetime_time_type || ""
    this.datetime_date_type = data.datetime_date_type || ""
    this.datetime_isNET = data.datetime_isNET || false
    this.overview = data.overview || ""
    this.overview_JP = data.overview_JP || ""
    this.description = data.description || ""
    this.description_JP = data.description_JP || ""
    this.image_url = data.image_url || ""
    this.image_credit = data.image_credit || ""
  }
}

export interface LaunchIF extends MissionIF {
  COSPER : string
  pad: string
  pad_JP: string
  rocket: string
  rocket_JP: string
  site: string
  site_JP: string
  provider: string
  provider_JP: string
  result: string
  rocket_image_url: string
}

export class Launch extends MissionBaseModel implements LaunchIF{
  COSPER : string
  pad: string
  pad_JP: string
  rocket: string
  rocket_JP: string
  site: string
  site_JP: string
  provider: string
  provider_JP: string
  result: string
  rocket_image_url: string

  constructor(data:LaunchIF){
    super(data)
    this.COSPER = data.COSPER || ""
    this.pad = data.pad || ""
    this.pad_JP = data.pad_JP || ""
    this.rocket = data.rocket || ""
    this.rocket_JP = data.rocket_JP || ""
    this.site = data.site || ""
    this.site_JP = data.site_JP || ""
    this.provider = data.provider || ""
    this.provider_JP = data.provider_JP || ""
    this.result = data.result || ""
    this.rocket_image_url = data.rocket_image_url || ""
  }

  nextSpaceFlightLink(): string {
    return `https://nextspaceflight.com/launches/details/${this.NextSpaceFlight.replace("a","")}`
  }
}



export class Event extends MissionBaseModel implements MissionIF{
  constructor(data:MissionIF) {
    super(data)
  }

  nextSpaceFlightLink(): string {
    return `https://nextspaceflight.com/events`
  }
}


export interface MeetupIF extends BaseModelIF {
  title : string
  title_JP : string
  datetime : string
  tweet: string
  tweet_JP: string
  type: string
  user: string
  missionStartsAt: string
  isCountDonDone: boolean
  isPosterDone: boolean
  isSlideDone: boolean
  isThumbDone: boolean
  isTweetDone: boolean
  isTwitterDone: boolean
  isVRCEveDone: boolean
  image_url: string
  image_credit: string
  calendar: string
}

export class Meetup extends BaseModel implements MeetupIF {
  title : string
  title_JP : string
  datetime : string
  tweet: string
  tweet_JP: string
  type: string
  user: string
  missionStartsAt: string
  isCountDonDone: boolean
  isPosterDone: boolean
  isSlideDone: boolean
  isThumbDone: boolean
  isTweetDone: boolean
  isTwitterDone: boolean
  isVRCEveDone: boolean
  image_url: string
  image_credit: string
  calendar: string
  constructor(data:MeetupIF){
    super(data)
    this.title = data.title || ""
    this.title_JP = data.title_JP || ""
    this.datetime = data.datetime || ""
    this.tweet = data.tweet || ""
    this.tweet_JP = data.tweet_JP || ""
    this.type = data.type || ""
    this.user = data.user || ""
    this.missionStartsAt = data.missionStartsAt || ""
    this.isCountDonDone = data.isCountDonDone || false
    this.isPosterDone = data.isPosterDone || false
    this.isSlideDone = data.isSlideDone || false
    this.isThumbDone = data.isThumbDone || false
    this.isTweetDone = data.isTweetDone || false
    this.isTwitterDone = data.isTwitterDone || false
    this.isVRCEveDone = data.isVRCEveDone || false
    this.image_url = data.image_url || ""
    this.image_credit = data.image_credit || ""
    this.calendar = data.calendar || ""
  }

  datetime_format(): string {
    return format_datetime_JP(this.datetime)
  }

  twitterLink(): string {
    return `https://twitter.com/vr_launch/status/${this.tweet}`
  }
  
  twitterLinkJP(): string {
    return `https://twitter.com/vr_launch/status/${this.get_jp_value("tweet")}`
  }
}