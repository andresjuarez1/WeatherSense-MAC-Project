import React from 'react';
import Hamburger2 from './components/hamburger-menu2';
import HomeIcon2 from './components/icon-home-white';
import './styles/history.css';

const History = () => {
  return (
    <div className='history'>
      <div className="container-history">
        <HomeIcon2/>
        <Hamburger2 />
        <h1 className="history-title">REGISTRO</h1>
        <div className="container-content">
          <div className="content-history">
            <div className="ch1 card-history-main">
              <div className="header-card-main">
                <h1 className="title-history">27 de Junio del 2023</h1>
                <h2 className="subtitle-history">Suchiapa</h2>
              </div>
              <div className="content-card-main">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-card-main' />
                <h1 className="temperature-card-main">40°</h1>
              </div>
              <div className="temperatura-footer">
                <h2 className="temperatura-main-footer">Máximo: 40°</h2>
                <h2 className="temperatura2-main-footer">Mínima: 25°</h2>
              </div>
            </div>

            <div className="ch1 card-history1">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="ch1 card-history2">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="ch1 card-history3">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="ch1 card-history4">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="ch1 card-history5">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="ch1 card-history6">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default History;