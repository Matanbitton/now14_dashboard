import React from "react";
import "./Comments.css";

export default function Comments({ comments, authors }) {
  const arrayFromData = comments.sort((a, b) => b.comments - a.comments);
  const displayData = arrayFromData.slice(0, 7);

  return (
    <div className="h-full comments-container">
      <div className="flex flex-row-reverse gap-1 mb-2 p-2 ">
        <h2 className="text-2xl text-white font-black">תגובות רבותי</h2>
        <h2 className="text-[#FBBF00] text-2xl font-black">!תגובות</h2>
      </div>

      <div
        className="comments-container text-white text-xs w-full"
        style={{
          // Adjust padding as needed
          borderRadius: "10px", // Add rounded corners to mimic the table appearance
        }}
      >
        <div
          className="rounded-md text-sm font-black h-8 flex flex-col  justify-evenly w-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.18)" }}
        >
          <div className="mb-2 rounded-xl flex h-4">
            <div className="text-xl comments-header-cell flex-1">תגובות</div>
            <div className="text-xl comments-header-cell flex-1">כותרת</div>
            <div className=" text-xl comments-header-cell flex-1">כתב</div>
          </div>
        </div>

        <div className="comments-table flex flex-col gap-1">
          {displayData.slice(0, 11).map((row, index) => (
            <div
              className={index === 0 ? "first-row-comments" : ""}
              key={row.id}
              style={
                {
                  // Adjust margin as needed
                  // Add rounded corners to mimic the table row appearance
                }
              }
            >
              <div>
                <p className="text-base">{row.comments}</p>
              </div>
              <div
                className="text-base font-thin"
                style={{ textAlign: "right" }}
              >
                {row.title}
              </div>
              <div className="text-base " style={{ textAlign: "right" }}>
                {authors.map((author) =>
                  row.author_id == author.id ? author.display_name : ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
