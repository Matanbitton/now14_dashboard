import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, author, articleCount) {
	return { id, author, articleCount };
}

const rows = [createData(0, "איציק", "16"), createData(0, "מילן", "14")];

function preventDefault(event) {
	event.preventDefault();
}

export default function MostPublished() {
	return (
		<React.Fragment>
			<Title
				align="right"
				sx={{ fontWeight: "bold", justifySelf: "right" }}
			>
				מי פרסם הכי הרבה?
			</Title>
			<Table size="medium">
				<TableHead>
					<TableRow sx={{ backgroundColor: "#f1f8ff" }}>
						<TableCell sx={{ fontWeight: "bold" }} align="right">
							כמות כתבות
						</TableCell>
						<TableCell sx={{ fontWeight: "bold" }} align="right">
							כתב.ת
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell align="right">
								{row.articleCount}
							</TableCell>
							<TableCell align="right">{row.author}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
}
