import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Mode } from "@mui/icons-material";

export default function Orders({ dataAuthors, authors }) {
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
					{dataAuthors.map((row) => (
						<TableRow key={row.id}>
							<TableCell align="right">{row.views}</TableCell>
							<TableCell align="right">
								{row.time_string}
							</TableCell>
							<TableCell align="right">{row.title}</TableCell>
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
