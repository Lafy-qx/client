import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/stateHooks";
import { getParamsHouseFunc } from "../../store/house/HouseActions";
import { Link } from 'react-router-dom';
import CurrentBanner from "./CurrentComplexComponents/CurrentBanner";
import { getAllComplex } from "../../store/complex/ComplexActions";
// import { getParamsComplexFunc } from "../../store/complex/ComplexActions";
import '../../styles/currentComplex.scss'
import mobile from '../../assets/mobile.jpg'


import CurrentSwiper from '../CurrentComplex/CurrentComplexComponents/CurrentSwiper'
import Footer from '../../lib/footer/Footer';
import CompanyInfo from "../HomePage/HomeComponents/CompanyInfo";



function CurrentComplex() {
  const ref = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const refTwo = useRef<null | HTMLDivElement>(null);
  const handleClickInfo = () => {
    refTwo.current?.scrollIntoView({ behavior: 'smooth' });
  };


  // id конкретного комплекса для выведения домов
  const { complexID } = useParams();
  const dispatch = useAppDispatch();

  const { allHouse } = useAppSelector((state) => state.house);


  const { complexes } = useAppSelector((state) => state.complex);
  useEffect(() => {
    // dispatch(getParamsComplexFunc(complexID!));
    dispatch(getAllComplex());

    dispatch(getParamsHouseFunc(complexID!));
    document.title = complexID!;

  }, [complexID]);



  return (
    <div >
      {/* Выведение баннера */}
      {complexes?.map((item: any) => {
        return (
          <div key={item._id}>
            < >{item._id === complexID && <CurrentBanner title={item.title} img={item.img} handleClick={handleClick} handleClickInfo={handleClickInfo} />}</>
          </div>
        )
      })}
      {/* Двор */}
      <div className='headingRight'>
        <div className='headingRight__container'>

          <h1>Приватный двор</h1>
          <div>
          </div>
        </div>
      </div>
      <div className="currentSwiper" >
        {complexes?.map((item: any) => {
          return (
            <div key={item._id}>
              <>

                {item._id === complexID && <CurrentSwiper complexSwiper={item.complexSwiper} />}
                {/* Тут выводится контент */}
                {item._id === complexID && <div className="currentSwiper__footer space"><p>{item.private}</p></div>}

              </>
            </div>
          )
        })}

      </div>
      {/* Удобное расположение */}
      <div className='headingLeft'>
        <div className='headingLeft__container'>
          <h1>Удобное расположение</h1>
          <div>
          </div>
        </div>
      </div>

      <div className="location">
        {complexes?.map((item: any) => {
          return (
            <>
              {item._id === complexID && <div>
                <div className="location__header space">
                  <p>{item.location}</p>
                </div>
                <div className="location__content" style={{
                  // Картинка из базы
                  backgroundImage: `url(${item.locationImg})`
                }}></div>
                <div className="location__triangle"></div>
              </div>}
            </>
          )
        })}
      </div>
      {/* Разнообразие планировок */}
      <div className='headingRight'>
        <div className='headingRight__container'>
          <h1>Разнообразие планировок</h1>
          <div>
          </div>
        </div>
      </div>

      <div className="layout">
        {complexes?.map((item: any) => {
          return (
            <>
              {item._id === complexID && <div className="layout__header space">
                <p>{item.layout}</p>
              </div>}
              <div className="layout__triangle"></div>
            </>
          )
        })}
      </div>

      {/* Разделительный блок */}
      <div className="white"></div>
      {/* Блок изображения в планировке */}
      <div className="layoutImg">
        {complexes?.map((item: any) => {
          return (
            <>
              {item._id === complexID && <div className="layoutImg__content" style={{
                // Картинка из базы
                backgroundImage: `url(${item.layoutImg})`
              }}>
                <div className="layoutImg__triangle" ></div>
              </div>}
            </>
          )
        })}
      </div>
      {/* Кнопка для перехода к планировкам */}
      {
        allHouse!.map((item: any) => {
          return (
            <div key={item._id} className="house" ref={ref}>
              <Link to={`apartments/${item._id}`} onClick={() => window.scrollTo(0, 0)}>
                <div className="house__button">
                  <p >Подробнее о планировках</p>
                </div>
              </Link>
            </div>

          )
        })
      }

      <div className='headingLeft'>
        <div className='headingLeft__container'>
          <h1>Мобильное приложение</h1>
          <div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="mobile__header">
          <p>В мобильном приложении жителя для смартфонов и планшетов мы собрали весь функционал «Умного здания», необходимый для автоматизации и цифровизации управления домом. Это управление IP-домофонией, что позволит открывать двери подъезда, шлагбаумы и колясочные с мобильного телефона из любой точки мира. Это телеметрия и автоматическая передача показаний счётчиков в УК, их оплата, анализ и оптимизация расхода ресурсов. Это онлайн-доступ к системе видеонаблюдения за безопасностью на парковке, во дворе и холле. Это прямая связь с управляющей компанией и чат с соседями в онлайн-формате. На базе такого программного обеспечения вы можете построить собственную систему умного дома.</p>
        </div>
        <div className="mobile__content" style={{
          // Картинка из базы
          backgroundImage: `url(${mobile})`
        }}></div>
        <div className="mobile__triangleWhite"></div>
        <div className="mobile__triangleBlue"></div>
      </div>
      <div className='headingRight'>
        <div className='headingRight__container'>
          <h1 ref={refTwo}>О нас</h1>
          <div>
          </div>
        </div>
      </div>
      <CompanyInfo />
      <div className='headingLeft'>
        <div className='headingLeft__container'>
          <h1>Контакты</h1>
          <div>
          </div>
        </div>
      </div>
      <Footer />


    </div >
  );
}

export default CurrentComplex;