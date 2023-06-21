import Bill from "./components/Bill";
import FriendTip from "./components/FriendTip";
import MyTip from "./components/MyTip";
import "./index.css";
import { useState } from "react";

function App() {
	const [billAmount, setBillAmount] = useState(0);
	const [tipPercent, setTipPercent] = useState(0.1);

	return (
		<div>
			<Bill onBillAmount={setBillAmount} />
			<MyTip onTipPercent={setTipPercent} />
			<TipDisplay billAmount={billAmount} tipPercent={tipPercent} />
			{/* <FriendTip /> */}
		</div>
	);
}

function TipDisplay({ billAmount, tipPercent }) {
	let tipAmount = billAmount * tipPercent;
	tipAmount = Math.round(tipAmount / 0.5) * 0.5;
	return <span>You should tip {tipAmount} $</span>;
}

export default App;
