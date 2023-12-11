import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Image } from "@mui/icons-material";
import eyeIcon from "../Images/eyeIcon.svg";

function preventDefault(event) {
  event.preventDefault();
}

export default function Summary({ summary }) {
  const { views, articles, pushNotifications } = summary;
  const today = new Date();

  // Extract the date, month, and year from the Date object
  const day = today.getDate();
  const month = today.getMonth() + 1; // Month is 0-based, so add 1
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-7 ">
        <h2 className="text-[#00D3E0] font-sans font-black text-6xl">
          {views}
        </h2>
        <h2 className="font-bold text-white text-lg mb-[-15px]">
          {formattedDate}
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={eyeIcon} width={"117"}></img>
        <h1 className=" font-bold text-white text-2xl">צפיות</h1>
      </div>
    </div>
  );
}
