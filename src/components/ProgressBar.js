import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Title from "./Title";

export default function ProgressBar({ summary, style }) {
  summary.target = 120;
  const [currentCount, goal] = [summary.articles || 1, summary.target || 1];
  const percentage = (currentCount / goal) * 100;

  if (style == "target") {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>היעד שלנו להיום!</h1>
        <p></p>
        <p>הושג </p>
        <p>{currentCount}</p>
        <p>מתוך </p>
        <p>{goal}</p>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={percentage}
              sx={{
                height: "10px",
              }}
            />
          </Box>

          <Box sx={{ minWidth: 35 }}>{`${Math.round(percentage)}%`}</Box>
        </Box>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div className="flex flex-row-reverse justify-evenly items-center">
          <h1 className="text-2xl text-white font-bold">!היעד שלנו להיום</h1>
          <div className="flex gap-2 flex-row-reverse">
            <p className=" text-xl text-white">פורסמו</p>
            <p className="text-xl text-[#FBBF00]">{currentCount}</p>
            <p className=" text-xl text-white">מתוך</p>
            <p className=" text-xl text-[#E30613]">{goal}</p>
            <p className=" text-xl text-white">כתבות</p>
          </div>
        </div>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "100%",
              mr: 1,
            }}
          >
            <LinearProgress
              variant="determinate"
              value={percentage}
              sx={{
                height: "10px",
                backgroundColor: "rgba(217, 217, 217, 0.30)", // Set the background color
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#E70333;", // Set the progress bar color
                },
              }}
            />
          </Box>
        </Box>
      </div>
    );
  }
}
