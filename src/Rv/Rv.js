import React, { useEffect, useState } from 'react';
import ItemReview from '../components/ItemReview'
import Summery
    from '../components/Summery'

function Rv({ products, setProducts, setpriceSummery, priceSummery }) {

    const [cartList, setCartList] = useState([]);
    useEffect(() => {
        console.log(products)
        const price = products.reduce((accumulator, product) => accumulator + product.price, 0).toFixed(2)
        const shipping = products.reduce((accumulator, product) => accumulator + product.shipping, 0).toFixed(2)
        const total = (parseFloat(price) + parseFloat(shipping)).toFixed(2)
        const tax = (parseFloat(total) * 15 / 100).toFixed(2)
        const grandTotal = (parseFloat(total) + parseFloat(tax)).toFixed(2)
        setpriceSummery({
            price: price,
            shipping: shipping,
            total: total,
            tax: tax,
            grandTotal: grandTotal
        })
    }, [products, setpriceSummery]);

    useEffect(() => {
        console.log(cartList)
        products.forEach((item) => {

            if (cartList.reduce((acc, product) => product.key === item.key ? ++acc : acc, 0) === 0) {
                const product = products.find((product) => product.key === item.key)
                setCartList([...cartList, product])
            }
            console.log(cartList.reduce((acc, product) => product.key === item.key ? ++acc : acc, 0))
        })
        products.forEach((item) => {

            if (cartList.reduce((acc, product) => product.key === item.key ? ++acc : acc, 0) === 1) {
                // Skip the current iteration

            }
            else {

            }
        });
        console.log(products)

    }, [products, cartList]);

    return (
        <div id='body'>
            <div id='products'>
                {
                    cartList.map((product) => <ItemReview cartList={cartList} setCartList={setCartList} product={product} products={products} setProducts={setProducts} keys={product.key} name={product.name} url={product.img} seller={product.seller} price={product.price} stock={product.stock} features={product.features} starCount={product.starCount} star={product.star}></ItemReview>)

                }
            </div>
            <hr />
            <Summery priceSummery={priceSummery} products={products}></Summery>
        </div>
    );

}

export default Rv
