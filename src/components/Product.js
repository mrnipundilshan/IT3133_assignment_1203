import { useState } from 'react';
import '../assets/CSS/layout.css';

export default function Product(props){
    const [quantity, setQuantity] = useState(0)

    const handleAddToCart = () => {
        if (quantity > 0) {
            props.addToCart({
                name: props.name,
                price: props.price * quantity,
                qty: quantity,
            })
            setQuantity(0)
        }
    }
    
    
    return(
        <div className="grid-item">

            <div class="card">
               
                
            </div>
        </div>
    );
}