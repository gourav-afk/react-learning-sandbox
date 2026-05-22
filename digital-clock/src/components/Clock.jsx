import React, {useEffect, useState} from "react";


function Clock(){
    const [currentTime, setCurrentTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        dayPeriod: 'N/A'
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const getCurrentHours = now.getHours() % 12 || 12;
            const getCurrentMinutes = now.getMinutes();
            const getCurrentSeconds = now.getSeconds();
            const getCurrentTimePeriod = now.getHours() < 12 ? "AM" : "PM";

            setCurrentTime({
                hours: getCurrentHours <= 9 ? `0${getCurrentHours}` : getCurrentHours,
                minutes: getCurrentMinutes <= 9 ? `0${getCurrentMinutes}` : getCurrentMinutes,
                seconds: getCurrentSeconds <= 9 ? `0${getCurrentSeconds}` : getCurrentSeconds,
                dayPeriod: getCurrentTimePeriod
            })
        }
        updateTime();
        const timerId = setInterval(updateTime, 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="clock">
            <p>
                {`${currentTime.hours} : ${currentTime.minutes} : ${currentTime.seconds}`}
            </p>
            <p className="time-period">
                {currentTime.dayPeriod}
            </p>
        </div>
    )
}

export default Clock;