import React, { useState, useRef, useEffect, useCallback } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Log from "./log";
import ModalLog from "./modalLog";
import { getTimeFromMins } from "../utils/getTimeFromMins";
import { getBlockWidth } from "../utils/getBlockWidth";

import { useDispatch, useSelector } from "react-redux";
import { selectLogs, setLog } from "../redux/logSlice";
import { selectData } from "../redux/dataSlice";
import { selectItemLog } from "../redux/itemLogSlice";

const Day = ({ date }) => {
	const [showModal, setShowModal] = useState(false);
	//console.log(data.date, "data");
	const dispatch = useDispatch();
	const { logs } = useSelector(selectLogs);
	const { data } = useSelector(selectData);
	const { itemLog } = useSelector(selectItemLog);
	const [arrLog, setArrLog] = useState([]);

	const timeArr = arrLog.map((item) => item.time);
	const timeSum = timeArr.map(Number).reduce((a, b) => a + b, 0);
	let percent = Math.ceil((timeSum / 480) * 100);

	useEffect(() => {
		for (let i = 0; i < logs.length; i++) {
			if (logs[i].date === date.toISOString().slice(0, 10)) {
				arrLog.push(logs[i]);
				dispatch(setLog(logs.filter((el) => el.id !== logs[i].id)));
			}
		}
	}, [arrLog, date, logs, dispatch, data]);

	const [hidden, setHidden] = useState(false);

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

	const handleDragLeave = (e) => {
		e.preventDefault();
		dayRef.current.style.boxSizing = "border-box";
		dayRef.current.style.border = "1px solid #dee3ed";
	};

	const handleDropArr = (e) => {
		const upgradeItem = {
			date: date.toISOString().slice(0, 10),
			id: Math.random(),
			time: itemLog.time,
		};
		dispatch(setLog([...logs, upgradeItem]));
		dayRef.current.style.boxSizing = "border-box";
		dayRef.current.style.border = "1px solid #dee3ed";
	};

	const handleDragOverArr = (e) => {
		e.preventDefault(e);
		dayRef.current.style.border = "2px dashed #004974";
	};

	const deleteLog = (id) => {
		setArrLog(arrLog.filter((log) => log.id !== id));
	};

	return (
		<div
			ref={dayRef}
			className={
				"w-[calc(90vw/7)] border-l border-r box-border border-y border-[#dee3ed]  min-w-[150px]  select-none " +
				(date.getDay() === new Date().getDay() ? "bg-[#f5f8fa]" : "")
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
					onClick={() => setShowModal(true)}>
					Log Time
				</button>
				<button
					className={
						"w-[45%] bg-[#ebf1f4] h-[23px] font-bold text-xs text-center hover:bg-[#d6e2e9] rounded " +
						(!hidden ? "hidden" : "")
					}>
					Plan Time
				</button>
			</div>
			<div
				className="min-h-[100%]"
				onDragOver={(e) => handleDragOverArr(e)}
				onDrop={(e) => handleDropArr(e)}
				onDragLeave={(e) => handleDragLeave(e)}>
				{" "}
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
			</div>
			{showModal && (
				<ModalLog setShowModal={setShowModal} createLog={createLog} />
			)}
		</div>
	);
};

export default Day;
