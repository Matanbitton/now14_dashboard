import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

export default function MostPublished({ authorsData, authors }) {
	console.log(authorsData);
	const arrayFromData = authorsData.sort(
		(a, b) => b.articles_sum - a.articles_sum
	);
	const displayData = arrayFromData.slice(0, 3);

	return (
		<React.Fragment>
			<Title
				align="right"
				sx={{ fontWeight: "bold", justifySelf: "right" }}
			>
				?מי פרסם הכי הרבה
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
					{displayData.map((row) => (
						<TableRow key={row.id}>
							<TableCell align="right">
								{row.articles_sum}
							</TableCell>
							<TableCell align="right">
								{authors.map((author) =>
									row.author_id == author.id
										? author.display_name
										: ""
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</React.Fragment>
	);
}
