import React from 'react';
import EmLaCuaEm from '../../img/em-la-cua-em.jpg'
import luaDeuGapLuaDao from '../../img/lua-deu-gap-lua-dao.jpg';
import samHoi from '../../img/sam-hoi.jpg';
import thoSonQuaiVat from '../../img/tho-san-quai-vat.jpg';
import chi13 from '../../img/chi-13.png'
import nextSession from '../../img/next-session.png';
import playButton from '../../img/play-video.png';


function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block" src={EmLaCuaEm} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block" src={luaDeuGapLuaDao} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block" src={samHoi} alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block" src={thoSonQuaiVat} alt="Fourth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block" src={chi13} alt="Fifth slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <img src={nextSession} className="prev-session" alt="prev-session"/>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <img src={nextSession} className="next-session" alt="next-session"/>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;
