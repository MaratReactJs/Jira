import React, { useState, useRef, useEffect, useCallback } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Log from "./log";
import ModalLog from "./modalLog";

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
	console.log(arrLog, "arrLog");

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
				"w-[calc(90vw/7)] border-l box-border border-y border-[#dee3ed]  min-w-[150px] min-h-screen  select-none " +
				(date.getDay() === new Date().getDay() ? "bg-[#f5f8fa]" : "")
			}>
			<div className="  flex justify-between  font-bold text-xs px-[3%] pt-[3%]">
				<Moment format="ddd DD.MM">{date}</Moment>
				<div className="hours">0h of 0h</div>
			</div>
			<div>
				<div className="w-3/6 h-[2px]  bg-[#d6e2e9] mt-[3%] mx-[3%] " />
			</div>

			<div
				className="  h-[3,5%]  mt-[5px]   text-center flex justify-around  rounded "
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
					onClick={() => setShowModal(true)}>
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
				className=" h-screen "
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
