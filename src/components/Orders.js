import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, headline, numberOfViews) {
	return { id, date, name, headline, numberOfViews };
}

const rows = [
	createData(0, "2000000", "8", "עזה הושמדה ברוך השם", "איציק"),
	createData(0, "2000000", "8 שעות", "עזה הושמדה ברוך השם", "איציק"),
	createData(0, "2000000", "8 שעות", "עזה הושמדה ברוך השם", "איציק"),
	createData(0, "2000000", "8 שעות", "עזה הושמדה ברוך השם", "איציק"),
];

function preventDefault(event) {
	event.preventDefault();
}

export default function Orders() {
	return (
		<React.Fragment>
			<Title align="right" sx={{ fontWeight: "bold" }}>
				הכתבות הכי נצפות
			</Title>
			<Table size="medium">
				<TableHead>
					<TableRow sx={{ backgroundColor: "#f1f8ff" }}>
						<TableCell sx={{ fontWeight: "bold" }} align="right">
							צפיות
						</TableCell>
						<TableCell sx={{ fontWeight: "bold" }} align="right">
							לפני
						</TableCell>
						<TableCell sx={{ fontWeight: "bold" }} align="right">
							כותרת
						</TableCell>
						<TableCell sx={{ fontWeight: "bold" }} align="right">
							כתב.ת
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell align="right">{row.date}</TableCell>
							<TableCell align="right">{row.name}</TableCell>
							<TableCell align="right">{row.headline}</TableCell>
							<TableCell align="right">
								{row.numberOfViews}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
}
