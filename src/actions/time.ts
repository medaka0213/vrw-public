/* eslint-disable */
import moment from "moment-timezone"
import 'moment/locale/ja'

export function zeroPadding(num: number, length: number): string {
  return (Array(length).join('0') + num).slice(-length)
}

export function get_end_time(months: number): string{
    const res:any = moment.utc();
    res.set({
        'month': res.month() + months,
        'date': 0,
        'hour': 23,
        'minute': 59,
        'second': 59,
        'millisecond': 999
    });
    return res.format('YYYY-MM-DDTHH:mm:ss');
}

export function time_between(mode:string="upcoming", months:number=3): string[]{
    let start:any = moment.utc().format('YYYY-MM-DDTHH:mm:ss');
    let end:any = moment.utc();
    if (mode == "upcoming"){
        end.set({
            'month': end.month() + months,
            'date': 0,
            'hour': 23,
            'minute': 59,
            'second': 59,
        'millisecond': 999
    });
    return [start, end.format('YYYY-MM-DDTHH:mm:ss')];
}else {
    end.set({
        'month': end.month() - months,
        'date': 0,
        'hour': 23,
        'minute': 59,
        'second': 59,
        'millisecond': 999
    });
    return [end.format('YYYY-MM-DDTHH:mm:ss'), start];
}
}

export function format_datetime_JP(datetime:string): string{
    return moment(datetime+"Z").tz('Asia/Tokyo').format("M/D(ddd) HH:mm");
}

export function format_countdown(datetime:string): string{
    let dt = moment(datetime+"Z");
    let res:string = ""

    let diff = dt.diff(moment().utc())
    let duration = moment.duration(diff)

    let years = Math.abs(duration.years())
    let months = Math.abs(duration.months())
    let days = Math.abs(duration.days())
    let hours = zeroPadding(Math.abs(duration.hours()), 2)
    let minutes = zeroPadding(Math.abs(duration.minutes()), 2)
    let seconds = zeroPadding(Math.abs(duration.seconds()), 2)

    if (duration.asMilliseconds() < 0){
        res = "T+ "
    }else{
        res = "T- "
    }

    if (years > 0){
        res += years + "年 "
    }
    if (months > 0){
        res += months + "ヶ月 "
    }
    if (days > 0){
        res += days + "日 "
    }
    res += `${hours}:${minutes}:${seconds}`

    return res
}