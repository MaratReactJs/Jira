import React, { useState } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faPenToSquare,
	faCopy,
} from "@fortawesome/free-regular-svg-icons";

const Log = ({ logItem, deleteLog, id, arrLog, setArrLog, getArrItemLog }) => {
	const [show, setShow] = useState(false);

	//происходит, когда пользователь начинает перетаскивать элемент
	const handleDragStart = (e, item) => {
		getArrItemLog(item);
	};

	//происходит, когда перетаскиваемый элемент покидает цель перетаскивания
	/* const handleDragLeave = (e) => {
		logRef.current.style.background = "red";
	}; */

	//происходит, когда перетаскиваемый элемент находится над целью перетаскивания
	const handleDragOver = (e) => {
		e.preventDefault(e);
	};

	// происходит, когда перетаскиваемый элемент перетаскивается на цель перетаскивания
	const handleDrop = (e, item) => {};

	//происходит, когда пользователь закончил перетаскивание элемента
	const handleDragEnd = (e, item) => {
		setArrLog(arrLog.filter((el) => el.id !== item.id));
	};

	return (
		<div
			className="w-[95%] bg-[#f1f5f7] h-[60px] mt-[5px] ml-[5px] text-center border-solid border border-[#d6e2e9] rounded-sm hover:border-black"
			draggable={true}
			onMouseOver={() => setShow(true)}
			onMouseOut={() => setShow(false)}
			onDragStart={(e) => handleDragStart(e, logItem)}
			/* 	onDragLeave={(e) => handleDragLeave(e)} */
			onDragOver={(e) => handleDragOver(e)}
			onDrop={(e) => handleDrop(e, logItem)}
			onDragEnd={(e) => handleDragEnd(e, logItem)}>
			<div className="font-bold text-xs z-10 absolute ml-2 mt-1">
				<Moment format="MMM YYYY">{Date.parse(logItem.date)}</Moment> - Название
				карты
			</div>
			<div className="font-bold text-xs mt-[40px] ml-[140px] z-10 absolute ">
				1h 22m
			</div>
			<div
				className={
					"w-[70px] h-[25px] bg-[#004976] text-white z-10 ml-[112px] mt-[5px] relative flex justify-around items-center   " +
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
	);
};

export default Log;
