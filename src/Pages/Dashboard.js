import './../styles/dashboard.css'
import { BarChartA, LineChartA, Spinner, Range } from '../Components/Charts/Charts';


const newCustomers = [
    { name: 'fill', value: 30, color: '#475BE8' },
    { name: 'empty', value: 70, color: '#E4E8EF' },
];
const targetCustomers = [
    { name: 'fill', value: 30, color: '#008D3E' },
    { name: 'empty', value: 70, color: '#E4E8EF' },
];
const retargetCustomers = [
    { name: 'fill', value: 30, color: '#E28512' },
    { name: 'empty', value: 70, color: '#E4E8EF' },
];

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]

const data2 = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]

  
export function Dashboard(){
    const plants = {
        plantsName : 70,
        others: 80
    }
    return(
        <div className="container">
            <div className='dashboard-container'>
                <h3>Dashboard</h3>
                
                <div className='dashborad-spinner-container'>
                    <div className='data-box-container-2'>
                        <div className='spinner-info'>
                            <span>Total sales</span>
                            <span>${newCustomers.find(item => item.name === "fill").value}K</span>
                            <span>We have sold 123 items</span>
                        </div>
                        <Spinner data={newCustomers} />
                    </div>
                    <div className='data-box-container-2'>
                    <div className='spinner-info'>
                            <span>Total sales</span>
                            <span>${targetCustomers.find(item => item.name === "fill").value}K</span>
                            <span>We have sold 123 items</span>
                        </div>
                        <Spinner data={targetCustomers} />
                    </div>
                    <div className='data-box-container-2'>
                        <div className='spinner-info'>
                            <span>Total sales</span>
                            <span>${retargetCustomers.find(item => item.name === "fill").value}K</span>
                            <span>We have sold 123 items</span>
                        </div>
                        <Spinner data={retargetCustomers} />
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='main-charts'>
                        <div className='barchart-container data-box-container-2'>
                            <h4>Total Revnue</h4>
                            <div className='revenue'>
                                <span className="revenue-k">$20.4k</span>
                                <span className='revenue-det'><i className="ri-arrow-up-line"></i>5% than last month</span>
                            </div>
                            <BarChartA data={data} />
                        </div>
                        <div className='linechart-container data-box-container-2'>
                            <h4>This Week Statistics</h4>
                            <div className='revenue'>
                                <span className='revenue-det'>Revenue and Sales</span>
                            </div>
                            <LineChartA data={data2} />
                        </div>
                    </div>
                    <div className='most-sales-container data-box-container-2'>
                        <h4>Most Sold Items</h4>
                        <span className='range-label'>Plant Name</span><br />
                        <Range gender={plants.plantsName} />
                        <span className='range-label'>Plant Name</span><br />
                        <Range gender={plants.plantsName} />
                        <span className='range-label'>Plant Name</span><br />
                        <Range gender={plants.plantsName} />
                        <span className='range-label'>Plant Name</span><br />
                        <Range gender={plants.plantsName} />
                        <span className='range-label'>Others</span><br />
                        <Range gender={plants.others} />
                    </div>
                </div>
            </div>
        </div>
    )
}