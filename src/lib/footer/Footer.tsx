import React from 'react'
import '../../styles/footer.scss'

function Contact() {
    return (
        <>
         <div className='contactWrapper'>
            <div className='contactWrapper__leftInfo'>
                <div className='contactWrapper__leftInfo__textContainer'>
                    <p className='secondaryText'>Почта для связи</p>
                    <p className='mainText'>blabla@gmail.com</p>
                </div>
                <div className='contactWrapper__leftInfo__textContainer'>
                    <p className='secondaryText'>Телефон</p>
                    <p className='mainText'>+ 7 821 229-30-97</p>
                </div>
                <div className='contactWrapper__leftInfo__textContainer'>
                    <p className='secondaryText'>Центральный офис продаж</p>
                    <p className='mainText'>Краснодар, ул. Красных Партизан, д. 531, 1 эт.</p>
                </div>
            </div>
            <div className='contactWrapper__rightInfo'>
                <div className='contactWrapper__rightInfo__textContainer'>
                    <p className='secondaryText'>Часы работы</p>
                    <p className='mainText'>Ежедневно 9:00-21:00</p>
                </div>
                <div className='contactWrapper__rightInfo__textContainer'>
                    <p className='secondaryText'>Мы в соц. сетях</p>
                    <div>Иконки</div>
                </div>
                <div className='contactWrapper__rightInfo__textContainer'>
                    <p className='secondaryText'>Oфис продаж ЖК Парк Победы</p>
                    <p className='mainText'>Краснодар, ул. Героя Пешкова, д. 14</p>
                </div>
            </div>
        </div>
        <div className='footer'></div>
        </>
       
    )
}

export default Contact