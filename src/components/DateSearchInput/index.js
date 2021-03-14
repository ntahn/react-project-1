import React, { useState } from "react";
import Moment from "moment";

const initialState = {
	tuKhoa: "",
	tuNgay: "",
	denNgay: "",
};

export default function DateSearchInput({
	cancelDateSearch,
	handleDateSearch,
}) {
	const [dateInput, setDateInput] = useState({ ...initialState });

	const handleOnChange = (e) => {
		if (e.target.type === "date") {
			setDateInput({
				...dateInput,
				[e.target.name]: Moment(e.target.value).format("DD-MM-YYYY"),
			});
		} else {
			setDateInput({ ...dateInput, [e.target.name]: e.target.value });
		}
	};

	return (
		<div className="dateSearchPrompt">
			<div>
				<span>Từ Ngày: </span>
				<input name="tuNgay" type="date" onChange={handleOnChange} />
			</div>
			<div>
				<span>Tới Ngày: </span>
				<input name="denNgay" type="date" onChange={handleOnChange} />
			</div>
			<div>
				<span>Từ Khóa: </span>
				<input name="tuKhoa" type="text" onChange={handleOnChange} />
			</div>
			<button
				className="btn btn-primary"
				onClick={() => {
					handleDateSearch(dateInput);
				}}
			>
				Search
			</button>
			<button className="btn btn-danger" onClick={() => cancelDateSearch()}>
				Cancel
			</button>
		</div>
	);
}
