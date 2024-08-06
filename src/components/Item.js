import React from 'react'

function Item({ setProducts, products, product, ...props }) {
    function buttonClick() {
        const newList = [...products, product]
        setProducts(newList)
    }
    return (

        <div id='itemBody'>
            <div id='itemImage'><img src={props.url} alt="" /></div>
            <div id='itemDetails'>
                <h2>{props.name}</h2>
                <div id='detail_feature'>
                    <div id='detailsP'>
                        <p>by: {props.seller}</p>
                        <h2>${props.price}</h2>
                        <p>only {props.stock} left in stock - order soon </p>
                        <button onClick={buttonClick} className='yButton'><i className="fa-solid fa-cart-shopping"></i> add to card</button>
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

export default Item