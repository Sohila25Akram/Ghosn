import { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import initialImage from '../assets/image.png';
import './../styles/Customers.css'

const data = {
    value: 400
}

export function Customers(){
    return(
        <div className="container">
            <div className="customers-overview data-box-container">
                <div className='label-cont'>
                    <div>
                        <h3>Customers</h3>
                        <span>Information about your customers</span>
                    </div>
                    <i className="ri-equalizer-line"></i>
                </div>
                {/* import the spinner */}
                <Spinner />
            </div>
            <div className='states-overview data-box-container'>
                <div className='label-cont'>
                    <div>
                        <h3>States Overview</h3>
                        <span>Information about store visites</span>
                    </div>
                    <i className="ri-equalizer-line"></i>
                </div>
                <span>Male</span><br />
                <Range />
                {/* <span className='gender-rate male'></span><br /> */}
                <span>Female</span><br />
                <Range />
                {/* <span className='gender-rate female'></span> */}
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

export function Range(){
    const [range, setRange] = useState(36);

    useEffect(() => {
        const rangeTab = document.querySelector(".gender-rate div");

        if (rangeTab) {
            rangeTab.style.width = `${range}%`;
        }
    }, []);
    
    return(
        <>
            <div className="gender-rate">
            <div></div>
            </div>
            <span>{range}%</span><br></br>
        </>
    )
}

export function Spinner(){

    return(
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        
                    />
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}

