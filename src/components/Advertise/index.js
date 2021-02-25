import React, { Component } from 'react';
import mobile from '../../img/mobile.png'
import mobile1 from '../../img/mobile1.jpg'
import mobile2 from '../../img/mobile2.jpg'
import mobile3 from '../../img/mobile3.jpg'
import mobile4 from '../../img/mobile4.jpg'
import mobile5 from '../../img/mobile5.jpg'


export default class Advertise extends Component {
    render() {
        return (
            <section className="freeApp text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 freeApp__content">
                            <div className="freeApp__left">
                                <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                                <h3>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</h3>
                                <button>App miễn phí - Tải về ngay</button>
                                <p>TIX có hai phiên bản <a href="#">iOS</a> &amp; <a href="#">Android</a></p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 freeApp__content1 text-center">
                            <div className="freeApp__right carousel slide" id="carouselExampleCaptions" data-ride="carousel">
                                <img className="freeApp__phone" src={mobile} alt="mobile" />
                                <div className="owl-carousel owl-theme carousel-inner">
                                    <div className="item carousel-item active">
                                        <img src={mobile1} alt="mobile1" />
                                    </div>
                                    <div className="item carousel-item">
                                        <img src={mobile2} alt="mobile2" />
                                    </div>
                                    <div className="item carousel-item">
                                        <img src={mobile3} alt="mobile3" />
                                    </div>
                                    <div className="item carousel-item">
                                        <img src={mobile4} alt="mobile4" />
                                    </div>
                                    <div className="item carousel-item">
                                        <img src={mobile5} alt="mobile5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
