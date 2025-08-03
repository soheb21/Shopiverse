import { BarChart } from '../components/Charts'
import Siderbar from '../components/Siderbar'
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const BarCharts = () => {
  return (
    <div className="adminContainer">
    <Siderbar/>
    <main className='chart-container'>
        <h1>Bar Chart</h1>
        <section>
            <BarChart
              data1={[200, 444, 343, 556, 778, 455, 990]}
              data2={[300, 144, 433, 655, 237, 755, 190]}
              title1="Products"
              title2="Users"
              bgColor1={`hsl(260,50%,30%)`}
              bgColor2={`hsl(360,90%,90%)`}
            />
            <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
            <BarChart
              data1={[  200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,]}
              data2={[]}
              title1="Products"
              title2=""
              bgColor1={`hsl(260,50%,30%)`}
              bgColor2={""}
              labels={months}
              horizontal={true}
            />
            <h2>Top Selling Products & Top Customers</h2>
        </section>
    </main>
    </div>
  )
}

export default BarCharts