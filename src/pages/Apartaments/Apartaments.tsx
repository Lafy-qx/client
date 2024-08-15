import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/stateHooks";
import { getParamsApartamentsFunc } from "../../store/apartament/ApartamentActions";


import '../../styles/apartaments.scss'
import ModalForm from "./ApartamentsComponents/ModalForm";
import Footer from '../../lib/footer/Footer'
import CompanyInfo from "../HomePage/HomeComponents/CompanyInfo";



function Apartaments() {

  const ref = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const dispatch = useAppDispatch();
  const { apartaments } = useAppSelector((state) => state.apartament);
  const { complexID, houseID } = useParams();

  const navigate = useNavigate();


  // Сохранение данных из формы

  const [entrance, setEntrance] = useState(1)



  useEffect(() => {
    dispatch(getParamsApartamentsFunc({ complexID: complexID!, houseID: houseID! }));
  }, [dispatch]);



  return (
    <>
      <div className="apartamentsWrapper">
        <div className="header">
          <div className="header__item" onClick={() => navigate(-1)}>Вернуться к комплексу</div>
          <Link to="/">
            <div className="header__item">Главная</div>
          </Link>
          <a className='header__item' onClick={handleClick}>О нас</a>

          <div className="header__triangle"></div>
        </div>
        {apartaments.map((item: any) => {
          return (
            <>
              {item.mainInfo.nameComplex !== undefined && <div className="content" key={item._id}>
                {item.mainInfo.entrance === 1 && <>
                  <div className="content__header">
                    <p className="content__header__title">{item.mainInfo.nameComplex}</p>
                    <div className="content__header__line"></div>
                  </div>
                  <div className="content__content">
                    <div className="content__content__info">
                      <div>Количество квартир: <br />{item.mainInfo.count}</div>
                      <div>Количество этажей:<br /> {item.mainInfo.floors}</div>
                    </div>
                  </div>
                </>}
              </div >}
            </>
          )
        })}
        <div className="floorsList">
          <div className="floorsList__left"></div>
          {houseID === "66acfba46bd4104c8a2b6be3" ? <div className="floorsList__list">
            <div className={entrance === 1 ? "floorsList__list__item active" : "floorsList__list__item"} onClick={() => setEntrance(1)}>1й подъезд</div>
            <div className={entrance === 2 ? "floorsList__list__item active" : "floorsList__list__item"} onClick={() => setEntrance(2)}>2й подъезд</div>
            <div className={entrance === 3 ? "floorsList__list__item active" : "floorsList__list__item"} onClick={() => setEntrance(3)}>3й подъезд</div>
            {/* Выводить массив этажей */}
          </div> : <div className="floorsList__list">
            <div className={entrance === 1 ? "floorsList__list__item active" : "floorsList__list__item"} onClick={() => setEntrance(1)}>1й подъезд</div>
            {/* Выводить массив этажей */}
          </div>}
          <div className="floorsList__right"></div>
        </div>

        <div className="contentWrapper">
          <div>
            {apartaments.map((item: any) => {
              return (
                <>
                  {item.mainInfo.mainLayout !== undefined && <div key={item._id}>
                    {item.mainInfo.entrance === entrance &&
                      <div className="contentWrapper__imgWrapper">
                        <img src={item.mainInfo.mainLayout} />
                      </div>}
                  </div>}
                </>
              )
            })}
          </div>
        </div>

        <div className='headingLeft'>
          <div className='headingLeft__container'>
            <h1>Планировки</h1>
            <div>
            </div>
          </div>

        </div>
        <div className="apartamentCard">
          {
            apartaments.map((item: any) => {
              return (
                <>
                  {item.mainInfo.entrance === entrance &&
                    <div className="apartamentCard__card" key={item._id}>
                      <div className="apartamentCard__card__header">
                        <p>{item.rooms}-комнатная квартира</p>
                      </div>
                      <div className="apartamentCard__card__content">
                        <div className="apartamentCard__card__content__left"
                          style={{
                            backgroundImage: `url("${item.layoutImg}")`
                          }}>
                        </div>
                        <div className="apartamentCard__card__content__right">
                          <div className="apartamentCard__card__content__right__header">
                            <table>
                              <thead>
                                <td>Площадь</td>
                                <td>ㅤㅤ</td>
                                <td>Подъезд</td>
                              </thead>
                              <tr>
                                <td>{item.square} м²</td>
                                <td>ㅤㅤ</td>
                                <td>{item.mainInfo.entrance}</td>
                              </tr>
                            </table>
                          </div>
                          <div className="apartamentCard__card__content__right__content">
                            <div className="apartamentCard__card__content__right__content__header">
                              <p>Преимущества квартиры</p>
                            </div>
                            <div className="apartamentCard__card__content__right__content__content">
                              {item.advantages.map((item: any) => {
                                return (
                                  <p>{item}</p>
                                )
                              })}
                            </div>
                          </div>
                          <div className="apartamentCard__card__content__right__footer">
                            <div className="apartamentCard__card__content__right__footer__button">Ипотека от 6%</div>
                            <div className="apartamentCard__card__content__right__footer__line"></div>
                            <p>{item.price} Р</p>
                          </div>
                        </div>
                      </div>
                    </div>}
                </>
              )
            })
          }
        </div>
        {/* Баннер с модалкой */}
        <div id="info"></div>
        <div className="modalWrapper">
          <div className="modalWrapper__header">
            <h1>Есть вопросы? Мы на них ответим!</h1>
          </div>
          <div className="modalWrapper__button">
            <ModalForm />
          </div>
        </div>
        <div className='headingRight'>
          <div className='headingRight__container'>
            <h1 ref={ref}>О нас</h1>
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
    </>
  );
}

export default Apartaments;