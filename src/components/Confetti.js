import React, { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";

export default () => {
	const [isExploding, setIsExploding] = React.useState(true);
	const [reloadCount, setReloadCount] = React.useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Update state or perform the action you want to repeat
			setReloadCount((prevCount) => prevCount + 1);
			setIsExploding((prev) => !prev);
		}, 2000); // Change the interval duration to 3000 milliseconds (3 seconds)

		// Clear the interval when the component is unmounted
		return () => clearInterval(intervalId);
	}, [reloadCount]);

	return (
		<div className="overflow-hidden absolute flex justify-center h-[100px] w-[100px]">
			<div>
				{isExploding && (
					<ConfettiExplosion height={800} width={420} force={0.2} />
				)}
			</div>
		</div>
	);
};
