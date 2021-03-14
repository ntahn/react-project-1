import React from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import { Route, useHistory } from "react-router-dom";

function LayoutAdmin(props) {
	let history = useHistory();
	if (!localStorage.getItem("UserAdmin")) {
		history.push("/login");
	} else {
		const exp = localStorage.getItem("exp");
		const date = new Date().getTime();
		// console.log("Exp", exp);
		// console.log("date", date);
		if (date > exp) {
			localStorage.removeItem("UserAdmin");
			localStorage.removeItem("exp");
			//chuyen huong ve trang auth
			alert("Đã hết phiên đăng nhập, vui lòng đăng nhập lại");
			history.push("/login");
		} else {
			setTimeout(() => {
				localStorage.removeItem("UserAdmin");
				localStorage.removeItem("exp");
				//chuyen huong ve trang auth
				alert("Đã hết phiên đăng nhập, vui lòng đăng nhập lại");
				history.push("/login");
			}, exp - date);
		}
	}
	return (
		<div>
			<NavbarAdmin />
			{props.children}
		</div>
	);
}

export default function AdminTemplate({ Component, ...props }) {
	return (
		<Route
			{...props}
			render={(propsComponent) => (
				<LayoutAdmin>
					<Component {...propsComponent} />
				</LayoutAdmin>
			)}
		/>
	);
}
