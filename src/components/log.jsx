import React, { useState } from "react";
import EditModalLog from "./editModalLog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faPenToSquare,
	faCopy,
} from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setItemLog } from "../redux/itemLogSlice";
import { getTimeFromMins } from "../utils/getTimeFromMins";
import { selectDragEnd, setDragEnd } from "../redux/dragEndSlice";
import { removeLog } from "../redux/logSlice";
import { selectLogs, setLog } from "../redux/logSlice";
import { setDragStartLog } from "../redux/dragStartLogSlice";
import { setDragStartPlan } from "../redux/dragStartPlanSlice";

const Log = ({ logItem, deleteLog, id, arrLog, setArrLog, date }) => {
	const { logs } = useSelector(selectLogs);
	const { dragEnd } = useSelector(selectDragEnd);
	const [showEditModalLog, setShowEditModalLog] = useState(false);
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const onEdit = () => {
		dispatch(setItemLog(logItem));
		setShowEditModalLog(true);
	};

	const copyLog = () => {
		const upgradeCopyLog = {
			date: logItem.date,
			id: Math.random(),
			time: logItem.time,
			search: logItem.search,
			description: logItem.description,
		};

		dispatch(setLog([...logs, upgradeCopyLog]));
	};

	//происходит, когда пользователь начинает перетаскивать элемент
	const handleDragStart = (e) => {
		dispatch(setItemLog(logItem));
		dispatch(setDragStartLog(true));
		dispatch(setDragStartPlan(false));
	};

	//происходит, когда перетаскиваемый элемент покидает цель перетаскивания
	const handleDragLeave = (e) => {
		//logRef.current.style.background = "red";
	};

	//происходит, когда перетаскиваемый элемент находится над целью перетаскивания
	const handleDragOver = (e) => {
		e.preventDefault(e);
	};

	// происходит, когда перетаскиваемый элемент перетаскивается на цель перетаскивания
	//const handleDrop = (e, item) => {};

	//происходит, когда пользователь закончил перетаскивание элемента
	const handleDragEnd = (e, item) => {
		if (dragEnd)
			return setArrLog(
				arrLog.filter((el) => el.id !== item.id),
				dispatch(setDragEnd(false)),
				dispatch(removeLog(id))
			);
	};

	return (
		<>
			<div
				className="  min-w-[90px] bg-[#f1f5f7] min-h-[70px] mt-[5px] ml-[3%] mr-[3%] text-center border-solid border border-[#d6e2e9] rounded-sm hover:border-black z-20 "
				draggable={true}
				onMouseOver={() => setShow(true)}
				onMouseOut={() => setShow(false)}
				onDragStart={(e) => handleDragStart(e, logItem)}
				onDragLeave={(e) => handleDragLeave(e)}
				onDragOver={(e) => handleDragOver(e)}
				/* onDrop={(e) => handleDrop(e, logItem)} */
				onDragEnd={(e) => handleDragEnd(e, logItem)}>
				<p className="font-bold text-sm text-[#425871]  ml-[10px] mt-[5px] absolute">
					{logItem.search}
				</p>
				<p className="font-semibold text-sm text-[#425871]  ml-[10px] mt-[23px] absolute">
					{logItem.description}
				</p>
				<h1 className="font-normal text-xs flex items-center  text-[#425871] ml-[10px] mt-[45px]  absolute">
					<FontAwesomeIcon
						icon={faSquareCheck}
						className="h-[18px] text-[#00b47e] mr-[5px]  "
					/>
					AD-12434
				</h1>
				<h2 className="w-[50px] font-bold text-sm text-[#425871]  mt-[2.7%] text-right  ml-[8.5%] absolute ">
					{getTimeFromMins(logItem.time)}
				</h2>
				<div
					className={
						"w-[30%] h-[25px] bg-[#004976] text-white z-10  relative top-1 left-[65%] flex justify-around items-center rounded  " +
						(!show ? "hidden " : "")
					}>
					<button onClick={() => deleteLog(id)} className="decoration-white">
						<FontAwesomeIcon icon={faTrashCan} className="w-[12px] " />
					</button>
					<button onClick={onEdit}>
						<FontAwesomeIcon icon={faPenToSquare} className="w-[12px]" />
					</button>
					<button onClick={copyLog}>
						<FontAwesomeIcon icon={faCopy} className="w-[12px]" />
					</button>
				</div>
			</div>
			{showEditModalLog && (
				<EditModalLog
					setShowEditModalLog={setShowEditModalLog}
					arrLog={arrLog}
					setArrLog={setArrLog}
					id={id}
					date={date}
				/>
			)}
		</>
	);
};

export default Log;
