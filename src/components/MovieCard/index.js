import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

export default function MovieCard({ movie }) {
	return (
		<div className="card movieCard">
			<img className="card-img-top" src={movie.hinhAnh} alt="" />
			<div className="card-body">
				<h5 className="card-title">{movie.tenPhim}</h5>
				<p>
					ngày khởi chiếu:{" "}
					{Moment(new Date(movie.ngayKhoiChieu).toLocaleDateString()).format(
						"DD/MM/YYYY"
					)}
				</p>
				<Link
					className="btn btn-success"
					to={`/dashboard/movie/${movie.maPhim}`}
				>
					Detail
				</Link>
			</div>
		</div>
	);
}
