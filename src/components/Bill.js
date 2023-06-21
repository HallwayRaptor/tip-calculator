export default function Bill({ onBillAmount }) {
	const handleInputChange = (e) => {
		onBillAmount(e.target.value);
	};

	return (
		<div>
			<span>How much was the bill? </span>
			<input
				type="number"
				name="billInput"
				id="billInput"
				onChange={handleInputChange}
			/>
		</div>
	);
}
