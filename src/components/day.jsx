import React, { useState, useRef, useEffect, useCallback } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Log from "./log";
import ModalLog from "./modalLog";
import ModalPlan from "./modalPlan";
import { getTimeFromMins } from "../utils/getTimeFromMins";
import { getBlockWidth } from "../utils/getBlockWidth";

import { useDispatch, useSelector } from "react-redux";
import { selectLogs, setLog, removeLog } from "../redux/logSlice";
import { selectData } from "../redux/dataSlice";
import { selectItemLog } from "../redux/itemLogSlice";
import { setDragEnd } from "../redux/dragEndSlice";
import { removePlan, selectPlan, setPlan } from "../redux/planSlice";
import Plan from "./plan";
import { selectItemPlan } from "../redux/itemPlanSlice";
import { selectDragStartLog } from "../redux/dragStartLogSlice";
import { selectDragStartPlan } from "../redux/dragStartPlanSlice";

const Day = ({ date, minusWeek }) => {
	const [showLog, setShowLog] = useState(false);
	const [showPlan, setShowPlan] = useState(false);

	const dispatch = useDispatch();
	const { logs } = useSelector(selectLogs);
	const { plans } = useSelector(selectPlan);
	const { data } = useSelector(selectData);
	const { itemLog } = useSelector(selectItemLog);
	const { itemPlan } = useSelector(selectItemPlan);
	const { dragStartLog } = useSelector(selectDragStartLog);
	const { dragStartPlan } = useSelector(selectDragStartPlan);

	const [arrLog, setArrLog] = useState([]);
	const [arrPlan, setArrPlan] = useState([]);

	useEffect(() => {
		setArrLog([]);
		setArrPlan([]);
	}, [minusWeek]);

	for (let i = 0; i < logs.length; i++) {
		if (
			arrLog.find((log) => log.id === logs[i].id) !== logs[i] &&
			logs[i].date === date.toISOString().slice(0, 10)
		) {
			arrLog.push(logs[i]);
		}
	}

	for (let i = 0; i < plans.length; i++) {
		if (
			arrPlan.find((plan) => plan.id === plans[i].id) !== plans[i] &&
			plans[i].date === date.toISOString().slice(0, 10)
		) {
			arrPlan.push(plans[i]);
		}
	}

	const [hidden, setHidden] = useState(false);
	const timeArr = arrLog.map((item) => item.time);
	const timeSum = timeArr.map(Number).reduce((a, b) => a + b, 0);
	let percent = Math.ceil((timeSum / 480) * 100);

	const dayRef = useRef();

	const createLog = useCallback(() => {
		dispatch(
			setLog([
				...logs,
				{
					date: data.date ? data.date : date.toISOString().slice(0, 10),
					id: Math.random(),
					time: data.time,
				},
			])
		);
	}, [date, dispatch, logs, data]);

	const createPlan = useCallback(() => {
		dispatch(
			setPlan([
				...plans,
				{
					date: data.date ? data.date : date.toISOString().slice(0, 10),
					id: Math.random(),
					time: data.timeFieldTwo,
				},
			])
		);
	}, [date, dispatch, plans, data]);

	const handleDragLeave = (e) => {
		e.preventDefault();
		dayRef.current.style.boxSizing = "border-box";
		dayRef.current.style.border = "1px solid #dee3ed";
	};

	const handleDropArr = (e) => {
		if (dragStartLog) {
			const upgradeItem = {
				date: date.toISOString().slice(0, 10),
				id: Math.random(),
				time: itemLog.time,
			};
			dispatch(setLog([...logs, upgradeItem]));
		}

		if (dragStartPlan) {
			const upgradeItem = {
				date: date.toISOString().slice(0, 10),
				id: Math.random(),
				time: itemPlan.time,
			};
			dispatch(setPlan([...plans, upgradeItem]));
		}

		dispatch(setDragEnd(true));

		dayRef.current.style.boxSizing = "border-box";
		dayRef.current.style.border = "1px solid #dee3ed";
	};

	const handleDragOverArr = (e) => {
		e.preventDefault(e);
		dayRef.current.style.border = "2px dashed #004974";
	};

	const deleteLog = (id) => {
		setArrLog(arrLog.filter((log) => log.id !== id));
		dispatch(removeLog(id));
	};

	const deletePlan = (id) => {
		setArrPlan(arrPlan.filter((plan) => plan.id !== id));
		dispatch(removePlan(id));
	};

	return (
		<div
			ref={dayRef}
			className={
				"w-[calc(90vw/7)] border-l border-r box-border border-y border-[#dee3ed]  min-w-[150px]  select-none  " +
				(date.toString().slice(0, 10) === new Date().toString().slice(0, 10)
					? "bg-[#f5f8fa]"
					: "")
			}>
			<div className="  flex justify-between  font-bold text-xs px-[3%] pt-[3%]">
				<Moment format="ddd DD.MM">{date}</Moment>
				<div className="hours">
					{date.toString().slice(0, 3) === "Sun"
						? "0h of 0h"
						: date.toString().slice(0, 3) === "Sat"
						? "0h of 0h"
						: timeSum === 0
						? "0h of 8h"
						: getTimeFromMins(timeSum) + "  of 8h"}
				</div>
			</div>
			<div className="h-[3px]  bg-[#d6e2e9] mt-[3%] mx-[3%] rounded">
				<div
					className={`${getBlockWidth(
						percent
					)} h-[100%] bg-[#00b481]  rounded `}></div>
			</div>

			<div
				className="  h-[3,5%]  mt-[5px]   text-center flex justify-evenly  rounded "
				onMouseOut={() => setHidden(false)}
				onMouseOver={() => setHidden(true)}>
				<div
					className={
						"w-[94%] bg-[#ebf1f4] h-[23px]  text-center rounded " +
						(hidden ? "hidden " : "")
					}>
					<FontAwesomeIcon icon={faPlus} />
				</div>
				<button
					className={
						"w-[45%] bg-[#ebf1f4] h-[23px] font-bold text-xs text-center hover:bg-[#d6e2e9] rounded " +
						(!hidden ? "hidden" : "")
					}
					onClick={() => setShowLog(true)}>
					Log Time
				</button>
				<button
					className={
						"w-[45%] bg-[#ebf1f4] h-[23px] font-bold text-xs text-center hover:bg-[#d6e2e9] rounded " +
						(!hidden ? "hidden" : "")
					}
					onClick={() => setShowPlan(true)}>
					Plan Time
				</button>
			</div>
			<div
				className="min-h-[80vh]"
				onDragOver={(e) => handleDragOverArr(e)}
				onDrop={(e) => handleDropArr(e)}
				onDragLeave={(e) => handleDragLeave(e)}>
				{arrLog.length > 0 && (
					<h2 className=" w-[93%] text-center border-b border-solid border-[#adc4d3] leading-[0.1em] mt-[5%] mb-[5%] mx-[3%]">
						<span className="bg-[#fff] px-[5%]">LOGS</span>{" "}
					</h2>
				)}
				{arrLog.map((log) => (
					<Log
						logItem={log}
						key={log.id}
						deleteLog={deleteLog}
						id={log.id}
						arrLog={arrLog}
						setArrLog={setArrLog}
						date={date}
					/>
				))}
				{arrPlan.length > 0 && (
					<h2 className=" w-[93%] text-center border-b border-solid border-[#adc4d3] leading-[0.1em] mt-[5%] mb-[5%] mx-[3%]">
						<span className="bg-[#fff] px-[5%]">PLANS</span>{" "}
					</h2>
				)}

				{arrPlan.map((plan) => (
					<Plan
						planItem={plan}
						key={plan.id}
						deletePlan={deletePlan}
						id={plan.id}
						arrPlan={arrPlan}
						setArrPlan={setArrPlan}
						date={date}
					/>
				))}
			</div>
			{showLog && <ModalLog setShowLog={setShowLog} createLog={createLog} />}
			{showPlan && (
				<ModalPlan setShowPlan={setShowPlan} createPlan={createPlan} />
			)}
		</div>
	);
};

export default Day;
