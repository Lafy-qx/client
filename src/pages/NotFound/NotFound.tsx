import { Link } from 'react-router-dom';
import '../../styles/notFound.scss';

import errorPng from '../../assets/pngError.png'

function NotFoud() {

  return (
    <div className="error">
      <div className='error__message'>
        <div className='error__message__left'>
          <img src={errorPng} alt="" />
        </div>
        <div className='error__message__right'>
          <p>Oшибка</p>
          <h1>404</h1>
          <p>К сожалению, запрашиваемая вами страница не найдена...</p>
        </div>
      </div>
      <div className='error__triangle'>
        <div>
          <p>←</p>
          <p onClick={() => window.location.reload()}>
            <Link to="/" >
              <a>Главная</a>
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default NotFoud;
