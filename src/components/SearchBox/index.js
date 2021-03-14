import React from "react";
import { Link } from "react-router-dom";
export default function SearchBox({ searchList }) {
	const renderSearchBox = () => {
		if (searchList && searchList.length > 0) {
			return searchList.map((item) => {
				return (
					<p
						className="seachBoxItem"
						onClick={() => {
							console.log(item.maPhim);
						}}
						key={item.maPhim}
					>
						<Link to={`/dashboard/movie/${item.maPhim}`}>
							<span>{item.tenPhim}</span>
						</Link>
					</p>
				);
			});
		}
	};
	return <div className="searchBox">{renderSearchBox()}</div>;
}
