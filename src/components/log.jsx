import React, { useState } from "react";
import Moment from "react-moment";
import EditTimeRecord from "./editTimeRecord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faPenToSquare,
	faCopy,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setItemLog } from "../redux/itemLogSlice";
import { getTimeFromMins } from "../utils/getTimeFromMins";
import { selectDragEnd, setDragEnd } from "../redux/dragEndSlice";
import { removeLog } from "../redux/logSlice";

import { selectLogs, setLog } from "../redux/logSlice";

const Log = ({ logItem, deleteLog, id, arrLog, setArrLog, date }) => {
	const { logs } = useSelector(selectLogs);
	const [showEditTimeRecord, setShowEditTimeRecord] = useState(false);
	const { dragEnd } = useSelector(selectDragEnd);

	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const onEdit = () => {
		dispatch(setItemLog(logItem));

		setShowEditTimeRecord(true);
	};

	const copyLog = () => {
		const upgradeCopyLog = {
			date: logItem.date,
			id: Math.random(),
			time: logItem.time,
		};

		dispatch(setLog([...logs, upgradeCopyLog]));
	};

	//происходит, когда пользователь начинает перетаскивать элемент
	const handleDragStart = (e) => {
		dispatch(setItemLog(logItem));
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
				className=" w-[94%] min-w-[100px] bg-[#f1f5f7] h-[60px] mt-[5px] ml-[3%]  text-center border-solid border border-[#d6e2e9] rounded-sm hover:border-black z-20 "
				draggable={true}
				onMouseOver={() => setShow(true)}
				onMouseOut={() => setShow(false)}
				onDragStart={(e) => handleDragStart(e, logItem)}
				onDragLeave={(e) => handleDragLeave(e)}
				onDragOver={(e) => handleDragOver(e)}
				/* onDrop={(e) => handleDrop(e, logItem)} */
				onDragEnd={(e) => handleDragEnd(e, logItem)}>
				<div className="font-bold text-xs  ml-2 mt-1 absolute">
					<Moment format="DD MMM YYYY">{Date.parse(logItem.date)}</Moment>{" "}
				</div>
				<div className="font-bold text-xs mt-[40px]  ml-[8%] fixed ">
					{getTimeFromMins(logItem.time)}
				</div>
				<div
					className={
						"w-[40%] h-[25px] bg-[#004976] text-white z-10  relative top-[5%] left-[58%] flex justify-around items-center rounded  " +
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
			{showEditTimeRecord && (
				<EditTimeRecord
					setShowEditTimeRecord={setShowEditTimeRecord}
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
