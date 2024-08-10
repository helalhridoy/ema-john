import React, { useContext, useEffect } from 'react';
import ItemReview from '../components/ItemReview'
import Summery
    from '../components/Summery'
import { ProductContext } from '../App';

function Rv() {

    const [cartList, setCartList, products, setProducts, priceSummery, setpriceSummery] = useContext(ProductContext)

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
    return (
        <div id='body'>
            <div id='products'>
                {
                    cartList.map((product) => <ItemReview cartList={cartList} setCartList={setCartList} product={product} products={products} setProducts={setProducts} keys={product.key} name={product.name} url={product.img} seller={product.seller} price={product.price} stock={product.stock} features={product.features} starCount={product.starCount} star={product.star}></ItemReview>)

                }
            </div>
            <hr />
            <Summery cartList={cartList} priceSummery={priceSummery} products={products}></Summery>
        </div>
    );

}

export default Rv
