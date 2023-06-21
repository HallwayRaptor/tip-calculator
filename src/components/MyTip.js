export default function MyTip({ onTipPercent }) {
	const handleTipChange = (e) => {
		const serviceQuality = e.target.value;

		let tipPercent;

		switch (serviceQuality) {
			case "bad":
				tipPercent = 0.05;
				break;
			case "good":
				tipPercent = 0.1;
				break;
			case "great":
				tipPercent = 0.15;
				break;
			default:
				tipPercent = 0.1;
		}
		onTipPercent(tipPercent);
	};

	return (
		<div>
			<span>How was the service?</span>
			<select name="" defaultValue="good" onChange={handleTipChange}>
				<option value="bad">Bad</option>
				<option value="good">Good</option>
				<option value="great">Great</option>
			</select>
		</div>
	);
}
