import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Orders.css";

export default function Orders({ dataAuthors, authors }) {
  function getRandomColor() {
    const colorsArr = ["#E70333", "#00D3E0", "#EB01CA", "#8F06E3", "#00D6A2"];
    const randomIndex = Math.floor(Math.random() * colorsArr.length);
    const randomColor = colorsArr[randomIndex];

    return randomColor;
  }
  let color = "";
  return (
    <div className="h-auto">
      <h1 className="text-4xl font-bold text-white text-right grid col-start-1 pb-4 ">
        הכתבות הכי נצפות
      </h1>
      <Table size="small">
        <TableHead
          sx={{
            border: "none",
          }}
        >
          <TableRow
            className="h-2"
            sx={{
              border: "none",
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.18)",
              padding: "none",
            }}
          >
            <TableCell
              sx={{
                border: "none",
                height: "30px",
                fontWeight: "bold",
                color: "white",
                padding: "none",
                fontSize: "22px",
              }}
              align="right"
            >
              צפיות
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontWeight: "bold",
                color: "white",
                padding: "none",
                fontSize: "22px",
              }}
              align="right"
            >
              לפני
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontWeight: "bold",
                color: "white",
                padding: "none",
                fontSize: "22px",
              }}
              align="right"
            >
              כותרת
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                fontWeight: "bold",
                color: "white",
                fontSize: "22px",
              }}
              align="right"
            >
              כתב
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataAuthors.slice(0, 14).map(
            (row, index) => (
              index == 0 ? (color = "") : (color = "white"),
              (
                <TableRow
                  className={index == 0 ? "first-row" : "else"}
                  sx={{
                    color: "white",
                    padding: "none",
                    height: "auto",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  key={row.id}
                >
                  <TableCell
                    className={index == 0 ? "first-row-cell" : "else"}
                    sx={{
                      color: getRandomColor(),
                      fontWeight: "bold",
                      fontSize: "22px",
                      padding: "none",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      fontWeight: "700",
                    }}
                    align="right"
                  >
                    <p className="">{row.views}</p>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "18px",
                      padding: "none",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      fontWeight: "500",
                    }}
                    align="right"
                  >
                    {row.time_string}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "21px",
                      padding: "none",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      fontWeight: "200",
                    }}
                    align="right"
                  >
                    {row.title}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: "18px",
                      padding: "none",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      fontWeight: "700",
                    }}
                    align="right"
                  >
                    {authors.map((author) =>
                      row.author_id == author.id ? author.display_name : ""
                    )}
                  </TableCell>
                </TableRow>
              )
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}
