import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import api from "./../../api";

const TIME_EXP = 3600000; //1 hour

export default function Login() {
	const initialState = {
		taiKhoan: "",
		matKhau: "",
	};

	let history = useHistory();

	const [loginInfo, setLoginInfo] = useState({ ...initialState });
	const [errData, setErrData] = useState("");

	const renderNoti = () => {
		if (errData !== "") {
			return <div className="alert alert-danger">{errData}</div>;
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();
		api
			.post("/QuanLyNguoiDung/DangNhap", loginInfo)
			.then((result) => {
				if (result.data.maLoaiNguoiDung === "QuanTri") {
					//setHeader Token
					// setHeaders(result.data.accessToken);
					//Lưu trạng thái login
					localStorage.setItem("UserAdmin", JSON.stringify(result.data));
					// Redirect qua trang Dashboard
					// history.replace("/dashboard");

					//thời gian hết phiên
					const date = new Date().getTime();
					const exp = date + TIME_EXP;
					localStorage.setItem("exp", exp);
					// dispatch(setTimeoutLogout(history, TIME_EXP));
					setErrData("");
					// setTimeout(() => {
					// 	localStorage.removeItem("UserAdmin");
					// 	localStorage.removeItem("exp");
					// 	//chuyen huong ve trang auth
					// 	alert("Đã hết phiên đăng nhập, vui lòng đăng nhập lại");
					// 	history.push("/login");
					// }, TIME_EXP);
					history.push("/dashboard");
					// history.replace("/dashboard");
				} else {
					setErrData("Quyền truy cập không hợp lệ!");
				}
			})
			.catch((err) => {
				setErrData(err.response.data);
			});
	};

	if (localStorage.getItem("UserAdmin")) return <Redirect to="/dashboard" />;

	return (
		<section className="login">
			{/* <div className="container"> */}
			<div className="row login__content">
				<div className="col-md-12 mx-auto">
					<h3>Account Login</h3>
					<form onSubmit={handleLogin}>
						{renderNoti()}
						<div className="form-group">
							<input
								placeholder="username"
								type="text"
								className="form-control"
								name="taiKhoan"
								value={loginInfo.taiKhoan}
								onChange={(e) => {
									setLoginInfo({ ...loginInfo, taiKhoan: e.target.value });
								}}
							/>
						</div>
						<div className="form-group">
							<input
								placeholder="password"
								type="password"
								className="form-control"
								name="matKhau"
								value={loginInfo.matKhau}
								onChange={(e) => {
									setLoginInfo({ ...loginInfo, matKhau: e.target.value });
								}}
							/>
						</div>
						<button type="submit" className="btn">
							Login
						</button>
					</form>
				</div>
			</div>
			{/* </div> */}
		</section>
	);
}
