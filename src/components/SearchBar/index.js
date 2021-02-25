import React, { useEffect } from 'react';
import { actSearchApi } from './modules/actions';
import { connect } from 'react-redux';
import { actFilmNameApi } from '../Modules/SearchFilm/action';

function SearchBar(props) {

    useEffect(() => {
       props.fetchListRap();
       props.fetchFilmName();
    }, []);

    const renderRap = () => {
        if (props.data && props.data.length > 0) {
            return props.data.map((item, index) => {
                return (
                    <option key={index}>{item.tenHeThongRap}</option>
                )
            })
        }
    }

    const renderPhim = () => {
        if(props.dataFilm && props.dataFilm.length > 0) {
            return props.dataFilm.map((item) => {
                return (
                    <option key={item.maPhim}>{item.tenPhim}</option>
                )
            })
        }
    }

    return (
        <div className="container search">
            <div className="search-item d-inline">
                <select className="dropdown">
                    <option defaultValue>Phim</option>
                    {renderPhim()}
                </select>
            </div>
            <div className="search-item d-inline">
                <select className="dropdown">
                    <option defaultValue>Rạp</option>
                    {renderRap()}
                </select>
            </div>
            <div className="search-item d-inline">
                <select className="dropdown">
                    <option defaultValue>Ngày xem</option>
                    <option>Hôm nay</option>
                    <option>Ngày mai</option>
                    <option>Thứ Hai</option>
                    <option>Thứ Ba</option>
                    <option>Thứ Tư</option>
                    <option>Thứ Năm</option>
                    <option>Thứ Sáu</option>
                    <option>Thứ Bảy</option>
                    <option>Chủ Nhật</option>
                </select>
            </div>
            <div className="search-item d-inline">
                <select className="dropdown">
                    <option defaultValue>Suất chiếu</option>
                    <option>18:40</option>
                    <option>19:40</option>
                    <option>20:40</option>
                    <option>21:40</option>
                    <option>22:40</option>
                    <option>23:40</option>
                    <option>24:40</option>
                </select>
            </div>
            <div className="search-item d-inline">
                <button>MUA VÉ NGAY</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataFilm: state.filmNameReducer.dataFilm,
        data: state.SearchReducer.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListRap: () => {
            dispatch(actSearchApi());
        },
        fetchFilmName: () => {
            dispatch(actFilmNameApi());
        },
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
