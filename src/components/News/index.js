import React from 'react';
import news1 from '../../img/news1.png'
import news2 from '../../img/news2.png'
import news3 from '../../img/news3.png'
import news4 from '../../img/news4.png'
import news5 from '../../img/news5.png'
import news6 from '../../img/news6.jpg'
import news7 from '../../img/news7.jpg'
import news8 from '../../img/news8.jpg'
import news11 from '../../img/news11.jpg'
import news12 from '../../img/news12.png'
import news13 from '../../img/news13.jpg'
import news14 from '../../img/news14.jpg'
import news15 from '../../img/news15.jpg'
import news16 from '../../img/news16.jpg'
import news17 from '../../img/news17.jpg'
import news18 from '../../img/news18.jpg'

function News() {
    return (
        <section className="movieNews">
            <div className="container">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#movieNews1" role="tab" aria-controls="home" aria-selected="true">Điện ảnh 24h</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#movieNews2" role="tab" aria-controls="profile" aria-selected="false">Review</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#movieNews3" role="tab" aria-controls="contact" aria-selected="false">Khuyến mãi</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active movieNews__content" id="movieNews1" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid" src={news1} />
                                    <h2>[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</h2>
                                </a>
                                <p>Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu
                                chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get
              Out”, “Us” hay ...</p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 0</span>
                            </div>
                            <div className="col-12 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid" src={news2} />
                                    <h2>Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</h2>
                                </a>
                                <p>Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn khách nhất mùa hè 2020 tại Hàn Quốc. Chỉ sau 12
                                ngày, Ác Quỷ Đối Đầu chạm điểm hoà vốn với 3.5 triệu lượt xem. Ác Quỷ Đối Đầu giữ vững vị trí top 1
              doanh thu 2 tuần liên tiếp </p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 1</span>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="#">
                                    <img className="img-fluid" src={news3} />
                                    <h2>Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan</h2>
                                </a>
                                <p>Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được
              biết tới như một trong những đạo diễn thiên tài với khả </p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 0</span>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="#">
                                    <img className="img-fluid" src={news4} />
                                    <h2>Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</h2>
                                </a>
                                <p>Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng
              điện ảnh Hàn Quốc mới tiếp tục tái hợp trong </p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 0</span>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news5} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">
                                            6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood
                </a>
                                    </div>
                                </div>
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news6} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">Gái Già Lắm Chiêu V – Những cuộc đời vương giả</a>
                                    </div>
                                </div>
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news7} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu</a>
                                    </div>
                                </div>
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news8} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade movieNews__content" id="movieNews2" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid" src={news2} />
                                    <h2>
                                        Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</h2>
                                </a>
                                <p>Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 0</span>
                            </div>
                            <div className="col-12 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid" src={news1} />
                                    <h2>Review: Dinh Thự Oan Khuất (Ghost Of War)</h2>
                                </a>
                                <p>Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở
              lại phòng vé! </p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 1</span>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="#">
                                    <img className="img-fluid" src={news4} />
                                    <h2>‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh</h2>
                                </a>
                                <p>Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về
              nạn phân biệt chủng tộc - nỗi đau gây nhức </p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 0</span>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="#">
                                    <img className="img-fluid" src={news3} />
                                    <h2>American Sniper - Chính nghĩa hay phi nghĩa?</h2>
                                </a>
                                <p>American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở
              Trung Đông. Câu chuyện phim chậm rãi đưa người </p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 0</span>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news6} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood</a>
                                    </div>
                                </div>
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news5} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">Gái Già Lắm Chiêu V – Những cuộc đời vương giả</a>
                                    </div>
                                </div>
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news8} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu</a>
                                    </div>
                                </div>
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news7} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade movieNews__content" id="movieNews3" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid" src={news11} />
                                    <h2>[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</h2>
                                </a>
                                <p>Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu
                                chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get
              Out”, “Us” hay ...</p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 0</span>
                            </div>
                            <div className="col-12 col-sm-6">
                                <a href="#">
                                    <img className="img-fluid" src={news12} />
                                    <h2>Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</h2>
                                </a>
                                <p>Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn khách nhất mùa hè 2020 tại Hàn Quốc. Chỉ sau 12
                                ngày, Ác Quỷ Đối Đầu chạm điểm hoà vốn với 3.5 triệu lượt xem. Ác Quỷ Đối Đầu giữ vững vị trí top 1
              doanh thu 2 tuần liên tiếp </p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 1</span>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="#">
                                    <img className="img-fluid" src={news13} />
                                    <h2>Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan</h2>
                                </a>
                                <p>Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được
              biết tới như một trong những đạo diễn thiên tài với khả </p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 0</span>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="#">
                                    <img className="img-fluid" src={news14} />
                                    <h2>Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</h2>
                                </a>
                                <p>Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng
              điện ảnh Hàn Quốc mới tiếp tục tái hợp trong </p>
                                <span className="mr-2"><i className="far fa-thumbs-up" /> 0</span>
                                <span><i className="far fa-comment-alt" /> 0</span>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news15}  /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">
                                            6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood
                </a>
                                    </div>
                                </div>
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news16} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">Gái Già Lắm Chiêu V – Những cuộc đời vương giả</a>
                                    </div>
                                </div>
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news17} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu</a>
                                    </div>
                                </div>
                                <div className="row news__item">
                                    <div className="col-2 p-0 news__rightImg">
                                        <a href="#"><img className="img-fluid" src={news18} /></a>
                                    </div>
                                    <div className="col-10 news__right">
                                        <a href="#">5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="movieNews__button">Xem thêm</button>
            </div>
        </section>

    )
}

export default News;
