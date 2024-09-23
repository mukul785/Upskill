import React,{useState} from "react";

const PaymentPage = () => {
    const [selectedMethod, setSelectedMethod] = useState('Credit Card');

    const handleRadioChange = (event) => {
        setSelectedMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="payment">
            <h2>Payment</h2>
            <form onSubmit={handleSubmit}>
                <div className="pay-method">
                    <label>
                        <input
                            type="radio"
                            value="Cash on Delivery"
                            checked={selectedMethod === 'Cash on Delivery'}
                            onChange={handleRadioChange}
                        />
                        Cash on Delivery
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Credit Card"
                            checked={selectedMethod === 'Credit Card'}
                            onChange={handleRadioChange}
                        />
                        Credit Card
                    </label>
                </div>
            </form>
            {(selectedMethod==='Credit Card') && (
                <form className="payment-form">
                    <div className="input-structure">
                        <input type="text" placeholder="Card Number" required />
                        <input type="text" placeholder="Expiration Date" required />
                        <input type="text" placeholder="CVV" required />
                    </div>
                </form>
            )}
            <div className="pay-btn">
                <button type="submit">Pay Now</button>                </div>
            </div>
    );
};

export default PaymentPage;
