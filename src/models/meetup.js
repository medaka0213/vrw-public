import { Record } from "immutable";

const keys = ["type", "missionID",
    "host", "missionStartsAt", "datetime",
    "calendar", "calendar_jp",
    "rocket", "rocket_JP", "provider", "provider_JP",
    "title", "title_JP", 
    "isThumbDone","image_url", "image_credit",
    "isPosterDone",
    "isTwitterDone", "tweetJP", "tweetEN",
    "isVRCEveDone",
    "isSlideDone", "slideID",
    "isCountDownDone",
    "created_at", "updated_at",
]

function setCollection() {
    let result = {}
    for (let key of keys) {
        result[key] = ""
    }
    return result
}
export const collection = setCollection()

export class MeetUp extends Record(collection) {
    eventType() { return this.missionID.split("_")[0] }
    eventID() { return this.missionID.split("_")[1] }
    notFound(){
        return !Boolean(this.type) 
    }
    posterLink_JP() {
        return `${process.env.REACT_APP_S3_URL}/images/poster/${this.missionID}_${this.type}_JP.jpg`
    }
    posterLink_EN() {
        return `${process.env.REACT_APP_S3_URL}/images/poster/${this.missionID}_${this.type}_EN.jpg`
    }
    pageLink() {
        return `/meetups/i/${this.type}/${this.missionID}`
    }
    missionPageLink(){
        return `/events/i/${this.eventType()}/${this.eventID()}`
    }
    data() {
        let result = {}
        for (let key of keys) {
            let _value = this[key] || ""
            if (_value != "") result[key] = _value
        }
        return result
    }
    get_jp_value(key) {
        return this[key + "_JP"] || this[key + "_jp"] || this[key]
    }
    slideInfo() {
        return {
            slideType: this.missionID.split("_")[0],
            slideID: this.missionID.split("_")[1],
        }
    }
}