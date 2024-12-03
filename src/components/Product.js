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
            <img src={require(`../assets/image/${props.img}`)} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}Price:{props.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min={0} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
                    </div>
                    <button class="card-button" onClick={handleAddToCart}>Add to Cart</button>
                </div>
                
            </div>
        </div>
    );
}