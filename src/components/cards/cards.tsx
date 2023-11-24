import { useEffect, useState } from "react";
import "./cards.css";
import { getProducts } from "../data/data";
import Card from "./card/card";
import { Products } from "../../interfaces/Products.interface";

const Cards = () => {

    let [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products))
    }, [])

    return (
        <>
            <div className="container hero-body">
                <div className="columns">
                    {
                        products.map((product: Products, idx) => {
                            return (<div key={idx}>
                                <Card product={product} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Cards;
