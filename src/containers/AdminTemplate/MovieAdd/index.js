import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "./../../../api";
import Moment from "moment";

export default function MovieAdd() {
	const history = useHistory();
	const initialState = {
		maPhim: "",
		tenPhim: "",
		moTa: "",
		trailer: "",
		hinhAnh: {},
		maNhom: "GP01",
		ngayKhoiChieu: "",
		danhGia: "",
	};
	const [newMovieInfo, setNewMovieInfo] = useState(initialState);
	const [err, setErr] = useState("");

	const handleAddMovie = (e) => {
		let error = false;
		e.preventDefault();
		let formData = new FormData();
		for (let key in newMovieInfo) {
			console.log(key, newMovieInfo[key]);
			if (newMovieInfo[key] === "") {
				error = true;
			} else {
				formData.append(key, newMovieInfo[key]);
			}
		}

		if (!error) {
			api
				.post("/QuanLyPhim/ThemPhimUploadHinh", formData)
				.then((res) => {
					alert("them phim moi thanh cong");
					history.push("/dashboard/movie");
				})
				.catch((err) => {
					setErr(err.response.data);
				});
			setErr("");
		} else {
			setErr("Vui lòng nhập đầy đủ thông tin");
		}
	};

	const handleChange = (e) => {
		if (e.target.name !== "hinhAnh") {
			if (e.target.name === "ngayKhoiChieu") {
				setNewMovieInfo({
					...newMovieInfo,
					[e.target.name]: Moment(e.target.value).format("DD/MM/YYYY"),
				});
			} else {
				setNewMovieInfo({ ...newMovieInfo, [e.target.name]: e.target.value });
			}
		} else {
			setNewMovieInfo({ ...newMovieInfo, hinhAnh: e.target.files[0] });
		}
	};

	return (
		<section className="add-new-movie">
			<div className="container">
				<h3 className="my-3">Add New Movie</h3>
				<form onSubmit={handleAddMovie}>
					{err !== "" && <div className="alert alert-danger">{err}</div>}
					<div className="row">
						<div className="col-sm-5 mr-5">
							<div className="form-group">
								<label>Mã Phim</label>
								<input
									type="text"
									className="form-control"
									name="maPhim"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Tên Phim</label>
								<input
									type="text"
									className="form-control"
									name="tenPhim"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Trailer</label>
								<input
									type="text"
									className="form-control"
									name="trailer"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Đánh Giá</label>
								<input
									type="text"
									className="form-control"
									name="danhGia"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="col-sm-5">
							<div className="form-group">
								<label>Hình Ảnh</label>
								<input
									type="file"
									className="form-control"
									name="hinhAnh"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Mô Tả</label>
								<input
									type="text"
									className="form-control"
									name="moTa"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Ngày Khởi Chiếu</label>
								<input
									type="datetime-local"
									className="form-control"
									name="ngayKhoiChieu"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Mã Nhóm</label>
								<input
									type="text"
									className="form-control"
									name="maNhom"
									value="GP01"
									readOnly
								/>
							</div>
						</div>
					</div>

					<button type="submit" className="btn btn-success">
						Add
					</button>
				</form>
			</div>
		</section>
	);
}
