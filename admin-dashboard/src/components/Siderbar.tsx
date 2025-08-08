import { useEffect, useState } from "react"
import type { IconType } from "react-icons"
import { AiFillFileText } from "react-icons/ai"
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa"
import { HiMenuAlt4 } from "react-icons/hi"
import { IoIosPeople } from "react-icons/io"
import { RiCoupon3Fill, RiDashboardFill,RiShoppingBagFill } from "react-icons/ri"
import { Link, useLocation, type Location } from "react-router-dom"

const Siderbar = () => {
  const location = useLocation()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [phoneActive, setPhoneActive] = useState<boolean>(window.innerWidth<1100)
  const resizehandler=()=>setPhoneActive(window.innerWidth<11000);
  useEffect(()=>{
    window.addEventListener("resize",resizehandler);
    return ()=>{
      window.removeEventListener("resize",resizehandler);
    }
  },[])
  return (
    <>
    {phoneActive && (
      <button id="hamburger" onClick={() => setShowModal(true)}>
        <HiMenuAlt4 />
      </button>
    )}
    <aside
    style={phoneActive?{
      width :"20rem",
      height:"100vh",
      position:"fixed",
      left:showModal?"0":"-20rem",
      transition:"all .5s"
    }:{}}
    >
      <h2>Logo</h2>
     <DivOne location={location} />
     <DivTwo location={location} />
     <DivThree location={location} />

     {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
    </aside>
    </>
  )
}

const DivOne=({location}:{location:Location})=>{
  return (
    <div>
    <h5>Dashbaord</h5>
    <ul>
      <Li 
      url="/admin/dashboard"
      text="Dashboard"
      location={location}
      Icon={RiDashboardFill}
      />
      <Li 
      url="/admin/products"
      text="Product"
      location={location}
      Icon={RiShoppingBagFill}
      />
      <Li 
      url="/admin/customers"
      text="Customer"
      location={location}
      Icon={IoIosPeople}
      />
      <Li 
      url="/admin/transaction"
      text="Transaction"
      location={location}
      Icon={AiFillFileText}
      />
    </ul>
  </div>
  )
}
const DivTwo=({location}:{location:Location})=>{
  return (
    <div>
    <h5>Charts</h5>
    <ul>
      <Li 
      url="/admin/chart/bar"
      text="Bar"
      location={location}
      Icon={FaChartBar}
      />
      <Li 
      url="/admin/chart/pie"
      text="Pie"
      location={location}
      Icon={FaChartPie}
      />
      <Li 
      url="/admin/chart/line"
      text="Line"
      location={location}
      Icon={FaChartLine}
      />
   
    </ul>
  </div>
  )
}
const DivThree=({location}:{location:Location})=>{
  return (
    <div>
    <h5>Apps</h5>
    <ul>
      <Li 
      url="/admin/app/stopwatch"
      text="Stopwatch"
      location={location}
      Icon={FaStopwatch}
      />
      <Li 
      url="/admin/app/coupon"
      text="Coupon"
      location={location}
      Icon={RiCoupon3Fill}
      />
      <Li 
      url="/admin/app/toss"
      text="Toss"
      location={location}
      Icon={FaGamepad}
      />
   
    </ul>
  </div>
  )
}

interface liProps{
url:string,
text:string,
Icon:IconType,
location:Location,
}

const Li=({url,Icon,location,text}:liProps)=>{
  return <li style={{backgroundColor:`${location.pathname.includes(url)?"rgba(0,115,225,0.1)":"white"}`}}>
    <Link to={url} >
      <Icon/>
      {text}
      </Link>
  </li>
}

export default Siderbar