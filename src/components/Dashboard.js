import { useState, useEffect } from "react";
import Theme from "./Theme";

async function getData(url) {
	try {
		const data = await fetch(`${url}`);
		const toJSON = await data.json();
		return toJSON;
	} catch (error) {
		console.log(error);
	}
}

export default function Dashboard() {
	const [data, setData] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [summary, setSummary] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			// Fetch data when the component mounts
			getData("https://now14.co.il/wp-json/dashboard/v1/most_views").then(
				(result) => setData(result)
			);

			getData("https://now14.co.il/wp-json/dashboard/v1/summary").then(
				(result) => setSummary(result)
			);
		};
		getData("https://now14.co.il/wp-json/dashboard/v1/authors").then(
			(result) => setAuthors(result)
		);
		// Fetch data immediately when the component mounts
		setTimeout(() => {
			fetchData();
		}, 1000);
		// Set up an interval to fetch data every 5 seconds
	}, [summary]);

	// Move console.log statements here to log the data after it's fetched

	return <Theme dataAuthors={data} authors={authors} summary={summary} />;
}
