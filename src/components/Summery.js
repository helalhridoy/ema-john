import React from 'react'

function Summery({ cartList, products, priceSummery }) {

    return (
        <div id="orderSummery">
            <h3>Order Summery</h3>
            <br />
            <p>Items ordered:{cartList.length}</p>
            <p>Total Quantity: {products.length}</p>
            <span>Items Price: {priceSummery.price}</span>
            <span>Shipping & Handling:	{priceSummery.shipping}</span>
            <span>Total before tax:	{priceSummery.total}</span>
            <span>Estimated Tax:	{priceSummery.tax}</span>
            <strong>Order Total:	{priceSummery.grandTotal}</strong>
            <button className='yButton'>Review your order </button>
        </div>
    )
}

export default Summery