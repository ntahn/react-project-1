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

export default function AddNewUser({ handleSubmitAdd, cancelAdd, isUsing }) {
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
			errorList[property] = user[property] ? "" : "*vui lòng điền thông tin";
			if (property === "taiKhoan") {
				const check = user[property].length > 4;
				isValid = isValid && check;
				errorList[property] = check
					? ""
					: "*chiều dài tên tài khoản phải lớn hơn 4";
			}
			if (property === "email") {
				const check = user[property].match(
					/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
				);
				isValid = isValid && check;
				errorList[property] = check ? "" : "*email không đúng định dạng";
			}
			if (property === "soDt") {
				const check =
					user[property].match(/^[0-9]+$/) &&
					user[property].length > 9 &&
					user[property].length < 12;
				isValid = isValid && check;
				errorList[property] = check
					? ""
					: "*số điện thoại phải từ 10-11 chữ số";
			}
			if (property === "hoTen") {
				const check = user[property].match(/^[a-zA-Z ]+$/);
				isValid = isValid && check;
				errorList[property] = check ? "" : "*họ tên không được chứa số";
			}
			if (property === "maLoaiNguoiDung") {
				const check =
					user[property] === "KhachHang" || user[property] === "QuanTri";
				isValid = isValid && check;
				errorList[property] = check
					? ""
					: `*phải là "KhachHang" hoặc "QuanTri"`;
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
		<div
			className="bg-modal"
			style={{
				display: isUsing ? "flex" : "none",
			}}
		>
			<div className="modal-content">
				<div className="close" onClick={() => cancelAdd()}>
					<span>+</span>
				</div>
				<h3>Thêm Người Dùng Mới</h3>
				<form onSubmit={handleAddForm} className="col-sm-12 newUserForm">
					<div>
						{/* <label className="col-sm-5">Tài Khoản</label> */}
						<input
							placeholder="Tài Khoản"
							className=""
							type="text"
							id="taiKhoan"
							name="taiKhoan"
							onChange={handleOnChange}
							value={addUserInfo.taiKhoan}
						/>
						{error.taiKhoan && (
							<div className="col-sm-12 mx-auto alert">{error.taiKhoan}</div>
						)}
					</div>
					<div>
						{/* <label className="col-sm-5">Mật Khẩu</label> */}
						<input
							placeholder="Mật Khẩu"
							className=""
							type="text"
							id="matKhau"
							name="matKhau"
							onChange={handleOnChange}
							value={addUserInfo.matKhau}
						/>
						{error.matKhau && (
							<div className="col-sm-12 mx-auto alert">{error.matKhau}</div>
						)}
					</div>
					<div>
						{/* <label className="col-sm-5">Họ Tên</label> */}
						<input
							placeholder="Họ Tên"
							className=""
							type="text"
							id="hoTen"
							name="hoTen"
							onChange={handleOnChange}
							value={addUserInfo.hoTen}
						/>
						{error.hoTen && (
							<div className="col-sm-12 mx-auto alert">{error.hoTen}</div>
						)}
					</div>
					<div>
						{/* <label className="col-sm-5">Email</label> */}
						<input
							placeholder="Email"
							className=""
							type="text"
							id="email"
							name="email"
							onChange={handleOnChange}
							value={addUserInfo.email}
						/>
						{error.email && (
							<div className="col-sm-12 mx-auto alert">{error.email}</div>
						)}
					</div>
					<div>
						{/* <label className="col-sm-5">Số Điện Thoại</label> */}
						<input
							placeholder="Số Điện Thoại"
							className="col-sm-12"
							type="text"
							id="soDt"
							name="soDt"
							onChange={handleOnChange}
							value={addUserInfo.soDt}
						/>
						{error.soDt && (
							<div className="col-sm-12 mx-auto alert">{error.soDt}</div>
						)}
					</div>
					<div>
						{/* <label className="col-sm-5">Loại Người Dùng</label> */}
						<input
							placeholder="Loại Người Dùng"
							className=""
							type="text"
							id="maLoaiNguoiDung"
							name="maLoaiNguoiDung"
							onChange={handleOnChange}
							value={addUserInfo.maLoaiNguoiDung}
						/>
						{error.maLoaiNguoiDung && (
							<div className="col-sm-12 mx-auto alert">
								{error.maLoaiNguoiDung}
							</div>
						)}
					</div>
					<div className="button">
						<button type="submit" className="btn btn-success">
							Thêm
						</button>
						{/* <button
							type="button"
							onClick={() => cancelAdd()}
							className="btn btn-danger"
						>
							Cancel
						</button> */}
					</div>
				</form>
			</div>
		</div>
	);
}
