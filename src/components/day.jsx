import React, { useState } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Log from "./log";
import Plan from "./plan";

const Day = ({ date }) => {
	const [arrLog, setArrLog] = useState([]);
	const [arrPlan, setArrPlan] = useState([]);
	const [hidden, setHidden] = useState(false);

	const createLog = (date) => {
		setArrLog([...arrLog, { date, id: Math.random() }]);
	};
	const createPlan = (date) => {
		setArrPlan([...arrPlan, { date, id: Math.random() }]);
	};

	const deleteLog = (id) => {
		setArrLog(arrLog.filter((log) => log.id !== id));
	};
	const deletePlan = (id) => {
		setArrPlan(arrPlan.filter((plan) => plan.id !== id));
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
					}
					onClick={() => createPlan(date)}>
					Plan Time
				</button>
			</div>
			{arrLog.map((d) => (
				<Log
					logItem={d}
					key={d.id}
					deleteLog={deleteLog}
					id={d.id}
					arrLog={arrLog}
					setArrLog={setArrLog}
				/>
			))}
			{arrPlan.map((d) => (
				<Plan planItem={d} key={d.id} deletePlan={deletePlan} id={d.id} />
			))}
		</div>
	);
};

export default Day;
