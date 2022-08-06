import React, { useRef, useState } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faPenToSquare,
	faCopy,
} from "@fortawesome/free-regular-svg-icons";

const Log = ({ logItem, deleteLog, id, arrLog, setArrLog }) => {
	const [show, setShow] = useState(false);
	const logRef = useRef();

	const [currentArr, setCurrenArr] = useState([]);
	const [currentItem, setCurrenItem] = useState([]);

	//происходит, когда пользователь начинает перетаскивать элемент
	const handleDragStart = (e, arr, item) => {
		setCurrenArr(arr);
		setCurrenItem(item);
		logRef.current.style.background = "yellow";
	};

	//происходит, когда перетаскиваемый элемент покидает цель перетаскивания
	/* const handleDragLeave = (e) => {
		logRef.current.style.background = "red";
	}; */

	//происходит, когда перетаскиваемый элемент находится над целью перетаскивания
	const handleDragOver = (e) => {
		e.preventDefault(e);
		logRef.current.style.background = "green";
	};

	// происходит, когда перетаскиваемый элемент перетаскивается на цель перетаскивания
	const handleDrop = (e, arr, item) => {
		logRef.current.style.background = "blue";
		e.preventDefault(e);
		const currenIndex = currentArr.indexOf(currentItem);
		console.log(currenIndex, "currenIndex");
		currentArr.splice(currenIndex, 1);
		console.log(currentArr, "currenArr");
		const dropIndex = arr.indexOf(item);
		arr.splice(dropIndex + 1, 0, currentItem);
		setArrLog(currentArr);
	};

	//происходит, когда пользователь закончил перетаскивание элемента
	const handleDragEnd = (e) => {
		logRef.current.style.background = "orange";
		e.preventDefault(e);
	};

	return (
		<div
			className="w-[95%] bg-[#f1f5f7] h-[8%] mt-[3%] ml-[2%] text-center border-solid border border-[#d6e2e9] rounded-sm hover:border-black"
			onMouseOver={() => setShow(true)}
			onMouseOut={() => setShow(false)}
			draggable={true}
			onDragStart={(e) => handleDragStart(e, arrLog, logItem)}
			/* 	onDragLeave={(e) => handleDragLeave(e)} */
			onDragOver={(e) => handleDragOver(e)}
			onDrop={(e) => handleDrop(e, arrLog, logItem)}
			onDragEnd={(e) => handleDragEnd(e)}
			ref={logRef}>
			<div className="font-bold text-xs z-10 absolute ml-2 mt-1">
				<Moment format="MMM YYYY">{Date.parse(logItem.date)}</Moment> - Название
				карты
			</div>
			<div className="font-bold text-xs mt-[2.5%] ml-[10%] z-10 absolute ">
				1h 22m
			</div>
			<div
				className={
					"w-[70px] h-[25px] bg-[#004976] text-white z-10 ml-[120px] mt-[5px] relative flex justify-around items-center   " +
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
