import { Event, Launch, Meetup } from "./mission";

const Models:any = {
    launch: Launch,
    event: Event,
    meetup: Meetup
}

export function GetModel(type:string) :any {
    if (type in Models) {
        return Models[type]
    } else {
        return Object
    }
}

export default Models