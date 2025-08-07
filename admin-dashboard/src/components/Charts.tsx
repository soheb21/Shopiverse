import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
  ArcElement,
  PointElement,
  LineElement,
  Filler,

} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
interface barChartProps{
    data1:number[],
    data2:number[],
    title1:string,
    title2:string,
    bgColor1:string,
    bgColor2:string,
    horizontal?:boolean
    labels?:string[]
}



export function BarChart({data1=[],data2=[],title1,title2,bgColor1,bgColor2,horizontal,labels=months}:barChartProps) {
    const options:ChartOptions<"bar"> = {
        responsive: true,
        indexAxis:horizontal?"y":"x",
        plugins: {
          legend: {
            display:true
          },
          title: {
            display: false,
            text: 'Revenue',
          },
        },
        scales:{
            y:{
                beginAtZero:true,
                grid:{
                    display:false
                },
            },
            x:{
                beginAtZero:true,
                grid:{
                    display:false
                },
            },
            
        }
      };
      
      
      
      const data:ChartData<'bar',number[],string> = {
        labels:labels,
        datasets: [
          {
            label:title1,
            data: data1,
            backgroundColor: bgColor1,
            barThickness:"flex",
            barPercentage:1,
            categoryPercentage:0.4
          },
          {
            label: title2,
            data: data2,
            backgroundColor: bgColor2,
            barThickness:"flex",
            barPercentage:1,
            categoryPercentage:0.4
          },
        ],
      };
  return <Bar options={options} data={data} />;
}




interface doughnutChartprops{
    labels:string[],
    data:number[],
    bgColor:string[],
    cutout?:number|string,
    legends?:boolean,
    offset?:number[]
    
}
export  function DoughnutChart({data,labels,bgColor,cutout,legends,offset}:doughnutChartprops){
    const doughnutOptions:ChartOptions<"doughnut">={
        responsive:true,
        plugins:{
            legend:{
                display:legends,
                position:"bottom",
                labels:{
                    padding:40
                },
                 }
        },
        cutout
    }

    const doughnutData:ChartData<"doughnut",number[],string>={
        labels,
        datasets:[{
            data,
            backgroundColor:bgColor,
            offset,
            borderWidth:0
        }]
    };



    return <Doughnut data={doughnutData} options={doughnutOptions}/>
}

// pie chart
interface pieChartprops{
  labels:string[],
  data:number[],
  bgColor:string[],
  offset?:number[]
  
}

export function PieChart({data,labels,bgColor,offset}:pieChartprops){

  const pieChartOption:ChartOptions<"pie">={
    responsive:true,
    plugins:{
        legend:{
            display:false,
        }
    },
  }

  const pieChartData:ChartData<"pie">={
    labels,
    datasets:[
      {
        data,
        backgroundColor:bgColor,
        offset //offset give margin
      }
    ]
    
  }
  return <Pie data={pieChartData} options={pieChartOption} />
}

// line Chart
interface lineChartProps{
  label:string,
  data:number[],
  bgColor:string,
  borderColor:string,
  labels?:string[]
}

export function LineChart({label,labels,data,bgColor,borderColor}:lineChartProps){

  const lineChartOptions:ChartOptions<"line">={
    responsive:true,
    plugins:{
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Revenue',
      },
    },
  }

  const lineChartData:ChartData<"line">={
    labels,
    datasets:[
      {
       fill:true,
       label,
       data,
       borderColor,
       backgroundColor:bgColor
      }
    ]
  }
  return <Line data={lineChartData} options={lineChartOptions}/>
}


