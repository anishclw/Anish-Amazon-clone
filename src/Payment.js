import React ,{useEffect, useState}from 'react';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import CheckOutProduct from './CheckOutProduct';
import {Link, useHistory} from "react-router-dom";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {
    const [{basket,user}, dispatch]= useStateValue();
    const stripe = useStripe();
    const history = useHistory();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");


    const [error, setError]= useState(null);
    const [disabled, setDisabled]= useState(true);
    const [clientSecret, setclientSecret]= useState(true);

    // useEffect(()=> {


    //     const getclientSecret = async ()=> {
    //         const response = await axios({
    //             method: 'post',
    //             url : `/payment/create?total=${getBasketTotal(basket) * 100}`
    //         });
    //         setclientSecret(response.data.clientSecret)
    //     }

    //     getclientSecret();
    // },[basket])
    

// function handleSubmit(event){
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//             card: elements.getElement(CardElement)
//         }
//     }).then(({paymentIntent})=>{
//         setSucceeded(true);
//         setError(null)
//         setProcessing(false)


//         history.replaceState('/orders')


//       })

// }
// function handleChange(event){
//     setDisabled(event.empty);
//     setError(event.error? event.error.message: "")
// }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (<Link to ="/checkout"> {basket?.length} items </Link>)
                </h1>
               
               
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{ user?.email}</p>
                        <p>123 React lane</p>
                        <p>Los Angeles CA</p>

                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                             <CheckOutProduct
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                             />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                       <form >
                           <CardElement />
                           <div className="payment__priceConainer">
                           <CurrencyFormat 
                                 renderText={(value) => (
                                             
                                             <h3>Order Total :{value}</h3>
                                               
                                            
                                             )} 

                                              decimalScale={2}
                                              value={getBasketTotal(basket)}
                                              displayType={"text"}
                                              thousandSeparator= {true}
                                              prefix={"$"}
                    />
                    <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                           </div>
                       </form>
                            {error && <div>{error}</div>}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
