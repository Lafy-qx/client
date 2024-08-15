import HeaderComplex from "../../../lib/header/HeaderComplex";
import '../../../styles/currentBanner.scss'

type Props = {
    title: String,
    img: String,
    handleClick: any,
    handleClickInfo: any
}


function CurrentBanner({ title, img, handleClick, handleClickInfo  }: Props) {
    return (
        <div className="wrapperCurrentBanner" style={{
            backgroundImage: `url("${img}")`
        }}>
            <HeaderComplex  handleClickHeader={handleClick} handleClickInfoHeader={handleClickInfo}/>
            <div className="wrapperCurrentBanner__title">
                <div className="wrapperCurrentBanner__title__header">
                    <div><p>ЖИЛОЙ КОМПЛЕКС</p></div>

                </div>
                <div className="wrapperCurrentBanner__title__footer">
                    <p>{title}</p>
                </div>


            </div>
            <div className="wrapperCurrentBanner__triangle">

            </div>
        </div>
    )
}

export default CurrentBanner