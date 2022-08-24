import React, { useState } from "react";
import Day from "./day";
import ModalLog from "./modalLog";
import { selectData } from "../redux/dataSlice";
import { useSelector } from "react-redux";

const Week = () => {
	const [showModal, setShowModal] = useState(false);
	let week = [];
	let today = new Date();
	function getStartDay(d) {
		d = new Date(d);
		let day = d.getDay();
		let dayNumber = d.getDate() + (day ? -day : 0);
		return new Date(d.setDate(dayNumber));
	}
	const { data } = useSelector(selectData);
	//console.log(data.date, "data");

	let startDay = new Date(
		new Date(getStartDay(today).setDate(getStartDay(today).getDate() - 1))
	);
	for (let i = 0; i < 7; i++) {
		let newDate = new Date(startDay.setDate(startDay.getDate() + 1));
		week.push(newDate);
	}

	return (
		<>
			{" "}
			<div className={" w-[90vw] mx-auto h-[80vh]  flex mt-20  "}>
				{week.map((d, i) => (
					<Day date={d} key={i} setShowModal={setShowModal} data={data} />
				))}
			</div>
			{showModal && <ModalLog setShowModal={setShowModal} />}
		</>
	);
};

export default Week;
