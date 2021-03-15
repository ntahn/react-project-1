import React from "react";
import { useState, useEffect } from "react";
import NavPage from "../../../components/NavPages";
import api from "./../../../api";
import AddNewUser from "./../../../components/AddNewUser";

const initialUrl = `/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soPhanTuTrenTrang=8`;
const searchUrl = `/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&soPhanTuTrenTrang=8`;
let frontPageState = {};

const initialState = {
	count: 0,
	currentPage: 0,
	totalPages: 0,
	totalCount: 0,
	items: [],
	url: initialUrl,
};

const initialUser = {
	taiKhoan: "",
	matKhau: "",
	hoTen: "",
	email: "",
	soDt: "",
	maLoaiNguoiDung: "",
	// key: 0,
};

let holdEditUser = {};

export default function DashBoardPage() {
	// let history = useHistory();

	const [userListState, setUserListState] = useState(initialState);
	const [keyword, setKeyword] = useState("");
	const [addUser, setAddUser] = useState({ ...initialUser, isUsing: false });
	const [editUser, setEditUser] = useState({
		...initialUser,
		isUsing: false,
		key: "",
	});
	// const [url, setUrl] = useState(initialUrl);

	const handleSubmitSearch = (e) => {
		e.preventDefault();
		api
			.get(`${searchUrl}&tuKhoa=${keyword}&soTrang=1`)
			.then((result) => {
				setUserListState({
					...result.data,
					url: `${searchUrl}&tuKhoa=${keyword}`,
				});
				// setUrl(`${searchUrl}&tuKhoa=${keyword}`);
			})
			.catch((err) => console.log(err));
	};

	const handleEditOnChange = (e) => {
		setEditUser({
			...editUser,
			[e.target.name]: e.target.value,
		});
	};

	const cancelAdd = () => {
		setAddUser({ ...addUser, isUsing: false });
	};

	const handleSubmitAdd = (user) => {
		api
			.post("/QuanLyNguoiDung/ThemNguoiDung", {
				...user,
				maNhom: "GP01",
			})
			.then((result) => {
				alert("them thanh cong");
				setAddUser({ ...addUser, isUsing: false });
			})
			.catch((err) => {
				alert(err.response.data);
			});
	};

	const handleEdit = (user, index) => {
		holdEditUser = { ...user, isUsing: true, key: index };
		setEditUser({ ...user, isUsing: true, key: index });
	};

	const updateUserInfo = () => {
		// console.log("holdEditUser", holdEditUser);
		// console.log("editUser", editUser);
		// console.log(
		// 	Object.entries(holdEditUser).toString() ===
		// 		Object.entries(editUser).toString()
		// );
		if (
			Object.entries(holdEditUser).toString() ===
			Object.entries(editUser).toString()
		) {
			setEditUser({ ...editUser, isUsing: false });
		} else {
			const subtractKeyProperty = ({
				taiKhoan,
				matKhau,
				email,
				hoTen,
				soDt,
				maLoaiNguoiDung,
			}) => ({
				taiKhoan,
				matKhau,
				email,
				hoTen,
				soDt,
				maLoaiNguoiDung,
				maNhom: "GP01",
			});
			const updateUserData = subtractKeyProperty({ ...editUser });
			api
				.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", updateUserData)
				.then((result) => {
					alert("them thanh cong");
					setEditUser({ ...editUser, isUsing: false });
					api
						.get(`${userListState.url}&soTrang=${userListState.currentPage}`)
						.then((result) => {
							setUserListState({ ...result.data, url: userListState.url });
						})
						.catch((err) => console.log(err.response.data));
				})
				.catch((err) => {
					alert(err.response.data);
				});
		}
	};

	const handleDeleteAcc = (user) => {
		api
			.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`)
			.then((res) => {
				alert(res.data);
				api
					.get(`${userListState.url}&soTrang=${userListState.currentPage}`)
					.then((result) => {
						setUserListState({ ...result.data, url: userListState.url });
					})
					.catch((err) => console.log(err.response.data));
			})
			.catch((err) => {
				// alert(err.response.data);
				console.log(err);
			});
	};

	const handleClearSearch = () => {
		document.getElementById("search").value = "";
		setUserListState(frontPageState);
		setKeyword("");
	};

	const handleChangePage = (count) => {
		api
			.get(`${userListState.url}&soTrang=${count}`)
			.then((result) => {
				setUserListState({ ...result.data, url: userListState.url });
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		api
			.get(`${userListState.url}&soTrang=1`)
			.then((result) => {
				frontPageState = { ...result.data, url: initialUrl };
				setUserListState({ ...result.data, url: initialUrl });
			})
			.catch((err) => console.log(err));
	}, []);

	const renderUserList = () => {
		const { items } = userListState;
		if (items && items.length > 0) {
			return items.map((user, index) => {
				return (
					<tr key={index}>
						{editUser.key === index && editUser.isUsing ? (
							<>
								<td>{user.taiKhoan}</td>
								<td>
									<input
										type="text"
										name="matKhau"
										value={editUser.matKhau}
										onChange={handleEditOnChange}
									/>
								</td>
								<td>
									<input
										type="text"
										name="hoTen"
										value={editUser.hoTen}
										onChange={handleEditOnChange}
									/>
								</td>
								<td>
									<input
										type="email"
										name="email"
										value={editUser.email}
										onChange={handleEditOnChange}
									/>
								</td>
								<td>
									<input
										type="text"
										name="soDt"
										value={editUser.soDt}
										onChange={handleEditOnChange}
									/>
								</td>
								<td>
									<input
										type="text"
										name="maLoaiNguoiDung"
										value={editUser.maLoaiNguoiDung}
										onChange={handleEditOnChange}
									/>
								</td>
								<td>
									<button
										onClick={() => {
											updateUserInfo();
										}}
										className="btn btn-warning"
									>
										Edit
									</button>
								</td>
							</>
						) : (
							<>
								<td>{user.taiKhoan}</td>
								<td>{user.matKhau}</td>
								<td>{user.hoTen}</td>
								<td>{user.email}</td>
								<td>{user.soDt}</td>
								<td>{user.maLoaiNguoiDung}</td>
								<td>
									<button
										onClick={() => handleEdit(user, index)}
										className="btn btn-info"
									>
										Edit
									</button>
								</td>
							</>
						)}

						<td>
							<button
								className="btn btn-danger"
								onClick={() => handleDeleteAcc(user)}
							>
								Delete
							</button>
						</td>
					</tr>
				);
			});
		}
	};

	// if (!localStorage.getItem("UserAdmin")) {
	// 	history.push("/login");
	// } else {
	// 	const exp = localStorage.getItem("exp");
	// 	const date = new Date().getTime();
	// 	// console.log("Exp", exp);
	// 	// console.log("date", date);
	// 	if (date > exp) {
	// 		localStorage.removeItem("UserAdmin");
	// 		localStorage.removeItem("exp");
	// 		//chuyen huong ve trang auth
	// 		alert("Đã hết phiên đăng nhập, vui lòng đăng nhập lại");
	// 		history.push("/login");
	// 	} else {
	// 		setTimeout(() => {
	// 			localStorage.removeItem("UserAdmin");
	// 			localStorage.removeItem("exp");
	// 			//chuyen huong ve trang auth
	// 			alert("Đã hết phiên đăng nhập, vui lòng đăng nhập lại");
	// 			history.push("/login");
	// 		}, exp - date);
	// 	}
	// }

	return (
		<div className="container userList">
			<h1>User List</h1>
			<div className="row">
				<div className="col-sm-12">
					<form onSubmit={handleSubmitSearch} className="form">
						<input
							id="search"
							type="text"
							value={keyword}
							name="search"
							placeholder="Search..."
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
						/>
						<button type="submit" className="btn btn-primary">
							Search
						</button>
						<button
							className="btn btn-danger"
							type="button"
							onClick={() => handleClearSearch()}
						>
							Clear
						</button>
						{!addUser.isUsing && (
							<button
								className="btn btn-success"
								type="button"
								onClick={() => setAddUser({ ...addUser, isUsing: true })}
							>
								Add
							</button>
						)}
					</form>
				</div>
			</div>
			{addUser.isUsing && (
				<AddNewUser handleSubmitAdd={handleSubmitAdd} cancelAdd={cancelAdd} />
			)}
			<div className="row">
				<div className="col-sm-12">
					<table className="table">
						<thead>
							<tr>
								<th>Tài Khoản</th>
								<th>Mật Khẩu</th>
								<th>Họ Tên</th>
								<th>Email</th>
								<th>Số Điện Thoại</th>
								<th>Loại Người Dùng</th>
							</tr>
						</thead>
						<tbody>{renderUserList()}</tbody>
					</table>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<NavPage
						currentPage={userListState.currentPage}
						totalPages={userListState.totalPages}
						count={userListState.count}
						totalCount={userListState.totalCount}
						handleChangePage={handleChangePage}
					/>
				</div>
			</div>
		</div>
	);
}
