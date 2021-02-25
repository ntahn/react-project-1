import React from 'react';
import logo from '../../img/web-logo.png';
import location from '../../img/location-header.png';
import avatar from '../../img/avatar.png';

function NavbarHome() {
    return (
        <div className="headerContent">
            <nav className="navbar navbar-expand-sm navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="tix-logo" />
                </a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Lịch Chiếu <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cụm Rạp</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tin Tức</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ứng Dụng</a>
                    </li>
                </ul>
                <div className="logIn">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="signIn">
                            <img src={avatar} alt="avatar" />
                            <button>Đăng Nhập</button>
                        </li>
                        <li className="location-list">
                            <img src={location} alt="location-img" />
                            <select className="location dropdown">
                                <option value="1">Hồ Chí Minh</option>
                                <option value="2">Hà Nội</option>
                                <option value="3">Đà Nẵng</option>
                                <option value="4">Hải Phòng</option>
                                <option value="5">Biên Hoà</option>
                                <option value="6">Nha Trang</option>
                                <option value="7">Bình Dương</option>
                                <option value="8">Phan Thiết</option>
                                <option value="9">Hạ Long</option>
                                <option value="10">Cần Thơ</option>
                                <option value="11">Vũng Tàu</option>
                                <option value="12">Huế</option>
                                <option value="13">Long Xuyên</option>
                                <option value="14">Thái Nguyên</option>
                                <option value="15">Buôn Mê Thuột</option>
                                <option value="16">Bắc Giang</option>
                                <option value="17">Bến Tre</option>
                                <option value="18">Ninh Bình</option>
                                <option value="19">Thái Bình</option>
                                <option value="20">Vinh</option>
                                <option value="21">Bảo Lộc</option>
                                <option value="22">Đà Lạt</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavbarHome;
