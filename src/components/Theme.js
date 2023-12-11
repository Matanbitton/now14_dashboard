import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Summary from "./CurrentViews";
import Orders from "./Orders";
import Clock from "./Clock";
import MostPublished from "./MostPublished";
import MostPublishedPerson from "./MostPublishedPerson";
import ProgressBar from "./ProgressBar";
import eyeIcon from "../Images/now14logo.svg";
import Comments from "./Comments";
import MostPublishedPersonMonth from "./MostPublishedPersonMonth";
import MostPublishedPersonWeek from "./MostPublishedPersonWeek";

function Copyright(props) {
  return (
    <Typography variant="body2" color="#141533" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://now14.co.il/">
        עכשיו 14
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Theme({
  dataAuthors,
  authors,
  summary,
  authorsDataSummary,
  comments,
  mostActiveAuthors,
}) {
  console.log(authorsDataSummary);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#141533]  w-screen flex justify-center">
      <div className=" w-[90%]">
        {/* <Drawer variant="permanent" open={open}>
					<Toolbar
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-end",
							px: [1],
							marginTop: "30px",
						}}
					>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeftIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					<List component="nav">
						{mainListItems}
						<Divider sx={{ my: 1 }} />
						{secondaryListItems}
					</List>
				</Drawer> */}
        <div className=" w-full flex-col justify-center items-center ">
          <div className="flex w-full justify-between items-center flex-row-reverse ">
            <div className="flex justify-center items-center flex-row-reverse gap-5 pb-2">
              <h2 className="text-white text-6xl font-black mt-4  font-Heebo ">
                הכתבים של{" "}
              </h2>
              <img src={eyeIcon}></img>
            </div>
            <div className=" text-white text-4xl font-sans font-black mt-4 ">
              <Clock />
            </div>
          </div>

          <div className="relative ">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.4fr 0.4fr 0.8fr",
                gridTemplateRows: "0.1fr 207px 138px 0.5fr 1fr",
                columnGap: "10px",
                rowGap: "10px",
              }}
            >
              {/* <Grid item xs={6} md={6} lg={6} order={4}> */}

              {/* </Grid> */}
              <div
                style={{
                  display: "grid",
                  gridArea: "1 / 1 / 2 / 3",
                }}
              >
                <Paper
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.18)",
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "7px",
                  }}
                >
                  <ProgressBar summary={summary} />
                </Paper>
              </div>
              <div
                style={{
                  gridArea: "1 / 3 / 3 / 4",
                }}
              >
                <Paper
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.18)",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "auto",
                    borderRadius: "7px",
                  }}
                >
                  <Orders dataAuthors={dataAuthors} authors={authors} />
                </Paper>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  gridArea: "2 / 2 / 3 / 3",
                }}
              >
                <div>
                  <Paper
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.18)",

                      p: 1,
                      display: "flex",
                      flexDirection: "column",
                      height: "207px",
                      borderRadius: "7px",
                    }}
                  >
                    <Summary summary={summary} />
                  </Paper>
                </div>

                <div>
                  <Paper
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.18)",
                      p: 1,
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "7px",
                    }}
                  >
                    <MostPublished
                      authorsData={authorsDataSummary}
                      authors={authors}
                    />
                  </Paper>
                </div>
              </div>
              <div style={{ gridArea: "4 / 1 / 4 / 2 " }}>
                <div>
                  <Paper
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.18)",

                      p: 1,
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "7px",
                    }}
                  >
                    <Comments comments={comments} authors={authors} />
                  </Paper>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  gridArea: "2 / 1 / 2 / 2",
                }}
              >
                <div className="w-full">
                  <Paper
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.18)",
                      p: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "7px",
                      height: "207px",
                    }}
                  >
                    <MostPublishedPerson
                      authorsData={authorsDataSummary}
                      authors={authors}
                    />
                  </Paper>
                </div>
              </div>
              <div
                className="w-full"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  gridArea: "3 / 1 / 3 / 2",
                }}
              >
                <div className="w-full">
                  <Paper
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.18)",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "7px",
                      height: " 138px",
                    }}
                  >
                    <MostPublishedPersonMonth
                      mostActiveAuthors={mostActiveAuthors}
                      authors={authors}
                    />
                  </Paper>
                </div>
                <div className="w-full">
                  <Paper
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.18)",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "7px",
                      height: " 138px",
                    }}
                  >
                    <MostPublishedPersonWeek
                      mostActiveAuthors={mostActiveAuthors}
                      authors={authors}
                    />
                  </Paper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
