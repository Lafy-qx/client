import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from "../../store/hooks/stateHooks";
import { getAllComplex } from "../../store/complex/ComplexActions";
import { Link, useLocation } from 'react-router-dom';

// Стили
import '../../styles/home.scss'
// Компоненты
import MainBanner from "../HomePage/HomeComponents/MainBanner";
import Card from './HomeComponents/Card';
import Footer from '../../lib/footer/Footer';
import CompanyInfo from './HomeComponents/CompanyInfo';




function Home() {
    // Скроллинг к элементу
    const ref = useRef<null | HTMLDivElement>(null);
    const refTwo = useRef<null | HTMLDivElement>(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickTwo = () => {
        refTwo.current?.scrollIntoView({ behavior: 'smooth' });
    };
    // Таймер для загрузки страницы
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [location.pathname])


    const dispatch = useAppDispatch();

    const { complexes } = useAppSelector((state) => state.complex);
    useEffect(() => {
        dispatch(getAllComplex());

    }, []);
    return (
        <>


            <MainBanner handleClick={handleClick} handleClickTwo={handleClickTwo} />
            <div className='headingLeft'>
                <div className='headingLeft__container'>
                    <h1 ref={refTwo}>О нас</h1>
                    <div>
                    </div>
                </div>
            </div>
            <CompanyInfo />
            <div className='headingRight'>
                <div className='headingRight__container'>
                    <h1 ref={ref}>Жилые комплексы</h1>
                    <div>
                    </div>
                </div>
            </div>
            {complexes.map((item: any) => {
                return (
                    <div className='cardContainer' key={item._id}  >
                        <Link to={`complex/${item._id}`} onClick={() => window.scrollTo(0, 0)} >
                            <Card title={item.title} content={item.content} img={item.img} />
                        </Link>
                    </div>
                )
            })}
            <div className='headingLeft'>
                <div className='headingLeft__container'>
                    <h1>Контакты</h1>
                    <div>
                    </div>
                </div>
            </div>
            {/* <div ref={ref} style={{ backgroundColor: 'lime' }}>
                bobbyhadz.com
            </div> */}
            <Footer />
        </>
    )
}

export default Home

