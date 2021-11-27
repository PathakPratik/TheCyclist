import { useTimer } from 'react-timer-hook';

function Timer() {

  const time:any = new Date();
  time.setSeconds(time.getSeconds() + 600);

  const {
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
  } = useTimer({ expiryTimestamp: time });

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '40px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={() => start}>Start</button>
      <button onClick={() => pause}>Pause</button>
    </div>
  );
}

export default Timer