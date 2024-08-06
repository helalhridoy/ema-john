import React from 'react'
import Item from '../components/Item';
import Summery from '../components/Summery';
import Products from '../fakeData/products'
import { useEffect } from 'react';

function Shop({ products, setProducts, setpriceSummery, priceSummery }) {


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
            <Summery priceSummery={priceSummery} products={products}></Summery>
        </div>
    </div>
}
export default Shop