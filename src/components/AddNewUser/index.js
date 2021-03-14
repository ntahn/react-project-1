import React, { useState } from "react";

const initialUser = {
	taiKhoan: "",
	matKhau: "",
	hoTen: "",
	email: "",
	soDt: "",
	maLoaiNguoiDung: "",
	// key: 0,
};

export default function AddNewUser({ handleSubmitAdd, cancelAdd }) {
	const [addUserInfo, setAddUserInfo] = useState(initialUser);
	const [error, setError] = useState(initialUser);
	let isValid = false;

	const handleOnChange = (e) => {
		setAddUserInfo({
			...addUserInfo,
			[e.target.name]: e.target.value,
		});
	};

	const checkingError = () => {
		isValid = true;
		const user = { ...addUserInfo };
		const errorList = { ...error };
		for (const property in user) {
			isValid = isValid && user[property];
			errorList[property] = user[property] ? "" : "vui lòng điền thông tin";
			if (property === "taiKhoan") {
				const check = user[property].length > 4;
				isValid = isValid && check;
				errorList[property] = check
					? ""
					: "chiều dài tên tài khoản phải lớn hơn 4";
			}
			if (property === "email") {
				const check = user[property].match(
					/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
				);
				isValid = isValid && check;
				errorList[property] = check ? "" : "email không đúng định dạng";
			}
			if (property === "soDt") {
				const check =
					user[property].match(/^[0-9]+$/) &&
					user[property].length > 9 &&
					user[property].length < 12;
				isValid = isValid && check;
				errorList[property] = check ? "" : "số điện thoại phải từ 10-11 chữ số";
			}
			if (property === "hoTen") {
				const check = user[property].match(/^[a-zA-Z ]+$/);
				isValid = isValid && check;
				errorList[property] = check ? "" : "họ tên không được chứa số";
			}
			if (property === "maLoaiNguoiDung") {
				const check =
					user[property] === "KhachHang" || user[property] === "QuanTri";
				isValid = isValid && check;
				errorList[property] = check
					? ""
					: `loại người dùng phải là "KhachHang" hoặc "QuanTri"`;
			}
		}
		setError(errorList);
	};

	const handleAddForm = (e) => {
		checkingError();
		e.preventDefault();
		if (isValid) {
			handleSubmitAdd(addUserInfo);
		} else {
			alert("vui lòng điền lại thông tin hợp lệ");
		}
	};

	return (
		<div className="row">
			<div className="col-sm-12">
				<form onSubmit={handleAddForm} className="col-sm-8 newUserForm">
					<div>
						<label className="col-sm-3">Tài Khoản</label>
						<input
							className="col-sm-5"
							type="text"
							id="taiKhoan"
							name="taiKhoan"
							onChange={handleOnChange}
							value={addUserInfo.taiKhoan}
						/>
						{error.taiKhoan && (
							<div className="col-sm-8 alert alert-danger">
								{error.taiKhoan}
							</div>
						)}
					</div>
					<div>
						<label className="col-sm-3">Mật Khẩu</label>
						<input
							className="col-sm-5"
							type="text"
							id="matKhau"
							name="matKhau"
							onChange={handleOnChange}
							value={addUserInfo.matKhau}
						/>
						{error.matKhau && (
							<div className="col-sm-8 alert alert-danger">{error.matKhau}</div>
						)}
					</div>
					<div>
						<label className="col-sm-3">Họ Tên</label>
						<input
							className="col-sm-5"
							type="text"
							id="hoTen"
							name="hoTen"
							onChange={handleOnChange}
							value={addUserInfo.hoTen}
						/>
						{error.hoTen && (
							<div className="col-sm-8 alert alert-danger">{error.hoTen}</div>
						)}
					</div>
					<div>
						<label className="col-sm-3">Email</label>
						<input
							className="col-sm-5"
							type="text"
							id="email"
							name="email"
							onChange={handleOnChange}
							value={addUserInfo.email}
						/>
						{error.email && (
							<div className="col-sm-8 alert alert-danger">{error.email}</div>
						)}
					</div>
					<div>
						<label className="col-sm-3">Số Điện Thoại</label>
						<input
							className="col-sm-5"
							type="text"
							id="soDt"
							name="soDt"
							onChange={handleOnChange}
							value={addUserInfo.soDt}
						/>
						{error.soDt && (
							<div className="col-sm-8 alert alert-danger">{error.soDt}</div>
						)}
					</div>
					<div>
						<label className="col-sm-3">Loại Người Dùng</label>
						<input
							className="col-sm-5"
							type="text"
							id="maLoaiNguoiDung"
							name="maLoaiNguoiDung"
							onChange={handleOnChange}
							value={addUserInfo.maLoaiNguoiDung}
						/>
						{error.maLoaiNguoiDung && (
							<div className="col-sm-8 alert alert-danger">
								{error.maLoaiNguoiDung}
							</div>
						)}
					</div>
					<div>
						<button type="submit" className="btn btn-success">
							Add
						</button>
						<button
							type="button"
							onClick={() => cancelAdd()}
							className="btn btn-danger"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
