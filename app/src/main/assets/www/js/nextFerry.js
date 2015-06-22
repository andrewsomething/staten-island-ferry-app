$(function(){
    var now = new Date();
    var day = now.getDay();

    // Query params.
    var reqDay = $.url("?day");
    var reqTerm = $.url("?term");


    // Next Ferry from St. George pop-up.
    $('#next-stg-ferry').on('click', function(e){
        var terminal = 'stg';
        var timetable = getTimetable(terminal, day);
        var nextFerry = getFerry(timetable, terminal);
        $('#next-ferry').html("<h1>" + nextFerry + "</h1>");
    });


    // Next Ferry from Whitehall pop-up.
    $('#next-white-ferry').on('click', function(e){
        var terminal = 'white';
        var timetable = getTimetable(terminal, day);
        var nextFerry = getFerry(timetable, terminal);
        $('#next-ferry').html("<h1>" + nextFerry + "</h1>");
    });


    // Timetable page.
    if(reqDay != null){
        if (reqTerm == "stg") {
            $('#terminal').html("From St. George:");
        } else {
            $('#terminal').html("From Whitehall:");
        }

        if (reqDay == "weekday") {
            $('.navbar-brand').html("Weekdays");
            var timetable = getTimetable(reqTerm, 2);
        } else if (reqDay == "sunday") {
            $('.navbar-brand').html("Sundays");
            var timetable = getTimetable(reqTerm, 0);
        } else {
            $('.navbar-brand').html("Saturdays");
            var timetable = getTimetable(reqTerm, 6);
        };

        printTimes(timetable);
    }


    function getTimetable(terminal, day){
        if (terminal=='stg'){
            /*Weekdays from St. George Terminal*/
            var weekTimetable = ['00:00', '00:30', '1:00', '2:00', '3:00', '4:00',
                '5:00', '5:30', '6:00', '6:20', '6:40', '7:00', '7:15', '7:30',
                '7:45', '8:00', '8:15', '8:30', '8:45', '9:00', '9:30', '10:00',
                '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
                '14:00', '14:30', '15:00', '15:30', '15:50', '16:10', '16:30',
                '16:50', '17:10', '17:30', '17:45', '18:00', '18:15', '18:30',
                '18:45', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
                '22:00', '22:30', '23:00', '23:30'];

            /*Saturdays from St. George Terminal*/
            var satTimetable = ['00:00', '00:30', '1:00', '1:30', '2:00', '2:30',
                '3:00', '4:00', '5:00', '6:00', '6:30', '7:00', '7:30', '8:00',
                '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
                '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
                '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
                '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
                '22:30', '23:00', '23:30'];

            /*Sundays from St. George Terminal*/
            var sunTimetable = ['00:00', '00:30', '1:00', '1:30', '2:00', '2:30',
                '3:00', '4:00', '5:00', '6:00', '6:30', '7:00', '7:30', '8:00',
                '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
                '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
                '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
                '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
                '22:30', '23:00', '23:30'];
        }

        else {
            /*Weekdays from Whitehall Terminal*/
            var weekTimetable = ['00:00', '00:30', '1:00', '1:30', '2:30',
                '3:30', '4:30', '5:30', '6:00', '6:30', '6:50', '7:10', '7:30',
                '7:45', '8:00', '8:15', '8:30', '8:45', '9:00', '9:15', '9:30',
                '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00',
                '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:20',
                '16:40', '17:00', '17:15', '17:30', '17:45', '18:00', '18:15',
                '18:30', '18:45', '19:00', '19:20', '19:40', '20:00', '20:30',
                '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];

            /*Saturdays from Whitehall Terminal*/
            var satTimetable = ['00:00', '00:30', '1:00', '1:30', '2:00', '2:30',
                '3:00', '3:30', '4:30', '5:30', '6:30', '7:00', '7:30', '8:00',
                '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
                '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
                '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
                '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
                '22:30', '23:00', '23:30'];

            /*Sundays from Whitehall Terminal*/
            var sunTimetable = ['00:00', '00:30', '1:00', '1:30', '2:00', '2:30',
                '3:00', '3:30', '4:30', '5:30', '6:30', '7:00', '7:30', '8:00',
                '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
                '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
                '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
                '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
                '22:30', '23:00', '23:30'];
        }

        if (day==0){
            var timetable = sunTimetable;
        } else if (day==6){
            var timetable = satTimetable;
        } else {
            var timetable = weekTimetable;
        }

        return timetable;
    }


    function getFerry (timetable, terminal){
        var lastFerry = new Date();
        var ferryTime = new Date();

        lastFerry = setTimeObj(timetable[timetable.length-1], lastFerry);

        console.log(now, lastFerry)

        if (now >= lastFerry && day==0) { // Sunday after last ferry.
            timetable = getTimetable(1, terminal);
            ferryTime = setTimeObj(timetable[0], ferryTime);
            nextFerry = convertTime(ferryTime);
            return nextFerry;
        } else if (now >= lastFerry && day==5) { // Friday after last ferry.
            timetable = getTimetable(6, terminal);
            ferryTime = setTimeObj(timetable[0], ferryTime);
            nextFerry = convertTime(ferryTime);
            return nextFerry;
        } else if (now >= lastFerry && day==6){ // Saturday after last ferry.
            timetable = getTimetable(0, terminal);
            ferryTime = setTimeObj(timetable[0], ferryTime);
            nextFerry = convertTime(ferryTime);
            return nextFerry;
        } else { // Iter normally
            for (var i=0,j=timetable.length; i<j; i++) {
                ferryTime = setTimeObj(timetable[i], ferryTime);
                if (ferryTime > now){
                    nextFerry = convertTime(ferryTime);
                    return nextFerry;
                    break;
                } else if (i == (j - 1)) {
                    ferryTime = setTimeObj(timetable[0], ferryTime);
                    nextFerry = convertTime(ferryTime);
                    return nextFerry;
                }
            }
        }
    }


    function convertTime (ferryTime){
        if (ferryTime.getMinutes()<10){
            ferryMin = ferryTime.getMinutes() + "0";
        } else {
            ferryMin = ferryTime.getMinutes();
        }

        if (ferryTime.getHours()>12) {
            nextFerry = (ferryTime.getHours()-12)+ ":" + ferryMin + " P.M.";
        } else if (ferryTime.getHours()==12) {
            nextFerry = (ferryTime.getHours())+ ":" + ferryMin + " P.M.";
        } else if (ferryTime.getHours()==0){
            nextFerry = (ferryTime.getHours()+12)+ ":" + ferryMin + " A.M.";
        } else {
            nextFerry = ferryTime.getHours()+ ":" + ferryMin + " A.M.";
        }

        return nextFerry;
    }


    function setTimeObj(timeString, timeObj){
        splitTime = timeString.split(':');
        timeObj.setHours(splitTime[0]);
        timeObj.setMinutes(splitTime[1]);

        return timeObj;
    }


    function printTimes(timetable){
        for (var i=0,j=timetable.length; i<j; i++) {
            var ferryTime = setTimeObj(timetable[i], now);
            var nextFerry = convertTime(ferryTime);
            var listItem = "<div class='list-group-item'> \
                                <strong>" + nextFerry + "</strong> \
                            </div>"
            if (nextFerry.split(' ')[1] == "A.M.") {
                $("#am-times").append(listItem);
            } else {
                $("#pm-times").append(listItem);
            }
        }
    }
});