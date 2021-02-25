import React, { useEffect } from 'react'
import nextsession from '../../img/next-session.png';
import { actListMovieApi } from './modules/action';
import { connect } from 'react-redux';
import playButton from '../../img/play-video.png';
import star from '../../img/star1.png';
import halfStar from '../../img/star1.2.png';
import { actUpcomingFilmApi } from '../Modules/UpcomingFilm/action';

function ListMovie(props) {

    useEffect(() => {
        props.fetchListMovie();
        props.fetchUpcomingMovie();
    }, [])

    const renderListMovie = () => {
        if (props.data && props.data.items.length > 0) {
            return props.data.items.map((item) => {
                return (
                    <div className="card col-3" key={item.maPhim}>
                        <div className="card-content">
                            <img className="card-img-top" src={item.hinhAnh} alt="Card image cap" />
                            <div className="card-overlay"></div>
                            <button className="play-button"><img src={playButton} /></button>
                            <div className="card-rating">
                                <p className="rating">{item.danhGia}</p>
                                <p className="rating-star">
                                    <span><img src={star} /></span>
                                    <span><img src={star} /></span>
                                    <span><img src={star} /></span>
                                    <span><img src={star} /></span>
                                    <span><img src={halfStar} /></span>
                                </p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text"><span>C18</span>{item.tenPhim}</p>
                            <p className="ageLimit">128 phút</p>
                        </div>
                        <button className="card-footer">MUA VÉ</button>
                    </div>
                )
            })
        }
    }

    const renderUpcomingMovies = () => {
        if(props.dataUpcomingFilm && props.dataUpcomingFilm.items.length > 0) {
            return props.dataUpcomingFilm.items.map((item) => {
                return (
                    <div className="card col-3" key={item.maPhim}>
                        <div className="card-content">
                            <img className="card-img-top" src={item.hinhAnh} alt="Card image cap" />
                            <div className="card-overlay"></div>
                            <button className="play-button"><img src={playButton} /></button>
                            <div className="card-rating">
                                <p className="rating">{item.danhGia}</p>
                                <p className="rating-star">
                                    <span><img src={star} /></span>
                                    <span><img src={star} /></span>
                                    <span><img src={star} /></span>
                                    <span><img src={star} /></span>
                                    <span><img src={halfStar} /></span>
                                </p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text"><span>C18</span>{item.tenPhim}</p>
                            <p className="ageLimit">128 phút</p>
                        </div>
                        <button className="card-footer">MUA VÉ</button>
                    </div>
                )
            })
        }
    }

    return (
        <div className="container listMovie">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#dangChieu" role="tab" aria-controls="home" aria-selected="true">Đang Chiếu</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#sapChieu" role="tab" aria-controls="profile" aria-selected="false">Sắp Chiếu</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="dangChieu" role="tabpanel" aria-labelledby="home-tab">
                    <button className="prev-session"><img src={nextsession} /></button>
                    <button className="forward-session"><img src={nextsession} /></button>
                    <div className="slider__content">
                        <div className="container">
                            <div className="row">
                                {renderListMovie()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="sapChieu" role="tabpanel" aria-labelledby="profile-tab">
                    <button className="prev-session"><img src={nextsession} alt /></button>
                    <button className="forward-session"><img src={nextsession} alt /></button>
                    <div className="slider__content">
                        <div className="container">
                            <div className="row">
                                {renderUpcomingMovies()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.listMovieReducer.data,
        dataUpcomingFilm: state.upcomingFilmReducer.dataUpcoming,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListMovie: () => {
            dispatch(actListMovieApi());
        },
        fetchUpcomingMovie: () => {
            dispatch(actUpcomingFilmApi());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);