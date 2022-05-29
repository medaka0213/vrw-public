import moment from 'moment';

export function get_end_time(months: number): string{
    let res = moment.utc();
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
    let start = moment.utc().format('YYYY-MM-DDTHH:mm:ss');
    let end = moment.utc();
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