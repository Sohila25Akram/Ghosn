import { useState, useEffect } from 'react';
// import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
// import { RadialBarChart, Tooltip, Legend, RadialBar } from 'recharts';
import initialImage from '../assets/image.png'
import './../styles/Customers.css'
import { Spinner } from '../Components/Charts/Charts';
import { Range } from '../Components/Charts/Charts';

const currentCustomers = [
    { name: 'fill', value: 30, color: '#008D3E' },
    { name: 'empty', value: 70, color: '#E2E2E2' },
];

const newCustomers = [
    { name: 'fill', value: 30, color: '#008D3E' },
    { name: 'empty', value: 70, color: '#E2E2E2' },
];
const targetCustomers = [
    { name: 'fill', value: 30, color: '#008D3E' },
    { name: 'empty', value: 70, color: '#E2E2E2' },
];
const retargetCustomers = [
    { name: 'fill', value: 30, color: '#008D3E' },
    { name: 'empty', value: 70, color: '#E2E2E2' },
];
    

export function Customers(){

    const range = {
        male: 36,
        female: 64
    };
    
    return(
        <div className="container d-flex customers">
            <div>
            <div className="customers-overview data-box-container">
                <div className='label-cont'>
                    <div>
                        <h3>Customers</h3>
                        <span>Information about your customers</span>
                    </div>
                    <i className="ri-equalizer-line"></i>
                </div>
                {/* import the spinner */}
                <div className='pieChart-container'>
                    <div className='part'>
                        <Spinner data={currentCustomers} />                       
                        <span className='bottom-title'>current customers</span>
                        <span className='fill-value'><span className='percent-numeric'>{currentCustomers.find(item => item.name === "fill").value}</span>%</span>
                    </div>
                    <div className='part'>
                        <Spinner data={newCustomers} />
                        <span className='bottom-title'>New customers</span>
                        <span className='fill-value'><span className='percent-numeric'>{newCustomers.find(item => item.name === "fill").value}</span>%</span>
                    </div>
                    <div className='part'>
                        <Spinner data={targetCustomers} />
                        <span className='bottom-title'>Target customers</span>
                        <span className='fill-value'><span className='percent-numeric'>{targetCustomers.find(item => item.name === "fill").value}</span>%</span>
                    </div>
                    <div className='part'>
                        <Spinner data={retargetCustomers} />
                        <span className='bottom-title'>Retarget customers</span>
                        <span className='fill-value'><span className='percent-numeric'>{retargetCustomers.find(item => item.name === "fill").value}</span>%</span>
                    </div>
                </div>
            </div>
            <div className='states-overview data-box-container'>
                <div className='label-cont'>
                    <div>
                        <h3>States Overview</h3>
                        <span>Information about store visites</span>
                    </div>
                    <i className="ri-equalizer-line"></i>
                </div>
                <span className='range-label'>Male</span><br />
                <Range gender={range.male} />
                {/* <span className='gender-rate male'></span><br /> */}
                <span className='range-label'>Female</span><br />
                <Range gender={range.female} />
                {/* <span className='gender-rate female'></span> */}
            </div>
            </div>
            <div className="customers-container data-box-container">
                <h3>Current Customer</h3>
                <table className='customer-table'>
                    <tbody>
                        {/* <tr>
                            <td>
                                <div className='profile-img-container'>
                                    <img src={initialImage} alt='customer profile' />
                                </div>
                            </td>
                            <td>
                                <span>Shane Henry</span>
                            </td>
                            <td>
                                <i className="ri-edit-line"></i>
                            </td>
                            <td>
                                <i className="ri-delete-bin-5-line"></i>
                            </td>
                            <td>
                                <i className="ri-more-fill"></i>
                            </td>
                            <td>
                                <a href={"/"} className='main-button green-button'>View Profile</a>
                            </td>
                        </tr> */}
                        <tr>
                            <Customer />
                        </tr>
                        <tr>
                            <Customer />
                        </tr>
                        <tr>
                            <Customer />
                        </tr>
                        {/* <tr> */}
                             {/* <div className='circle'>
                                66%
                            </div> */}
                        {/* </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export function Customer(){
    return(
        <>
            <td>
                <div className='profile-img-container'>
                    <img src={initialImage} alt='customer profile' />
                </div>
            </td>
            <td>
                <span>Shane Henry</span>
            </td>
            <td>
                <i className="ri-edit-line"></i>
            </td>
            <td>
                <i className="ri-delete-bin-5-line"></i>
            </td>
            <td>
                <i className="ri-more-fill"></i>
            </td>
            <td>
                <a href={"/"} className='main-button green-button'>View Profile</a>
            </td>
        </>
    )
}
