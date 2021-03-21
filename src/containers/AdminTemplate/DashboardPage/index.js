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
	const [isLoading, setIsLoading] = useState(false);
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
		if (keyword !== "") {
			setIsLoading(true);
			api
				.get(`${searchUrl}&tuKhoa=${keyword}&soTrang=1`)
				.then((result) => {
					setIsLoading(false);
					setUserListState({
						...result.data,
						url: `${searchUrl}&tuKhoa=${keyword}`,
					});
					// setUrl(`${searchUrl}&tuKhoa=${keyword}`);
				})
				.catch((err) => console.log(err));
		} else {
			alert("vui lòng nhập từ khóa tìm kiếm!");
		}
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
		setIsLoading(true);
		api
			.post("/QuanLyNguoiDung/ThemNguoiDung", {
				...user,
				maNhom: "GP01",
			})
			.then((result) => {
				alert("them thanh cong");
				setAddUser({ ...addUser, isUsing: false });
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
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
					alert("update thành công!");
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
				setIsLoading(true);
				api
					.get(`${userListState.url}&soTrang=${userListState.currentPage}`)
					.then((result) => {
						setIsLoading(false);
						setUserListState({ ...result.data, url: userListState.url });
					})
					.catch((err) => console.log(err.response.data));
			})
			.catch((err) => {
				alert(err.response.data);
				// console.log(err);
			});
	};

	const handleClearSearch = () => {
		document.getElementById("search").value = "";
		setUserListState(frontPageState);
		setKeyword("");
	};

	const handleChangePage = (count) => {
		setIsLoading(true);
		api
			.get(`${userListState.url}&soTrang=${count}`)
			.then((result) => {
				setIsLoading(false);
				setUserListState({ ...result.data, url: userListState.url });
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		setIsLoading(true);
		api
			.get(`${userListState.url}&soTrang=1`)
			.then((result) => {
				frontPageState = { ...result.data, url: initialUrl };
				setUserListState({ ...result.data, url: initialUrl });
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	const renderUserList = () => {
		if (isLoading) {
			return (
				<div className="lds-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			);
		}
		const { items } = userListState;
		if (items && items.length > 0) {
			return items.map((user, index) => {
				return (
					<tr key={index} className={index % 2 !== 0 ? "odd" : null}>
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
								<td className="text-center">
									<button
										style={{
											backgroundColor: "#e6c0a1",
											borderColor: "#e6c0a1",
										}}
										onClick={() => {
											updateUserInfo();
										}}
										className="btn btn-warning"
									>
										Save
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
								<td className="text-center">
									<button
										style={{
											backgroundColor: "#a1afe6",
											borderColor: "#a1afe6",
										}}
										onClick={() => handleEdit(user, index)}
										className="btn btn-info"
									>
										Edit
									</button>
								</td>
							</>
						)}

						<td className="text-center">
							<button
								style={{ backgroundColor: "#ff5c5f", borderColor: "#ff5c5f" }}
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

	return (
		<div className="modal-wrap">
			<div className="container userList">
				<div className="userList-header">
					<h1>Danh Sách Người Dùng</h1>
					<form onSubmit={handleSubmitSearch} className="form">
						<div className="search-bar">
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
							<div
								className="search-bar-close"
								onClick={() => handleClearSearch()}
							>
								+
							</div>
							<button type="submit" className="btn search-button">
								Search
							</button>
						</div>
					</form>
					<button
						className="btn add-btn"
						type="button"
						onClick={() => setAddUser({ ...addUser, isUsing: true })}
					>
						Thêm người dùng
					</button>
				</div>

				{/* <div className="row">
					<div className="col-sm-12">
						<form onSubmit={handleSubmitSearch} className="form">
							<div className="search-bar">
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
								<div
									className="search-bar-close"
									onClick={() => handleClearSearch()}
								>
									+
								</div>
								<button type="submit" className="btn search-button">
									Search
								</button>
							</div>
						</form>
					</div>
				</div> */}

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
									<th></th>
									<th></th>
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
			<AddNewUser
				isUsing={addUser.isUsing}
				handleSubmitAdd={handleSubmitAdd}
				cancelAdd={cancelAdd}
			/>
		</div>
	);
}
