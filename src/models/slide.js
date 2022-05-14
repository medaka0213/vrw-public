import { Record } from "immutable";

const keys = ["type", "id",
    "title", "userName", "data_length",
    "paths", "created_at", "updated_at",
    "texts",
]

function setCollection() {
    let result = {}
    for (let key of keys) {
        result[key] = ""
    }
    return result
}
export const collection = setCollection()

export class Slide extends Record(collection) {
    notFound(){
        return Boolean((this.type || "") == "") 
    }
    imageLinks() {
        if (this.paths){
            return this.paths.map(path => `${process.env.REACT_APP_S3_URL}/${path}`)
        } else {
            return []
        }
    }
    imageLinksCached() {
        if (this.paths){
            return this.paths.map(path => `${process.env.REACT_APP_CLOUDFRONT_URL}/${path}`)
        } else {
            return []
        }
    }
    videoLink() {
        return `${process.env.REACT_APP_S3_URL}/video-input/slides_v2_${this.type}_${this.id}_20fps.MP4`
    }
    videoLinkCached() {
        return `${process.env.REACT_APP_CLOUDFRONT_URL}/video-input/slides_v2_${this.type}_${this.id}_20fps.MP4`
    }
    pageLink() {
        return `/slide/i/${this.type}/${this.id}`
    }
    data() {
        let result = {}
        for (let key of keys) {
            let _value = this[key] || ""
            if (_value != "") result[key] = _value
        }
        return result
    }
    textsFormValues() {
        let result = {}
        if (this.texts){
            this.texts.forEach((t, i) => {
                result[`text_page_${i+1}`] = t
            })
            return result
        }
    }
}