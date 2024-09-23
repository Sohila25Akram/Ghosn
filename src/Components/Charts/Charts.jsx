import { PieChart, Pie, Sector, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
// import { RadialBarChart, Tooltip, Legend, RadialBar } from 'recharts';
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, Label } from 'recharts';
import { LineChart, Line } from 'recharts';
import './charts.css'

export function Spinner({data}){
    return(
        <>
            <ResponsiveContainer className="responsiveContainer" height={200}>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        // fill="#8884d8"
                        dataKey="value"
                        stroke="none"
                        
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                       
                    </Pie>
            
                </PieChart>
                
            </ResponsiveContainer>
        </>
    )
}

export function BarChartA({data}){
    return(
        <BarChart width={730} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    )
}

export function LineChartA({data}){
    return(
        <LineChart 
            width={730} 
            height={250} 
            data={data}
           
        >
            <CartesianGrid strokeDasharray=" 3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotoneX" dataKey="pv" stroke="#8884d8"/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    )
}

export function Range({gender}) {    
    return (
        <>
            <div className="gender-rate">
                <div style={{ width: `${gender}%` }}></div>
            </div>
            <span>{gender}%</span><br></br>
        </>
    );
}

