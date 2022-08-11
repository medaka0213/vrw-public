/* eslint-disable */
import moment from "moment-timezone"
import 'moment/locale/ja'

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