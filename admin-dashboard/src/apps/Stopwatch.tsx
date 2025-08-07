import { useEffect, useState } from 'react'
import Siderbar from '../components/Siderbar'

const Stopwatch = () => {

  const generterTime=(timeInSeconds:number)=>{
    const hour = String(Math.floor(timeInSeconds/3600))
    const minute = String(Math.floor((timeInSeconds%3600)/60))
    const seconds = String(Math.floor(timeInSeconds%60))
    return `${hour.padStart(2,'0')}:${minute.padStart(2,'0')}:${seconds.padStart(2,'0')}`

  }
  const [time, setTime] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  function resetTime(){
    setIsRunning(false);
    setTime(0);
  }
  
  useEffect(() => {
    let intervalID: number;
    if (isRunning)
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);

    return () => {
      clearInterval(intervalID);
    };
  }, [isRunning]);

  return (
    <div className="adminContainer">
    <Siderbar/>
    <main className='dashboardAppContainer'>
        <h1>Stopwatch</h1>
        <section>
            <div className="stopwatch">
                <h2>{generterTime(time)}</h2>
                <button onClick={()=>setIsRunning((prev)=>!prev)}>{isRunning?"Stop":"Start"}</button>
                <button onClick={resetTime}>Reset</button>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Stopwatch