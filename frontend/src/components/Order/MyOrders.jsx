import React, { useEffect } from 'react'
import './MyOrders.css'
import MetaData from '../layout/MetaData.js'
import Loader from '../layout/Loader/Loader'
import { DataGrid } from '@mui/x-data-grid'
import { Link, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { types, useAlert } from 'react-alert'
import { myOrders, clearErrors } from '../../actions/newOrderAction'
import { render } from 'react-dom'
import LaunchIcon from '@mui/icons-material/Launch';

const MyOrders = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, orders } = useSelector(state => state.myOrders)
    const { user } = useSelector(state => state.authData)
    const { token } = useSelector(state => state.authToken)

    const columns = [
        {
            field: "id", headerName: "Order ID", minWidth: 300, flex: .75
        },
        {
            field: "status",
            headerName: "Status", minWidth: 300, flex: 0.5,
            cellClassName: (params) => {
                return (params.getValue(params.id, "status")) === "Delivered" ? "greenColor" : "redColor"
            }


        },
        {
            field: 'itemQuantity',
            headerName: "Items Qty",
            type: "Number", minWidth: 300, flex: 0.5
        },
        {
            field: "amount",
            headerName: "Amount",
            type: "number", minWidth: 300, flex: 0.5
        },
        {
            field: "actions",
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            flex: 0.3,
            sortable: false,

            renderCell: (params) => {
                return (
                    <Link to={`/order/${params.getValue(params.id, "id")}`}><LaunchIcon /></Link>
                )
            }
        }
    ];
    const rows = [];
    {
        orders && orders.forEach((item, index) => {
            rows.push({
                itemQuantity: item?.orderItems.length,
                id: item?._id,
                status: item?.orderStatus,
                amount: item?.totalPrice

            })
        });
    }
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors());
        }
        dispatch(myOrders(token))
    }, [dispatch, alert, error])
    return (
        <>
            <MetaData title={`${user.name}-Orders`} />
            {
                loading ?

                    <Loader />
                    :

                    <div className="myOrdersPage">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            className='myOrdersTable'
                            autoHeight

                        />
                        <Typography id="myOrderHeading">{user.name}'s Orders</Typography>
                    </div>

            }

        </>
    )
}

export default MyOrders