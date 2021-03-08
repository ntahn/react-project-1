import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actMovieScheduleApi } from './modules/action';
import { actSearchApi } from '../../components/SearchBar/modules/actions';
import useStyle from '../../components/Style/index';
import styled from 'styled-components';
import vincom from '../../img/BHD1.jpg';

function Schedule(props) {
    const classes = useStyle();
    useEffect(() => {
        props.fetchScheduleBranch();
        props.fetchBranchDetail('BHDStar');
    }, []);

    const renderBranch = () => {
        if (props.data && props.data.length > 0) {
            return props.data.map((list, index) => {
                return (
                    <li className="nav-item" role="presentation" key={index}>
                        <a
                            className={"nav-link active"}
                            id="home-tab"
                            data-toggle="tab"
                            href={"#" + list.maHeThongRap}
                            role="tab" aria-controls={list.maHeThongRap} aria-selected="true"
                            onClick={() => renderDetailMovie(list.maHeThongRap)}
                            style={{ width: '323px', height: '126px' }}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="logoRap">
                                        <img src={list.logo} />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="mt-2 ml-5" style={{
                                        marginLeft: '100%', marginRight: '0px', fontSize: '18px', fontWeight: 'bold'
                                    }}>
                                        {list.maHeThongRap}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li >
                );
            });
        }
    }

    const renderDetailMovie = (maRap) => {
        if (maRap) return props.fetchBranchDetail(maRap);
        if (props.data1 && props.data1.length > 0) {
            return (
                <div className="tab-pane fade show active" id={maRap} role="tabpanel" style={{ backgroundColor: 'white' }}>
                    {props.data1.map((detail, index) => {
                        return detail.lstCumRap.map((list, index1) => {
                            return (
                                <div className="col-right" key={index1}>
                                    <div className="d-flex active mt-4 pt-0">
                                        <img src={vincom} />
                                        <div>
                                            <strong>{detail.tenCumRap}</strong>
                                            <strong>{list.tenCumRap}</strong>
                                            <span style={{ display: 'flex' }}>
                                                <p>{list.diaChi}</p>
                                                <a
                                                    href={"#" + list.maCumRap}
                                                    data-toggle="tab"
                                                    role="tab"
                                                    aria-controls={list.maCumRap} aria-selected="true"
                                                >
                                                    [Bản đồ]
                                                </a>
                                            </span>
                                            <h5>2D Digital</h5>
                                            <button className={`btn d-flex align-items-center + ${classes.buttonTicket}`}><h6 style={{ marginLeft: '15px' }}>20:30</h6>~22:19</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    })}
                </div>
            );
        }
    }

    const Button = styled.button`
        background-color: white;
        color: black;
        border: none;
        cursor: pointer;
        font-size: 18px;
        &:focus { 
            border: none;
            outline: none;
            color: #FB4226;
        }
    `;

    const renderMovieSchedule = () => {
        window.location.reload();
    }

    const renderNgayThang = () => {
        return (
            <div className={classes.styleDatePicker}>
                <Button
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={classes.styleDay}>
                        Chủ Nhật
                    </div>
                    <div className={classes.styleDate}>
                        17
                    </div>
                </Button>
                <Button
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={classes.styleDay}>
                        Thứ 2
                    </div>
                    <div className={classes.styleDate}>
                        18
                    </div>
                </Button>
                <Button
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={classes.styleDay}>
                        Thứ 3
                    </div>
                    <div className={classes.styleDate}>
                        19
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 4
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        20
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 5
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        21
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 6
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        22
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 7
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        23
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 7
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        23
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Chủ nhật
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        24
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 2
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        25
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 3
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        26
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 4
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        27
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 5
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        28
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 6
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        29
                    </div>
                </Button>
                <Button disabled
                    onClick={() => renderMovieSchedule()}
                >
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 7
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        30
                    </div>
                </Button>
            </div >
        );
    }

    return (
        <section className="address" id="address">
            <div className="container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ marginLeft: '40%' }}>
                    <li className={`nav-item ${classes.tabs}`}>
                        <a className={`nav-link active ${classes.info}`} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Lịch Chiếu</a>
                    </li>
                    <li className={`nav-item ${classes.tabs}`}>
                        <a className={`nav-link ${classes.info}`} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Thông Tin</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <ul className="nav nav-tabs d-flex flex-wrap col-md-4" id="myTab" role="tablist">
                                    {renderBranch()}
                                </ul>
                            </div>
                            <div className="col-md-8 overflow-auto" >
                                <ul className="nav nav-tabs d-flex flex-wrap col-md-12" id="myTabContent" role="tablist">
                                    {renderNgayThang()}
                                    <div className="overflow-auto">
                                        <div>
                                            {renderDetailMovie()}
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row" style={{ color: 'white', fontSize: '25px' }}>
                            <div className="col-md-4">
                                <p>Ngày công chiếu: xxxxxxxx</p>
                                <p>Đạo diễn:        xxxxxxxx</p>
                                <p>Diễn viên:       xxxxxxxx</p>
                                <p>Thể loại:        xxxxxxxx</p>
                                <p>Định dạng:       2D/Digital</p>
                                <p>Quốc gia SX:     xxxxxxxx</p>
                            </div>
                            <div className="col-md-8">
                                <p>Nội dung: </p>
                                <p>xxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        loading1: state.scheduleReducer.loading1,
        data1: state.scheduleReducer.data1,
        loading: state.SearchReducer.loading,
        data: state.SearchReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchScheduleBranch: () => {
            dispatch(actSearchApi());
        },
        fetchBranchDetail: (maRap) => {
            dispatch(actMovieScheduleApi(maRap));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);