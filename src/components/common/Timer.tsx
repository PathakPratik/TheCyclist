import { useStopwatch } from 'react-timer-hook';

function Timer() {

  const time:any = new Date();
  time.setSeconds(time.getSeconds() + 600);

  const {
    seconds,
    minutes,
    hours
  } = useStopwatch({ autoStart: true });

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '40px'}}>
        <span>{('0'+hours).slice(-2)}</span>:<span>{('0'+minutes).slice(-2)}</span>:<span>{('0'+seconds).slice(-2)}</span>
      </div>
    </div>
  );
}

export default Timer