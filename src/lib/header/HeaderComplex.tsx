import React, { useState } from 'react'
import '../../styles/header.scss'
import { Link } from 'react-router-dom'

function Header({ handleClickHeader, handleClickInfoHeader }: { handleClickHeader: any, handleClickInfoHeader: any }) {
    const [isBurger, setIsBurger] = useState(false);
    return (


        <header>
            <div className="logo">logo</div>
            <div className="list">
                <Link to="/">
                    <a className='list__item'>Главная</a>
                </Link>


                <a className='list__item' onClick={handleClickHeader}>Планировки</a>
                <a className='list__item' onClick={handleClickInfoHeader}>О нас</a>

                <a className='list__item'>Политика компании</a>
                <a className={isBurger === false ? "list__burger" : "noneBurger"} onClick={() => {
                    setIsBurger(!isBurger)
                }}>
                    <span></span><span></span><span></span>
                </a>
            </div>

            <div className={isBurger === true ? "burgerMenuActive" : "burgerMenu"}>
                <div className='burgerMenuActive__header'>
                    <a className='burgerMenuActive__header__close' onClick={() => {
                        setIsBurger(!isBurger)
                    }}>
                        ✖
                    </a>
                </div>
                <div className="burgerMenuActive__listBuger">
                    <Link to="/">
                        <a className='list__item'>Главная</a>
                    </Link>
                    <a className='burgerMenuActive__listBuger__item' onClick={handleClickHeader}>Планировки</a>
                    <a className='burgerMenuActive__listBuger__item' onClick={handleClickInfoHeader}>О нас</a>
                    <a className='burgerMenuActive__listBuger__item'>Политика компании</a>
                </div>
            </div>
        </header>
    )
}

export default Header