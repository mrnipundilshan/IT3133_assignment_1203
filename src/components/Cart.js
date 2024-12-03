import { useEffect, useState } from "react";

export default function Cart({cart}) {

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        let newTotal = 0
        cart.forEach(({ price }) => {
            newTotal += price
        })
        setTotal(newTotal)
    },[cart])

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {cart && cart.map(({ name, qty, price }, index) => {
                    
                })
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>{total}</td>
                </tr>
            </table>
           
        </div>
    );
}