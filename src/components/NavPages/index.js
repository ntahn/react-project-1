import React from "react";

export default function NavPage({
	totalPages,
	handleChangePage,
	currentPage,
	totalCount,
	count,
}) {
	if (totalPages * count - totalCount === count) {
		totalPages -= 1;
	}
	let row = [];
	const navRange = Math.floor(currentPage / 4);
	if (navRange < 1) {
		row = [];
		for (let i = 1; i <= 3; i++) {
			if (i === currentPage) {
				row.push(
					<button
						key={i}
						className="btn btn-success"
						onClick={() => handleChangePage(i)}
					>
						{i}
					</button>
				);
			} else {
				if (i <= totalPages) {
					row.push(
						<button key={i} onClick={() => handleChangePage(i)}>
							{i}
						</button>
					);
				}
			}
		}
		if (currentPage + 1 <= totalPages) {
			row.push(
				<button key={-2} onClick={() => handleChangePage(currentPage + 1)}>
					&#62;
				</button>
			);
		}
		row.push(
			<button key={-1} onClick={() => handleChangePage(totalPages)}>
				&#187;
			</button>
		);
	} else {
		row = [];
		row.push(
			<button key={-4} onClick={() => handleChangePage(1)}>
				&#171;
			</button>
		);
		row.push(
			<button key={-3} onClick={() => handleChangePage(currentPage - 1)}>
				&#60;
			</button>
		);
		for (let i = navRange * 4; i < (navRange + 1) * 4; i++) {
			if (i <= totalPages) {
				if (i === currentPage) {
					row.push(
						<button
							key={i}
							className="btn btn-success"
							onClick={() => handleChangePage(i)}
						>
							{i}
						</button>
					);
				} else {
					row.push(
						<button key={i} onClick={() => handleChangePage(i)}>
							{i}
						</button>
					);
				}
			}
		}
		if (totalPages > (navRange + 1) * 4) {
			row.push(
				<button key={-2} onClick={() => handleChangePage(currentPage + 1)}>
					&#62;
				</button>
			);
			row.push(
				<button key={-1} onClick={() => handleChangePage(totalPages)}>
					&#187;
				</button>
			);
		}
	}
	return <div>{row}</div>;
}
