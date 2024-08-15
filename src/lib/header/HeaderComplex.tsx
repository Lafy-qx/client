import React from 'react'
import '../../styles/header.scss'
import { Link } from 'react-router-dom'

function Header({handleClickHeader, handleClickInfoHeader} : {handleClickHeader: any, handleClickInfoHeader: any}) {
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
            </div>
        </header>
    )
}

export default Header