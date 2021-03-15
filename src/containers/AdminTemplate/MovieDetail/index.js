import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "./../../../api";
import Moment from "moment";

export default function MovieDetail(props) {
	const history = useHistory();
	const [movieDetail, setMovieDetail] = useState({});
	const [editMovie, setEditMovie] = useState({ isUsing: false });
	const handleChange = (e) => {
		if (e.target.name === "hinhAnh") {
			console.log(e.target);
			setEditMovie({ ...editMovie, hinhAnh: e.target.files[0] });
		} else {
			if (e.target.type === "ngayKhoiChieu") {
				setEditMovie({
					...editMovie,
					[e.target.name]: Moment(e.target.value).format("DD/MM/YYYY"),
				});
			} else {
				setEditMovie({ ...editMovie, [e.target.name]: e.target.value });
			}
		}
	};
	const handleUpdate = () => {
		let formData = new FormData();
		for (let key in editMovie) {
			formData.append(key, editMovie[key]);
		}
		api
			.post(`/QuanLyPhim/CapNhatPhimUpload`, formData)
			.then(() => {
				api
					.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${props.match.params.id}`)
					.then((res) => {
						alert("update thành công!");
						setMovieDetail(res.data);
						setEditMovie({ ...editMovie, isUsing: false });
					})
					.catch((err) => alert(err.response.data));
			})
			.catch((err) => alert(err.response.data));
	};
	const handleEditMovie = () => {
		setEditMovie({ ...movieDetail, hinhAnh: {}, isUsing: !editMovie.isUsing });
	};
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
			// .delete(`/QuanLyPhim/XoaPhim`, props.match.params.id)
			.then(() => {
				alert("xoa thanh cong");
				history.push("/dashboard/movie");
			})
			.catch((err) => {
				history.push("/dashboard/movie");
			});
	};

	useEffect(() => {
		api
			.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${props.match.params.id}`)
			.then((res) => {
				setMovieDetail(res.data);
			})
			.catch((err) => console.log(err.response.data));
	}, []);

	useEffect(() => {
		console.log(editMovie, typeof editMovie.hinhAnh);
	}, [editMovie]);

	return (
		<div className="container movieDetail">
			<div className="row">
				<div className="col-sm-4">
					<img
						className="img-fluid"
						src={movieDetail && movieDetail.hinhAnh}
						alt=""
					/>
					{editMovie.isUsing && (
						<form>
							<input type="file" name="hinhAnh" onChange={handleChange} />
						</form>
					)}
					<button
						onClick={() => handleDeleteMovie()}
						className="btn btn-danger d-block my-2"
					>
						Xóa Phim
					</button>
					<button
						// onClick={() => handleDeleteMovie()}
						className="btn btn-success mb-2"
					>
						Thêm Lịch Chiếu
					</button>
				</div>
				<div className="col-sm-8">
					<table className="table">
						<tbody>
							<tr>
								<td>Tên Phim</td>
								{!editMovie.isUsing ? (
									<td className="movie-content">
										{movieDetail && movieDetail.tenPhim}
									</td>
								) : (
									<td>
										<input
											// className="my-auto"
											type="text"
											name="tenPhim"
											value={editMovie.tenPhim}
											onChange={handleChange}
										/>
									</td>
								)}

								<td>
									<button className="btn btn-warning" onClick={handleEditMovie}>
										{editMovie.isUsing ? "Cancel" : "Edit"}
									</button>
								</td>
							</tr>
							<tr>
								<td>Trailer</td>
								{!editMovie.isUsing ? (
									<td className="movie-content">
										{movieDetail && movieDetail.trailer}
									</td>
								) : (
									<td>
										<input
											// className="my-auto"
											type="text"
											name="trailer"
											value={editMovie.trailer}
											onChange={handleChange}
										/>
									</td>
								)}
							</tr>
							<tr>
								<td>Mô Tả</td>
								{!editMovie.isUsing ? (
									<td className="movie-content">
										{movieDetail && movieDetail.moTa}
									</td>
								) : (
									<td>
										<input
											// className="my-auto"
											type="text"
											name="moTa"
											value={editMovie.moTa}
											onChange={handleChange}
										/>
									</td>
								)}
							</tr>
							<tr>
								<td>Đánh Giá</td>
								<td className="movie-content">
									{movieDetail && movieDetail.danhGia}
								</td>
							</tr>
							<tr>
								<td>Ngày Giờ Khởi Chiếu</td>
								<td className="movie-content">
									{movieDetail &&
										Moment(movieDetail.ngayKhoiChieu).format(
											"DD/MM/YYYY HH:mm A"
										)}
								</td>
							</tr>
						</tbody>
					</table>
					{editMovie.isUsing && (
						<div className="pl-5">
							<button
								className="btn btn-success"
								onClick={() => handleUpdate()}
							>
								Update
							</button>
						</div>
					)}
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
