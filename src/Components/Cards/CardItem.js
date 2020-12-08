import React from 'react'
import './CardItem.css'
import { Link } from 'react-router-dom'

function CardItem({ path, src, text, label }) {
    return (
        <div className="card">
            <Link className="card__link" to={path}>
                <figure className="card__picWrap" data-category={label}>
                    <img className="card__image" src={src} alt='Card img' />
                </figure>
                <div className="card__info">
                    <h5 className="card__info__text">
                        {text}
                    </h5>
                </div>
            </Link>
        </div>
    )
}

export default CardItem
