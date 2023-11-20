import * as React from "react";
import now14Circle from "../Images/now14Circle.png";

export default function MostPublished({ authorsData, authors }) {
	const arrayFromData = authorsData.sort(
		(a, b) => b.articles_sum - a.articles_sum
	);
	const displayData = arrayFromData;

	return (
		<React.Fragment>
			<h2 className="text-2xl text-white font-black ">
				?כמה פרסמנו היום
			</h2>

			<div className="">
				<div className="relative overflow-hidden w-[50px] mb-3"></div>

				<div className="flex flex-col gap-6 items-center ">
					{displayData.map((row) => (
						<div
							className="flex gap-5 w-[80%] justify-between text-lg rounded-md px-2"
							style={{
								backgroundColor: "rgba(255, 255, 255, 0.18)",
							}}
							key={row.id}
						>
							<div className="flex justify-center relative">
								<p className="text-white">
									{row.articles_sum} | פרסם
								</p>
							</div>

							<div className="data-cell relative">
								<div className="flex justify-center absolute right-[-20px] top-[-20px] z-[0] ">
									<img
										className="flex justify-center rounded-full w-[35px]  items-center border-[2px solid #C4C4C4]
                    bg-[#24265A] 
                    shadow-[0px 2px 4px 0px rgba(0, 0, 0, 0.25)]
"
										src={now14Circle}
									></img>
								</div>
								<p className="text-white z-10 pr-5">
									{authors.map((author) =>
										row.author_id == author.id
											? author.display_name
											: ""
									)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</React.Fragment>
	);
}
