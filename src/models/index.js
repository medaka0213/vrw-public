import { Launch } from "./launch";
import { Event } from "./event";

const Models = {
    launch: Launch,
    event: Event
}

export function GetModel(type) {
    if (type in Models) {
        return Models[type]
    } else {
        return Object
    }
}

export default Models