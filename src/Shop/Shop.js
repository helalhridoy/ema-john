import React, { useContext, useState } from 'react'
import Item from '../components/Item';
import Summery from '../components/Summery';
import Products from '../fakeData/products'
import { useEffect } from 'react';
import { ProductContext } from '../App';

function Shop() {

    const [cartList, setCartList, products, setProducts, priceSummery, setpriceSummery] = useContext(ProductContext)

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

    return <div>

        <div id='body'>
            <div id='products'>
                {
                    Products.map(product =>
                        <Item product={product} products={products} setProducts={setProducts} keys={product.key} name={product.name} url={product.img} seller={product.seller} price={product.price} stock={product.stock} features={product.features} starCount={product.starCount} star={product.star}></Item>)
                }
            </div>
            <hr />
            <Summery cartList={cartList} priceSummery={priceSummery} products={products}></Summery>
        </div>
    </div>
}
export default Shop