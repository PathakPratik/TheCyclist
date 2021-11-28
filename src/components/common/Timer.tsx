import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function Timer(props:{ startTimer: boolean }) {

  const [timerValue, setTimeValue] = React.useState<string>('00:00:00')

  React.useEffect(() => {
    if(props.startTimer) {
         start() 
    }
    else {
        pause()
    }
  },[props.startTimer])

  const time:any = new Date();
  time.setSeconds(time.getSeconds() + 600);

  const {
    seconds,
    minutes,
    hours,
    start,
    pause
  } = useStopwatch({ autoStart: false });

  React.useEffect(() => {
    const timerValue = ('0'+hours).slice(-2) + ':' + ('0'+minutes).slice(-2) + ':' + ('0'+seconds).slice(-2)
    setTimeValue(timerValue)
    localStorage.setItem("timerValue", timerValue)
  },[hours, minutes, seconds])

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '40px'}}>
        <span>{timerValue}</span>
      </div>
    </div>
  );
}


export default Timer