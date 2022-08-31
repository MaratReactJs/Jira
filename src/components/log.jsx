import React, { useState } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faPenToSquare,
	faCopy,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { setItemLog } from "../redux/itemLogSlice";
import { getTimeFromMins } from "../utils/getTimeFromMins";

const Log = ({ logItem, deleteLog, id, arrLog, setArrLog }) => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

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
		setArrLog(arrLog.filter((el) => el.id !== item.id));
	};

	return (
		<>
			<div
				className="w-[95%] bg-[#f1f5f7] h-[60px] mt-[5px] ml-[5px] text-center border-solid border border-[#d6e2e9] rounded-sm hover:border-black z-20 "
				draggable={true}
				onMouseOver={() => setShow(true)}
				onMouseOut={() => setShow(false)}
				onDragStart={(e) => handleDragStart(e, logItem)}
				onDragLeave={(e) => handleDragLeave(e)}
				onDragOver={(e) => handleDragOver(e)}
				/* onDrop={(e) => handleDrop(e, logItem)} */
				onDragEnd={(e) => handleDragEnd(e, logItem)}>
				<div className="font-bold text-xs z-0  ml-2 mt-1 absolute">
					<Moment format="DD MMM YYYY">{Date.parse(logItem.date)}</Moment>{" "}
				</div>
				<div className="font-bold text-xs mt-[40px]  ml-[9%] z-0 absolute ">
					{getTimeFromMins(logItem.time)}
				</div>
				<div
					className={
						"w-[70px] h-[25px] bg-[#004976] text-white z-10  relative top-[5%] left-[65%] flex justify-around items-center   " +
						(!show ? "hidden " : "")
					}>
					<button onClick={() => deleteLog(id)} className="decoration-white">
						<FontAwesomeIcon icon={faTrashCan} className="w-[12px] " />
					</button>
					<button>
						<FontAwesomeIcon icon={faPenToSquare} className="w-[12px]" />
					</button>
					<button>
						<FontAwesomeIcon icon={faCopy} className="w-[12px]" />
					</button>
				</div>
			</div>
		</>
	);
};

export default Log;
