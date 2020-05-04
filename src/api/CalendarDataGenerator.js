import uuid from 'uuid-random';

var _daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var _monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var _data = [];

var _day = {
    id: "",
    time: "",
    date: "",
    day: "",
    month: ""
}
var _days = []

export default function CalendarDataGenerator() {

    let _date = new Date()

    var _todayTime = new Date(_date.getFullYear(), _date.getMonth(), _date.getDate(), '12', '00', '00', '00').getTime()

    for (let index = 0; index < 20; index++) {

        var _todayObject = new Date(_todayTime)

        _day = {
            id: uuid(),
            time: _todayTime,
            date: _todayObject.getDate(),
            day: _daysArray[_todayObject.getDay()],
            month: _monthsArray[_todayObject.getMonth()]

        }
        _todayTime = _todayTime + (86400 * 1000) // Add one day
        _days[index] = _day
    }



    return _days
}

