import { useState, useEffect } from "react";
import Theme from "./Theme";

export default function Dashboard() {
	const [data, setData] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [summary, setSummary] = useState([]);
	const [authorsDataSummary, setAuthorsData] = useState([]);

	useEffect(() => {
		async function getData(url) {
			try {
				const response = await fetch(url);
				if (response.ok) {
					const data = await response.json();
					return data;
				} else {
					throw new Error(`Failed to fetch data from ${url}`);
				}
			} catch (error) {
				console.error(error);
			}
		}

		const fetchData = async () => {
			try {
				const data = await getData(
					"https://now14.co.il/wp-json/dashboard/v1/most_views"
				);
				setData(data);

				const authorsData = await getData(
					"https://now14.co.il/wp-json/dashboard/v1/authors"
				);
				setAuthors(authorsData);

				const summaryData = await getData(
					"https://now14.co.il/wp-json/dashboard/v1/summary"
				);
				setSummary(summaryData);
				const authorsSummaryData = await getData(
					"https://now14.co.il/wp-json/dashboard/v1/summary/authors"
				);
				setAuthorsData(authorsSummaryData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();

		const intervalId = setInterval(fetchData, 15000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<Theme
			dataAuthors={data}
			authors={authors}
			summary={summary}
			authorsDataSummary={authorsDataSummary}
		/>
	);
}
