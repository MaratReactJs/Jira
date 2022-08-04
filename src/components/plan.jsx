import React, { useState } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faPenToSquare,
	faCopy,
} from "@fortawesome/free-regular-svg-icons";

const Plan = ({ dayDate, deletePlan, id }) => {
	const [show, setShow] = useState(false);
	return (
		<div
			className="w-[95%] bg-[#ffffff] h-[8%] mt-[3%] ml-[2%] text-center border-solid border border-[#d6e2e9] rounded-sm hover:border-black"
			onMouseOver={() => setShow(true)}
			onMouseOut={() => setShow(false)}>
			<div className="font-bold text-xs z-10 absolute ml-2 mt-1 ">
				<Moment format="MMM YYYY">{Date.parse(dayDate.date)}</Moment> - Название
				карты
			</div>

			<div className="font-bold text-xs mt-[2.5%] ml-[10%] z-10 absolute ">
				1h 22m
			</div>
			<div
				className={
					"w-[70px] h-[25px] bg-[#004976] z-10 ml-[120px] mt-[5px] relative flex justify-around items-center text-white  " +
					(!show ? "hidden " : "")
				}>
				<button>
					<FontAwesomeIcon
						icon={faTrashCan}
						className="w-[12px]"
						onClick={() => deletePlan(id)}
					/>
				</button>
				<button>
					<FontAwesomeIcon icon={faPenToSquare} className="w-[12px] " />
				</button>
				<button>
					<FontAwesomeIcon icon={faCopy} className="w-[12px]" />
				</button>
			</div>
		</div>
	);
};

export default Plan;
