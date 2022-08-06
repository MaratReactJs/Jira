import React, { useState } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Log from "./log";

const Day = ({ date }) => {
	const [arrLog, setArrLog] = useState([]);
	const [hidden, setHidden] = useState(false);
	const [arrItemLog, setArrItemLog] = useState();

	console.log(arrItemLog, "chek");
	const handleDropArr = (e, item) => {
		//console.log(item.id, "item");
		const upgradeItem = { ...item, date: date, id: Math.random() };
		setArrLog([...arrLog, upgradeItem]);
	};

	const handleDragOverArr = (e) => {
		e.preventDefault(e);
	};

	const getArrItemLog = (item) => {
		setArrItemLog(item);
	};

	const createLog = (date) => {
		setArrLog([...arrLog, { date, id: Math.random() }]);
	};

	const deleteLog = (id) => {
		setArrLog(arrLog.filter((log) => log.id !== id));
	};

	return (
		<div
			className={
				"w-[300px] border border-[#001537]-500 min-h-screen mt-[5px] " +
				(date.getDay() === new Date().getDay() ? "bg-[#f5f8fa]" : "")
			}>
			<div className="  flex justify-between  font-bold text-xs px-[3%] pt-[3%]">
				<Moment format="ddd DD.MM">{date}</Moment>
				<div className="hours">0h of 0h</div>
			</div>
			<div className="w-3/6 h-[2px]  bg-[#d6e2e9] mt-[3%] mx-[3%] " />

			<div
				className="w-[200px]  h-[3,5%]  mt-[3%]   text-center flex justify-around  rounded "
				onMouseOut={() => setHidden(false)}
				onMouseOver={() => setHidden(true)}>
				<div
					className={
						"w-[95%] bg-[#ebf1f4] h-[23px]  text-center " +
						(hidden ? "hidden " : "")
					}>
					<FontAwesomeIcon icon={faPlus} />
				</div>
				<button
					className={
						"w-[46%] bg-[#ebf1f4] h-[23px] font-bold text-xs text-center hover:bg-[#d6e2e9] " +
						(!hidden ? "hidden" : "")
					}
					onClick={() => createLog(date)}>
					Log Time
				</button>
				<button
					className={
						"w-[46%] bg-[#ebf1f4] h-[23px] font-bold text-xs text-center hover:bg-[#d6e2e9] " +
						(!hidden ? "hidden" : "")
					}>
					Plan Time
				</button>
			</div>
			<div
				className="w-[200px] h-screen border border-[black]-500"
				onDragOver={(e) => handleDragOverArr(e)}
				onDrop={(e) => handleDropArr(e, arrItemLog)}>
				{" "}
				{arrLog.map((d) => (
					<Log
						logItem={d}
						key={d.id}
						deleteLog={deleteLog}
						id={d.id}
						arrLog={arrLog}
						setArrLog={setArrLog}
						getArrItemLog={getArrItemLog}
					/>
				))}
			</div>
		</div>
	);
};

export default Day;
