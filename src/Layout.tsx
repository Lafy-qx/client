import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from 'react'
import './lauyout.scss'

const names: any = {
  "/": "Главная",
  "/complex/66ab85352ab4e9ed31dc2c7a": "ЖК «Планета 9»",
  "/complex/66ab85352ab4e9ed31dc2c7a/apartments/66acfba46bd4104c8a2b6be3": "ЖК «Планета 9»",
  "/complex/66ab8a018a0144775c66a2b6": "ЖК «Нова»",
  "/complex/66ab8a018a0144775c66a2b6/apartments/66acfbd66bd4104c8a2b6beb": "ЖК «Нова»",
  "/complex/66ab8a358a0144775c66a2ba": "ЖК «Аура»",
  "/complex/66ab8a358a0144775c66a2ba/apartments/66acfc196bd4104c8a2b6bed": "ЖК «Аура»",
};

function Layout() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname in names) {
      document.title = names[location.pathname];
    }
  }, [location.pathname]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [location.pathname])

  const ref = useRef<null | HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={ref}></div>
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
      <Outlet />
      <div className="scroll-to-top"  onClick={handleClick}>
        🠕
      </div>

    </>
  )
}

export default Layout



