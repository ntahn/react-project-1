import React from 'react';
import logo1 from '../../img/logo1.png';
import logo2 from '../../img/logo2.png';
import logo3 from '../../img/logo3.png';
import logo4 from '../../img/logo4.png';
import logo5 from '../../img/logo5.png';
import logo6 from '../../img/logo6.png';
import logo7 from '../../img/logo7.jpg';
import logo8 from '../../img/logo8.png';
import logo9 from '../../img/logo9.png';
import logo10 from '../../img/logo10.jpg';
import logo11 from '../../img/logo11.png';
import logo12 from '../../img/logo12.png';
import logo13 from '../../img/logo13.png';
import logo14 from '../../img/logo14.jpg';
import logo15 from '../../img/logo15.png';
import logo16 from '../../img/logo16.png';
import logo17 from '../../img/logo17.png';
import logo18 from '../../img/logo18.png';
import logo19 from '../../img/logo19.png';
import logo20 from '../../img/logo20.png';
import androidLogo from '../../img/android-logo.png';
import appleLogo from '../../img/apple-logo.png';
import BoCongThuong from '../../img/BoCongThuong.png';
import facebookLogo from '../../img/facebook-logo.png';
import zaloLogo from '../../img/zalo-logo.png';
import zionLogo from '../../img/zion-logo.jpg';

function FooterHomePage() {
    return (
        <footer className="pt-5 text-light">
            <div className="container">
                <div className="row footer__top">
                    <div className="col-12 col-md-6 col-lg-4 footer__tix">
                        <h3>TIX</h3>
                        <div className="row footer__tixContent">
                            <div className="col-6 footer__tixItem footer__tixItem1">
                                <a className="footer__faq" href="#">FAQ</a>
                                <a className="footer__deal" href="#">Thỏa thuận sử dụng</a>
                            </div>
                            <div className="col-6 footer__tixItem footer__tixItem2">
                                <a className="footer__brandGuide" href="#">Brand Guidelines</a>
                                <a className="footer__security" href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 footer__partners">
                        <h3>ĐỐI TÁC</h3>
                        <div className="footer__partnersContent">
                            <div className="row">
                                <a href="#">
                                    <img src={logo1} alt="logo1" />
                                </a>
                                <a href="#">
                                    <img src={logo2} alt="logo2" />
                                </a>
                                <a href="#">
                                    <img src={logo3} alt="logo3" />
                                </a>
                                <a href="#">
                                    <img src={logo4} alt="logo4" />
                                </a>
                                <a href="#">
                                    <img src={logo5} alt="logo5" />
                                </a>
                            </div>
                            <div className="row">
                                <a href="#">
                                    <img src={logo6} alt="logo6" />
                                </a>
                                <a href="#">
                                    <img src={logo7} alt="logo7" />
                                </a>
                                <a href="#">
                                    <img src={logo8} alt="logo8" />
                                </a>
                                <a href="#">
                                    <img src={logo9} alt="logo9" />
                                </a>
                                <a href="#">
                                    <img src={logo10} alt="logo10" />
                                </a>
                            </div>
                            <div className="row">
                                <a href="#">
                                    <img src={logo11} alt="logo11" />
                                </a>
                                <a href="#">
                                    <img src={logo12} alt="logo12" />
                                </a>
                                <a href="#">
                                    <img src={logo13} alt="logo13" />
                                </a>
                                <a href="#">
                                    <img src={logo14} alt="logo14" />
                                </a>
                                <a href="#">
                                    <img src={logo15} alt="logo15" />
                                </a>
                            </div>
                            <div className="row">
                                <a href="#">
                                    <img src={logo16} alt="logo16" />
                                </a>
                                <a href="#">
                                    <img src={logo17} alt="logo17" />
                                </a>
                                <a href="#">
                                    <img src={logo18} alt="logo18" />
                                </a>
                                <a href="#">
                                    <img src={logo19} alt="logo19" />
                                </a>
                                <a href="#">
                                    <img src={logo20} alt="logo20" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-2 footer__mobileApp">
                        <h3>MOBILE APP</h3>
                        <div className="footer__mobileApp--Item">
                            <a href="#"><img src={appleLogo} alt="apple-logo" /></a>
                            <a href="#"><img src={androidLogo} alt="android-logo" /></a>
                        </div>
                    </div>
                    <div className="col-12 col-md-2 col-lg-2 footer__social">
                        <h3 className="pl-3">SOCIAL</h3>
                        <div className="footer__social--Item">
                            <a href="#"><img src={facebookLogo} alt="facebook-logo" /></a>
                            <a href="#"><img src={zaloLogo} alt="zalo-logo" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer__bot">
                    <div className="row">
                        <div className="col-12 col-md-1 pr-0 footer__zion">
                            <img className="img-fluid" src={zionLogo} alt="zion-logo" />
                        </div>
                        <div className="col-12 col-md-9 footer__botAddress">
                            <h3>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h3>
                            <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                            <p>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh
            cấp.</p>
                            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                            <p>Email: <a className="footer__email" href="#">support@tix.vn</a></p>
                        </div>
                        <div className="col-12 col-md-2 footer__boCongThuong">
                            <a href="#"><img className="img-fluid" src={BoCongThuong} alt="boCongThuong" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterHomePage;