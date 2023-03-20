import React from 'react'
import Sidebar from './Sidebar.jsx'
import './Dashboard.css'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Doughnut, Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement)
Chart.register(ArcElement)
Chart.register(Legend)
Chart.register(Tooltip)



const Dashboard = () => {

    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ['tomato'],
                hoverBackgroundColor: ['rgb(197,73,50)'],
                data: [0, 4000]
            }
        ]
    }

    const doughnutState = {
        labels: ["Out Of Stock", "InStock"],
        datasets: [
            {

                backgroundColor: ['#00A684', '#680084'],
                hoverBackgroundColor: ['#485000', '#35014F'],
                data: [2, 10]
            }
        ]
    }
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className="dashboardContainer">
                <Typography component={"h1"} >
                    Dashboard
                </Typography>
                <div className="dashboardSummary">
                    <div>
                        <p>
                            Total Amount <br /> $2000
                        </p>
                    </div>
                    <div className="dashboardSummaryBox2">
                        <Link to={'/admin/products'}>
                            <p>Product</p>
                            <p>50</p>
                        </Link>

                        <Link to={'/admin/orders'}>
                            <p>Orders</p>
                            <p>9</p>
                        </Link>

                        <Link to={'/admin/users'}>
                            <p>Users</p>
                            <p>4</p>
                        </Link>
                    </div>
                </div>

                <div className="lineChart">
                    <Line data={lineState} />
                </div>

                <div className="doghnutChart">
                    <Doughnut data={doughnutState} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard