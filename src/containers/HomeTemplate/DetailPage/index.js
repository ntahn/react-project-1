import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actDetailMovieApi } from './modules/action'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import fullstar from '../../../img/star1.png';
import halfstar from '../../../img/star1.2.png';
import Schedule from '../../../components/Schedule';
import 'react-circular-progressbar/dist/styles.css';

function DetailPage(props) {

    useEffect(() => {
        props.fetchDetailMovie(props.match.params.maPhim);
    }, [])

    const renderPoster = () => {
        if (props.data && props.data.length > 0) {
            return props.data.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div className="backgroundImg">
                            <img src={item.hinhAnh} className="backgroundPicture"/>
                        </div>
                        <div className="poster_overlay"></div>
                        <div className="posterInfo">
                            <div className="row d-flex aligns-item-center justify-content-between">
                                <div className="col-sm-3">
                                    <img src={item.hinhAnh} />
                                </div>
                                <div className="col-sm-5">
                                    <p>{new Date(item.ngayKhoiChieu).toLocaleDateString()}</p>
                                    <p className="filmInfo">
                                        <span>C18</span>
                                        <span>{item.tenPhim}</span>
                                    </p>
                                    <p>100 phút - 0 IMDb - 2D/Digital</p>
                                    <button>MUA VÉ</button>
                                </div>
                                <div className="col-sm-4">
                                    <CircularProgressbar 
                                        strokeWidth={12}
                                        value={item.danhGia}
                                        text={`${item.danhGia}%`}
                                        className="progressBar"
                                        styles={buildStyles({
                                            textColor: "white",
                                            pathColor: "#51A416",
                                            trailColor: "#4F4C47",
                                            textSize: "20pt",
                                        })}
                                    />
                                    <div className="rating-star mt-2">
                                        <img src={fullstar} />
                                        <img src={fullstar} />
                                        <img src={fullstar} />
                                        <img src={halfstar} />
                                    </div>
                                    <div className="rating-number mt-2" style={{color: "white",}}>
                                        33 người đánh giá
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })
        }
    }

    return (
        <React.Fragment>
            <div className="position-relative">
                {renderPoster()}
            </div>
            <div style={{backgroundColor: '#0A2029'}}>
                <Schedule />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.detailReducer.data,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailMovie: (tenPhim) => {
            dispatch(actDetailMovieApi(tenPhim));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
