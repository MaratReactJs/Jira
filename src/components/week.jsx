import React from "react";
import Day from "./day";

const Week = () => {
	let week = [];
	let today = new Date();
	function getStartDay(d) {
		d = new Date(d);
		let day = d.getDay();
		let dayNumber = d.getDate() + (day ? -day : 0);
		return new Date(d.setDate(dayNumber));
	}

	let startDay = new Date(
		new Date(getStartDay(today).setDate(getStartDay(today).getDate() - 1))
	);
	for (let i = 0; i < 7; i++) {
		let newDate = new Date(startDay.setDate(startDay.getDate() + 1));
		week.push(newDate);
	}

	return (
		<div className=" w-screen px-5 flex justify-between ]">
			{week.map((d, i) => (
				<Day date={d} key={i} id={Math.random} />
			))}
		</div>
	);
};

export default Week;
