import React from 'react'
import { groupNumber, ordersData } from '../../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import css from './Orders.module.css'
import logo from "../../../assets/logo.png";

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src={logo} alt="logo" />
                <span>Total Revenue</span>
            </div>

            <div className={`grey-container ${css.stat}`}>
                <span>Amount</span>
                <span>$ {groupNumber(4000)}</span>
            </div>

            <div className={css.orders}>
                {
                    ordersData.map((order, index) => (
                        <div key={index} className={css.order}>
                            <div>
                                <span>{order.name}</span>
                                <span>$ {order.change}</span>
                            </div>
                            <div>
                                <span>{order.type}</span>
                                <span>Items: {order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className={css.orderChart}>
                <span>Split by orders</span>
                <OrdersPieChart/>
            </div>
        </div>
    )
}

export default Orders