import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "./../../../api";

export default function MovieDetail(props) {
	const history = useHistory();
	const [movieDetail, setMovieDetail] = useState({});
	const renderTable = () => {
		const { lichChieu } = movieDetail;
		if (lichChieu && lichChieu.length > 0) {
			return lichChieu.map((item) => {
				return (
					<tr key={item.maLichChieu}>
						<td>{item.thongTinRap.tenCumRap}</td>
						<td>{item.thongTinRap.tenRap}</td>
						<td>
							{new Date(item.ngayChieuGioChieu).toLocaleDateString("en-GB")}
						</td>
						<td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
					</tr>
				);
			});
		}
	};
	const handleDeleteMovie = () => {
		api
			.delete(`/QuanLyPhim/XoaPhim?MaPhim=${props.match.params.id}`)
			.then(() => {
				alert("xoa thanh cong");
				history.push("/dashboard/movie");
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	};
	useEffect(() => {
		api
			.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${props.match.params.id}`)
			.then((res) => {
				console.log(res.data);
				setMovieDetail(res.data);
			})
			.catch((err) => console.log(err.response.data));
	}, []);

	return (
		<div className="container movieDetail">
			<div className="row">
				<div className="col-sm-4">
					<img
						className="img-fluid"
						src={movieDetail && movieDetail.hinhAnh}
						alt=""
					/>
					<button
						onClick={() => handleDeleteMovie()}
						className="btn btn-danger d-block my-2"
					>
						Xóa Phim
					</button>
				</div>
				<div className="col-sm-8">
					<table className="table">
						<tbody>
							<tr>
								<td>Tên Phim</td>
								<td>{movieDetail && movieDetail.tenPhim}</td>
							</tr>
							<tr>
								<td>Ngày Khởi Chiếu</td>
								<td>
									{movieDetail &&
										new Date(movieDetail.ngayKhoiChieu).toLocaleDateString(
											"en-GB"
										)}
								</td>
							</tr>
							<tr>
								<td>Giờ Khởi Chiếu</td>
								<td>
									{movieDetail &&
										new Date(movieDetail.ngayKhoiChieu).toLocaleTimeString()}
								</td>
							</tr>
							<tr>
								<td>Trailer</td>
								<td>{movieDetail && movieDetail.trailer}</td>
							</tr>
							<tr>
								<td>Đánh Giá</td>
								<td>{movieDetail && movieDetail.danhGia}</td>
							</tr>
							<tr>
								<td>Mô Tả</td>
								<td>{movieDetail && movieDetail.moTa}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<table className="table">
						<thead>
							<tr>
								<th>Cum Rap</th>
								<th>Ten Rap</th>
								<th>Ngay Chieu</th>
								<th>Gio Chieu</th>
							</tr>
						</thead>
						<tbody>{renderTable()}</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
