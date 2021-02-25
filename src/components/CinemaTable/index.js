import React, { useEffect } from 'react'
import { actSearchApi } from '../SearchBar/modules/actions';
import { connect } from 'react-redux';
import { actCinemaTableApi } from './modules/action';
import BHD1 from '../../img/BHD1.jpg';

function CinemaTable(props) {

    useEffect(() => {
        props.fetchListBranch()
    }, []);

    const renderBranch = () => {
        if (props.data && props.data.length > 0) {
            return props.data.map((item, index) => {
                return (
                    <li className="nav-item listLogo" role="representation" key={index}>
                        <a className={"nav-link active logoRap"} id="home-tab" data-toggle="tab" href={"#" + item.maHeThongRap} role="tab" aria-controls={item.maHeThongRap} aria-selected="true"
                            onClick={() => renderDetailBranch(item.maHeThongRap)}>
                            <img src={item.logo} className="logoRapItem" />
                        </a>
                    </li>
                )
            })
        }
    };

    const renderDetailBranch = (maRap) => {
        if (maRap) return props.fetchListDetailBranch(maRap);

        if (props.cinemaData && props.cinemaData.length > 0) {
            return (
                <div className="tab-pane fade show active" id={maRap} role="tabpanel">
                    {props.cinemaData.map((detail, index) => {
                        return detail.lstCumRap.map((item, index1) => {
                            return (
                                <li className="d-flex active" key={index1} role="representation" onClick={() => renderDetailCinema(item.maCumRap)}>
                                    <img src={BHD1} />
                                    <div id="detailBranchContent">
                                        <strong>{item.tenCumRap}</strong>
                                        <p>{item.diaChi}</p>
                                        <a href={"#" + item.maCumRap} data-toggle="tab" role="tab" aria-controls={item.maCumRap} aria-selected="true">
                                            [Chi Tiết]
                                        </a>
                                    </div>
                                </li>
                            )
                        })
                    })}
                </div>
            )
        }
    }

    const renderDetailCinema = (maCumRap) => {
        if(props.cinemaData && props.cinemaData.length > 0) {
            return (
                <div className="tab-pane fade show active" id={maCumRap} role="tabpanel">
                    {props.cinemaData.map((detail, index) => {
                        return detail.lstCumRap.map((item, index1) => {
                            return item.danhSachPhim.map((movie, index2) => {
                                return (
                                    <div className="col-right" key={index2}>
                                        <div className="d-flex active pt-0">
                                            <img src={movie.hinhAnh} />
                                            <div >
                                                <h4><span className="badge badge-success mr-2">P</span>{movie.tenPhim}</h4>
                                                <p>109 phút - TIX 9.4 - IMDb 8.7</p>
                                            </div>
                                        </div>
                                        <strong>2D Digital</strong>
                                        <button className="btn btn-light d-flex align-items-center">20:30 - 22:30</button>
                                    </div>
                                )
                            })
                        })
                    })}
                </div>
            )
        }
    }

    return (
        <section className="address" id="address">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        <ul className="nav nav-tabs d-flex flex-wrap" id="myTab" role="tabList">
                            {renderBranch()}
                        </ul>
                    </div>
                    <div className="col-md-5 overflow-auto" style={{padding: '0 0'}}>
                        <ul className="tab-content d-flex flex-wrap" id="myTabContent" role="tabList">
                            {renderDetailBranch()}
                        </ul>
                    </div>
                    <div className="col-md-6 overflow-auto" style={{padding: '0 0 '}}>
                        <div className="tab-content d-flex flex-wrap" id="myTabContent1">
                            {renderDetailCinema()}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.SearchReducer.data,
        cinemaData: state.CinemaTableReducer.cinemaData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListBranch: () => {
            dispatch(actSearchApi());
        },
        fetchListDetailBranch: (maRap) => {
            dispatch(actCinemaTableApi(maRap));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CinemaTable);