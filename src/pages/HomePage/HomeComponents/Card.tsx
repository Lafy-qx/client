import React from 'react'
import '../../../styles/card.scss'

type Props = {
    title: String,
    content: String,
    img: String,
}

function Card({ title, content, img }: Props) {
    return (
        <div className='cardWrapper'>
            <div className='cardWrapper__img' style={{
                backgroundImage: `url("${img}")`
            }}>
                <div className='cardWrapper__img__topFigureBlock'>
                    <div className='cardWrapper__img__topFigureBlock__triangle'></div>
                </div>
                <div className='cardWrapper__img__leftFigure'>
                </div>
            </div>
            <div className='cardWrapper__content'>
                <div className='cardWrapper__content__title titleCard'>
                    <p>{title}</p>
                    <div className='cardWrapper__content__title__line'></div>
                </div>
                <div className='cardWrapper__content__description'>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Card