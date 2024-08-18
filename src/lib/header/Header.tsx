import React, { useEffect, useState } from 'react'
import '../../styles/header.scss'
import { Link, useLocation } from 'react-router-dom'

function Header({ handleClickHeader, handleClickTwoHeader }: { handleClickHeader: any, handleClickTwoHeader: any }) {

    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [location.pathname])

    const [isBurger, setIsBurger] = useState(false);

    useEffect(() => {
        console.log(isBurger)
    }, [isBurger])

    return (
        <header>
            <div className="logo">logo</div>
            <div className="list">
                <Link to="/" onClick={() => {
                    if (location.pathname != "/") {
                        { setIsLoading(false) }
                    }
                }}>
                    <a className='list__item'>Главная</a>
                </Link>
                <a className='list__item' onClick={handleClickHeader}>Жилые комплексы</a>
                <a className='list__item' onClick={handleClickTwoHeader}>О нас</a>
                <a className='list__item'>Политика компании</a>
                <a className={isBurger === false ? "list__burger" : "noneBurger"} onClick={() => {
                    setIsBurger(!isBurger)
                }}>
                    <span></span><span></span><span></span>
                </a>
            </div>
            {isLoading === true &&
                <div className="loading">
                    <div className="loading__container">
                        <div className="📦"></div>
                        <div className="📦"></div>
                        <div className="📦"></div>
                        <div className="📦"></div>
                        <div className="📦"></div>
                    </div>
                </div>
            }
            <div className={`burgerMenuActive ${isBurger && "active"}`}>
                <div className='burgerMenuActive__header'>
                    <a className='burgerMenuActive__header__close' onClick={() => {
                        setIsBurger(!isBurger)
                    }}>
                        ✖
                    </a>
                </div>
                <div className="burgerMenuActive__listBuger">
                    <Link to="/" onClick={() => {
                        if (location.pathname != "/") {
                            { setIsLoading(false) }
                        }
                    }}>
                        <a className='burgerMenuActive__listBuger__item'>Главная</a>
                    </Link>
                    <a className='burgerMenuActive__listBuger__item' onClick={handleClickHeader}>Жилые комплексы</a>
                    <a className='burgerMenuActive__listBuger__item' onClick={handleClickTwoHeader}>О нас</a>
                    <a className='burgerMenuActive__listBuger__item'>Политика компании</a>
                </div>
            </div>
        </header>
    )
}

export default Header