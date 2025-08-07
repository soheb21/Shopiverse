import { useState } from 'react'
import Siderbar from '../components/Siderbar'

const TossCoin = () => {
  const [angle, setAngle] = useState<number>(0)
  function flipCoin(){
    if(Math.random()>0.5) setAngle((prev)=>prev+180)
    else setAngle((prev)=>prev+360);
  }
  return (
    <div className="adminContainer">
    <Siderbar/>
    <main className='dashboardAppContainer'>
      <h1>Toss Coin</h1>
      <section>
        <article
         className="tosscoin"
         onClick={flipCoin}
         style={{
           transform: `rotateY(${angle}deg)`,
         }}
        >
          <div></div>
          <div></div>
        </article>
      </section>
    </main>
    </div>
  )
}

export default TossCoin