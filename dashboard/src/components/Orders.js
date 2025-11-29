import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Orders = () => {

    const[allorders,setallorders] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3002/allorders").then((res) => {
            setallorders(res.data);
        }, [])
    })
    return (
      <div className="orders">
        <div className="no-orders">
          <p>Your Orders</p>

          <div className="order-table">
            <table>
              <tr>
                <th>Name</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>Mode</th>
              </tr>
              {allorders.map((stock) => {
                return (
                  <>
                    <tr>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td>{stock.mode}</td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
};

export default Orders;