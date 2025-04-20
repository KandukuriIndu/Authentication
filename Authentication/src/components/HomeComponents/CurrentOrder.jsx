import React, { useState } from 'react'

const CurrentOrder = () => {
    ///border style
    const [color, setColor] = useState('');

    const handleClick = (buttonName) => {
        setColor(buttonName);
    };
    const getBorderStyle = (buttonName) => {
        return color === buttonName ? '2px solid #1B84FF' : '';
    };
    
    //counter function
    const [count, setCount] = useState(1);
    function increment() {
        setCount(function (prevCount) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    }
    return (
        <div className="row current-order-parent">
            <div className='current-order p-0'>
                <h2>Current Order</h2>
                <button>Clear All</button>
            </div>
            <div className='item-quantity-list'>
                <div className='imgae'>
                    <img src="/Images/prod1.jpg" alt="" />
                </div>
                <h5>T-Bone Stake</h5>
                <div className='increment'>
                    <h2 onClick={decrement}>-</h2>
                    <h4>{count}</h4>
                    <h2 onClick={increment}>+</h2>
                </div>
                <h1>$11.40</h1>
            </div>
            <div className='item-quantity-list'>
                <div className='imgae'>
                    <img src="/Images/prod2.jpg" alt="" />
                </div>
                <h5>T-Bone Stake</h5>
                <div className='increment'>
                    <h2 onClick={decrement}>-</h2>
                    <h4>{count}</h4>
                    <h2 onClick={increment}>+</h2>
                </div>
                <h1>$7.40</h1>
            </div>
            <div className='item-quantity-list'>
                <div className='imgae'>
                    <img src="/Images/prod3.jpg" alt="" />
                </div>
                <h5>T-Bone Stake</h5>
                <div className='increment'>
                    <h2 onClick={decrement}>-</h2>
                    <h4>{count}</h4>
                    <h2 onClick={increment}>+</h2>
                </div>
                <h1>$11.40</h1>
            </div>
            <div className='biling-details'>
                <div className='subtotal'>
                    <p>Subtotal</p>
                    <p>$100.50</p>
                </div>
                <div className='subtotal'>
                    <p>Discounts</p>
                    <p>-$8.00</p>
                </div>
                <div className='subtotal'>
                    <p>Tax(12%)</p>
                    <p>$11.20</p>
                </div>
                <div className='subtotal'>
                    <h3>Total</h3>
                    <h3>$93.46</h3>
                </div>
            </div>
            <div className="paymemt-method">
                <h3>Payment Method</h3>
                <div className='payment' >
                    <div className='method' onClick={() => handleClick("button1")} style={{ border: getBorderStyle('button1') }}>
                        <i class="fa-solid fa-dollar-sign"></i>
                        <p>Cash</p>
                    </div>
                    <div className='method' onClick={() => handleClick("button2")} style={{ border: getBorderStyle('button2') }}>
                        <i class="fa-regular fa-credit-card"></i>
                        <p>Card</p>
                    </div>
                    <div className='method' onClick={() => handleClick("button3")} style={{ border: getBorderStyle('button3') }}>
                        <i class="fa-brands fa-google-wallet"></i>
                        <p>E-Wallet</p>
                    </div>
                </div>
            </div>
            <div className='print-button'>
                <button>Print Bills</button>
            </div>
        </div>
    )
}

export default CurrentOrder