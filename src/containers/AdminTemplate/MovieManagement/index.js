import React, { useState, useEffect } from "react";
import MovieCard from "./../../../components/MovieCard";
import NavPage from "./../../../components/NavPages";
import api from "./../../../api";
import SearchBox from "../../../components/SearchBox";
import DateSearchInput from "./../../../components/DateSearchInput";

const fetchAllMovieUrl = "/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01";
const fetchDateSearchUrl = "/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01";
let additionDateSearchUrl = "";

let allMovie = [];

export default function MovieManagement() {
	const [movieList, setMovieList] = useState({});
	const [searchList, setSearchList] = useState([]);
	const [dateSearch, setDateSearch] = useState({ isUsing: false });

	const renderMovieList = () => {
		const { items } = movieList;
		if (items && items.length > 0) {
			return items.map((item) => {
				return (
					<div key={item.maPhim} className="col-sm-3">
						<MovieCard movie={item} />
					</div>
				);
			});
		}
	};

	const handleDateSearch = (data) => {
		const setTuKhoa = data.tuKhoa !== "" ? `&tenPhim=${data.tuKhoa}` : "";
		additionDateSearchUrl = `${setTuKhoa}&tuNgay=${data.tuNgay}&denNgay=${data.denNgay}`;
		api
			.get(
				`${fetchDateSearchUrl}&soTrang=1&soPhanTuTrenTrang=10000000${additionDateSearchUrl}`
			)
			.then((res) => {
				const DateSearchNavPage = {
					count: 8,
					totalCount: res.data.length,
					currentPage: 1,
					totalPages: Math.floor(res.data.length / 8) + 1,
				};
				api
					.get(
						`${fetchDateSearchUrl}&soTrang=1&soPhanTuTrenTrang=8${setTuKhoa}&tuNgay=${data.tuNgay}&denNgay=${data.denNgay}`
					)
					.then((res) => {
						setMovieList({
							items: [...res.data],
							...DateSearchNavPage,
							url: fetchDateSearchUrl,
						});
					})
					.catch((err) => {
						console.log(err.response.data);
					});
			})
			.catch((err) => console.log(err.response.data));
	};

	const cancelDateSearch = () => {
		setDateSearch({ ...dateSearch, isUsing: false });
		api
			.get(`${fetchAllMovieUrl}&soPhanTuTrenTrang=8&soTrang=1`)
			.then((res) => {
				setMovieList({ ...res.data, url: fetchAllMovieUrl });
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	};

	const handleSearch = (e) => {
		if (e.target.value === "") {
			setSearchList([]);
		} else {
			console.log("keyword", e.target.value);
			console.log("searchList", allMovie);
			const filteredList = [...allMovie].filter((item) =>
				item.tenPhim.toLowerCase().includes(e.target.value)
			);
			setSearchList(filteredList);
		}
	};

	const handleChangePage = (currentPage) => {
		const changePageUrl =
			movieList.url === fetchAllMovieUrl
				? `${movieList.url}&soPhanTuTrenTrang=8&soTrang=${currentPage}`
				: `${movieList.url}&soPhanTuTrenTrang=8&soTrang=${currentPage}${additionDateSearchUrl}`;
		console.log(changePageUrl);

		if (movieList.url === fetchAllMovieUrl) {
			api
				.get(changePageUrl)
				.then((result) => {
					console.log(result.data);
					setMovieList({ ...result.data, url: movieList.url });
				})
				.catch((err) => console.log(err));
		} else {
			api
				.get(changePageUrl)
				.then((result) => {
					console.log(result.data);
					setMovieList({
						...movieList,
						currentPage,
						items: [...result.data],
						url: movieList.url,
					});
				})
				.catch((err) => console.log(err));
		}
	};

	useEffect(() => {
		api
			.get(`${fetchAllMovieUrl}&soPhanTuTrenTrang=8&soTrang=1`)
			.then((res) => {
				setMovieList({ ...res.data, url: fetchAllMovieUrl });
			})
			.catch((err) => {
				console.log(err.response.data);
			});
		api
			.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
			.then((res) => {
				allMovie = res.data;
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	}, []);

	useEffect(() => {
		console.log(movieList);
	}, [movieList]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<h1>Movie List</h1>
				</div>
				<div className="col-sm-8">
					<form
						className="movie-form"
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						{!dateSearch.isUsing && (
							<input
								id="search"
								type="search"
								name="search"
								autoComplete="off"
								placeholder="Search..."
								onChange={(e) => handleSearch(e)}
							/>
						)}

						<button
							type="button"
							className="btn btn-warning"
							onClick={() => {
								setDateSearch({ ...dateSearch, isUsing: true });
							}}
						>
							Search theo ngày tháng
						</button>
						{searchList.length > 0 && <SearchBox searchList={searchList} />}
						{dateSearch.isUsing && (
							<DateSearchInput
								cancelDateSearch={cancelDateSearch}
								handleDateSearch={handleDateSearch}
							/>
						)}
					</form>
				</div>
			</div>
			<div className="row">
				{movieList.items && movieList.items.length > 0 ? (
					renderMovieList()
				) : (
					<div>danh sách phim rỗng</div>
				)}
			</div>

			<div className="row">
				<div className="col-sm-12">
					<NavPage
						currentPage={movieList.currentPage}
						totalPages={movieList.totalPages}
						count={movieList.count}
						totalCount={movieList.totalCount}
						handleChangePage={handleChangePage}
					/>
				</div>
			</div>
		</div>
	);
}
