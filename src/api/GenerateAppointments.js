const _monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


var fs = require("fs");

var fileContent = generateAppointments("01d06df3-071c-4713-89e8-9708ccde2cfc", 10);

console.log(fileContent)

function generateAppointments(clinic_id, days) {

    var appointment = {
        "appointment_id": 'EMPTY',
        "clinic_id": '',
        "time": '',
        "created_at": '',
        "date": '',
        "band": '',
    }

    appointment.created_at = new Date().getTime()
    appointment.clinic_id = clinic_id;

    return generateTime(appointment, days)
}
function toHumanTime(time) {

    let dateObject = new Date(time);

    const hours = dateObject.getHours()
    const minutes = dateObject.getMinutes()
    const date = dateObject.getDate()
    const month = _monthsArray[dateObject.getMonth()]
    const year = dateObject.getFullYear()

    return hours + ":" + minutes + " - " + date + "/" + month + "/" + year
}
function generateTime(appointment, days) {

    var result = [];
    var tempAppointment = [];

    const _today = new Date(Date.now())

    var hourTimeStamp;
    var dayTimeStamp = (new Date(_today.getFullYear(), _today.getMonth(), _today.getDate(), "08", "30").getTime()); //Today 8:30
    const oneDay = 86400 * 1000;
    const oneHour = 3600 * 1000;


    for (let i = 0; i < days; i++) { //Add a day

        hourTimeStamp = dayTimeStamp;
        for (let j = 0; j < 8; j++) { //Add an hour

            appointment.time = hourTimeStamp

            appointment.date = toHumanTime(hourTimeStamp)

            result.push({ ...appointment })

            hourTimeStamp = hourTimeStamp + oneHour

            appointment.band = Math.floor(Math.random() * 4) + 1

        }
        dayTimeStamp = dayTimeStamp + oneDay
    }
    return result;
}
