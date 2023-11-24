import "./card.css";
import { Products } from "../../../interfaces/Products.interface";

const Card = ({ product }: { product: Products }) => {
    return (
        <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={product.img} alt={product.name} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-5">{product.name}</p>
                            </div>
                        </div>

                        <div className="content">
                            <p>{product.desc}</p>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Card;
