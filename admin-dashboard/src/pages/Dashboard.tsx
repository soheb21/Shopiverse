import { BsSearch } from "react-icons/bs"
import Siderbar from "../components/Siderbar"
import {  FaRegBell } from "react-icons/fa"
import user from "../assets/user.jpeg"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
import { BarChart, DoughnutChart } from "../components/Charts"
import { BiMaleFemale } from "react-icons/bi"

const Dashboard = () => {
  return (
    <div className="adminContainer">
        <Siderbar/>
        <main className="dashboard">
          <div className="bar">
              <BsSearch/>
              <input type="text"  placeholder="search for data, users, docs" />
              <FaRegBell/>
              <img src={user} alt="user" />
          </div>
          <section className="widgetContainer">
            <WidgetItem 
            percent={40}
            amount={true}
            value={34000}
            heading="Revenue"
            color="rgb(0,115,255)"
            
            />
             <WidgetItem 
            percent={-14}
            amount={false}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
            
            />
             <WidgetItem 
            percent={80}
            amount={false}
            value={23000}
            heading="Transactions"
            color="rgb(255,196,0)"
            
            />
             <WidgetItem 
            percent={40}
            amount={false}
            value={200}
            heading="Products"
            color="rgb(75,6,0)"
            
            />
          </section>

          <section className="grapshConatiner">
            <div className="revenueChart">
              <h5>Revenue & Transaction</h5>
              <BarChart 
              data1={[300,144,413,655,237,765,888]}
              data2={[299,100,300,233,400,400,222]}
              title1="Revenue"
              title2="Transaction"
              bgColor1="rgb(0,115,255)"
              bgColor2="rgba(53,162,235,0.8)"

              />
            </div>
            <div className="dashboardCategories">
              <h5>Inventory</h5>
              <div >
                <CategoryItem
                heading="Laptops"
                value={70}
                color="hsl(69,100%,50%)"
                />
                 <CategoryItem
                heading="Fashion"
                value={50}
                color="hsl(29,100%,50%)"
                />
                 <CategoryItem
                heading="Beauty"
                value={90}
                color="hsl(193,100%,50%)"
                />
              </div>
            </div>
          </section>

          <section className="transactionContainer">
            <div className="genderChart">
              <h2>Gender Ratio</h2>
              <DoughnutChart
               data={[12,19]} 
               labels={['Female','Male']} 
               bgColor={['hsl(340,82%,56%)','hsl(193,100%,56%)']}
               />
              <p>
                <BiMaleFemale/>
              </p>
            </div>
            <div className="transactionTable">
              table
            </div>
          </section>
        </main>
    </div>
  )
}
interface widgetItemTypes{
  percent:number,
  amount:boolean,
  value:number,
  heading:string,
  color:string
}
const WidgetItem=({amount,color,heading,percent,value}:widgetItemTypes)=>{
return (
  <article className="widget">
  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount?`$${value}`:value}</h4>
    {
      percent>0?
      <span className="green"><HiTrendingUp/> +{percent}%</span>
      :<span className="red"><HiTrendingDown/> {percent}%</span>

    }
  </div>
  <div className="widgetCircle" style={{background:`conic-gradient(${color} ${(Math.abs(percent)/100)*360}deg,rgb(255,255,255) 0)`}}>
    <span style={{color}}>{percent}%</span>
  </div>
</article>
)
}

interface categoryItemProps{
  heading:string,
  value:number,
  color:string

}
const CategoryItem=({heading,value,color}:categoryItemProps)=>{
  return (
    <div className="categoryItem">
      <h5>{heading}</h5>
      <div >
        <div style={{
          backgroundColor:color,
          width:`${value}%`
        }}></div>
      </div>
      <span>{value}</span>
    </div>
  )
}
export default Dashboard