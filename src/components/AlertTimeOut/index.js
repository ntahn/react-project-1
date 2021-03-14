import React from "react";
import { useHistory } from "react-router-dom";

export default function AlertTimeOut() {
	const history = useHistory();
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-6 mx-auto my-4">
					<h3>Phiên đăng nhập của bạn đã hết hạn, vui lòng đăng nhập lại!</h3>
					<button
						type="button"
						className="btn btn-warning mt-4"
						onClick={() => {
							history.push("/login");
						}}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}
