import React from 'react'
import type { Product } from '../types/Product'

interface Props {
    sendItem: Product
}
export const ProductItem = ({ sendItem }: Props) => {
    return (
        <div>
            <div className="img-box">
                <img src={sendItem.image} alt="" />
            </div>
            <div className="text-box">
                <span>인기순 {sendItem.rating}</span>
                <h3>{sendItem.title}</h3>
                <p>{sendItem.price}</p>
            </div>
        </div>
    )
}
