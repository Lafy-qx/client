import '../../../styles/mainBanner.scss'

import Header from "../../../lib/header/Header";
function header({handleClick, handleClickTwo} : {handleClick: any, handleClickTwo: any}) {
    return (
        <div className="wrapper">
            <Header  handleClickHeader={handleClick} handleClickTwoHeader={handleClickTwo}/>
            <div className="title">
                <div className='title__header'>
                    <div className='title__header__titleBlock'>
                        <p className='title__header__titleBlock-cc'>строительная компания</p>
                        <div className='title__header__titleBlock__title'>
                            <p>Строй Дом</p>
                            <div className='title__header__titleBlock__title-line'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header
