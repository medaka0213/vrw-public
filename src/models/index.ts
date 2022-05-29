import { Event, Launch } from "./mission";

const Models:any = {
    launch: Launch,
    event: Event
}

export function GetModel(type:string) :any {
    if (type in Models) {
        return Models[type]
    } else {
        return Object
    }
}

export default Models