
import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';
import Product from './Product';
import Cart from './Cart';
import { useState } from 'react';

export default function Products() {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((prev) => {
            const existingProduct = prev.find((item) => {
                return (
                    item.name === product.name
                )
            })
            if (existingProduct) {
                return prev.map((item) => {
                    return (
                        item.name === product.name
                            ? { ...item, qty: item.qty + product.qty, price: item.price + product.price }
                            : item
                    )
                })
            }
            return [...prev, product]
        })
    }
    
    return (
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        
                    }
                </div>

            </div>
            <div className="item3">
                {
                    //cart
                }
                
            </div>
        </>
    );

}