import React from 'react'

function ItemReview({ setProducts, products, product, ...props }) {

    function removeItem() {
        const newList = props.cartList.filter((item) => item.key !== props.keys)
        const newList2 = products.filter((item) => item.key !== props.keys)

        console.log(newList)
        props.setCartList(newList)
        setProducts(newList2)
    }

    return (

        <div key={props.key} id='itemBody'>
            <div id='itemImage'><img src={props.url} alt="" /></div>
            <div id='itemDetails'>
                <h2>{props.name}</h2>
                <div id='detail_feature'>
                    <div id='detailsP'>
                        <p>by: {props.seller}</p>
                        <h2>${props.price}</h2>
                        <p>Order Quantity: {products.reduce((acc, product) => product.key === props.keys ? ++acc : acc, 0)}</p>
                        <button onClick={() => removeItem()} className='yButton'><i className="fa-solid fa-cart-shopping"></i> Remove</button>
                    </div>
                    <div id='feature'>
                        <p>
                            {
                                Array.from({ length: props.star }).map((_, index) => (
                                    <i key={index} className="fa-solid fa-star"></i>
                                ))


                            }
                            {
                                Array.from({ length: 5 - props.star }).map((_, index) => (
                                    <i key={index} className="fa-regular fa-star"></i>
                                ))}

                            ({props.starCount})</p>
                        <h3>Features</h3>
                        <ul>
                            {
                                props.features.map(feature => <li>{feature.description}: {feature.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemReview