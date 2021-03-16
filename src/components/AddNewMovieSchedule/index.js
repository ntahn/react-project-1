import React, { useState, useEffect } from "react";
import api from "./../../api";
import Moment from "moment";

export default function AddNewMovieSchedule({ maPhim, setMovieDetail }) {
	const [heThongRap, setHeThongRap] = useState([]);
	const [cumRap, setCumRap] = useState([]);
	const [maCumRap, setMaCumRap] = useState("");
	const [maRap, setMaRap] = useState(0);
	const [ngayChieuGioChieu, setNgayChieuGioChieu] = useState("");
	const [giaVe, setGiaVe] = useState(0);

	useEffect(() => {
		api
			.get("/QuanLyRap/LayThongTinHeThongRap")
			.then((res) => {
				console.log(res.data);
				setHeThongRap([...res.data]);
			})
			.catch((err) => console.log(err));
	}, []);

	const renderHeThongRap = () => {
		if (heThongRap && heThongRap.length > 0) {
			return heThongRap.map((item, index) => {
				return (
					<option key={index} value={item.maHeThongRap}>
						{item.maHeThongRap}
					</option>
				);
			});
		}
	};

	const handleChonHeThongRap = (e) => {
		console.log(e.target.value);
		api
			.get(
				`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${e.target.value}`
			)
			.then((res) => {
				console.log(res.data);
				setCumRap([...res.data]);
			})
			.catch((err) => console.log(err));
	};

	// const handleChonCumRap = (e) => {
	// 	setMaCumRap(e.target.value);
	// };

	// const e=>{setMaRap(e.target.value);} = (e) => {
	// 	setMaRap(e.target.value);
	// };

	const themLichChieu = () => {
		console.log({ maRap, ngayChieuGioChieu, giaVe, maPhim });
		api
			.post(`/QuanLyDatVe/TaoLichChieu`, {
				maPhim,
				ngayChieuGioChieu,
				maRap,
				giaVe,
			})
			.then(() => {
				alert("thêm lịch chiếu thành công!");
				api
					.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
					.then((res) => {
						setMovieDetail(res.data);
						api
							.get("/QuanLyRap/LayThongTinHeThongRap")
							.then((res) => {
								// console.log(res.data);

								setHeThongRap([...res.data]);
							})
							.catch((err) => console.log(err));
						// setHeThongRap([]);
						setCumRap([]);
						setMaCumRap("");
						setMaRap(0);
						// setGiaVe(0);
						// setNgayChieuGioChieu("");
					})
					.catch((err) => console.log(err.response.data));
			})
			.catch((err) => alert(err.response.data));
	};

	const renderCumRap = () => {
		if (cumRap && cumRap.length > 0) {
			return cumRap.map((item, index) => {
				return (
					<option key={index} value={item.maCumRap}>
						{item.tenCumRap}
					</option>
				);
			});
		}
	};

	const renderRap = () => {
		if (maCumRap !== "" && cumRap && cumRap.length > 0) {
			const cumRapDaChon = cumRap.find((item) => item.maCumRap === maCumRap);
			const { danhSachRap } = cumRapDaChon;
			console.log(danhSachRap);
			return danhSachRap.map((item, index) => {
				return (
					<option key={index} value={item.maRap}>
						{item.tenRap}
					</option>
				);
			});
		}
	};

	return (
		<div className="row">
			<div className="col-sm-10">
				<select
					onChange={handleChonHeThongRap}
					name="heThongRap"
					// className="custom-select"
				>
					<option value="0">Chọn Hệ Thống Rạp</option>
					{renderHeThongRap()}
					{/* <option value="volvo">Volvo XC90</option>
					<option value="saab">Saab 95</option>
					<option value="mercedes">Mercedes SLK</option>
					<option value="audi">Audi TT</option> */}
				</select>
				<select
					// onChange={handleChonCumRap}
					onChange={(e) => {
						setMaCumRap(e.target.value);
					}}
					name="cumRap"
					// className="custom-select"
				>
					<option value="0">Chọn Cụm Rạp</option>
					{renderCumRap()}
				</select>
				<select
					onChange={(e) => {
						setMaRap(e.target.value);
					}}
					name="danhSachRap"
					// className="custom-select"
				>
					<option value="0">Chọn Rạp</option>
					{renderRap()}
				</select>
				<input
					type="datetime-local"
					className="d-inline"
					name="ngayChieuGioChieu"
					onChange={(e) => {
						setNgayChieuGioChieu(
							Moment(e.target.value).format("DD/MM/YYYY HH:mm:ss")
						);
					}}
				/>
				<input
					type="number"
					name="giaVe"
					className="d-inline"
					placeholder="chọn giá vé"
					onChange={(e) => {
						setGiaVe(e.target.value);
					}}
				/>
			</div>
			<div className="col-sm-2">
				<button className=" btn btn-primary mb-2" onClick={themLichChieu}>
					Thêm Lịch Chiếu
				</button>
			</div>
		</div>
	);
}
