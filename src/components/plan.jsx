import React, { useState } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getTimeFromMins } from "../utils/getTimeFromMins";
import { selectDragEnd, setDragEnd } from "../redux/dragEndSlice";
import { removePlan } from "../redux/planSlice";
import { selectItemPlan, setItemPlan } from "../redux/itemPlanSlice";
import { setDragStartPlan } from "../redux/dragStartPlanSlice";
import { setDragStartLog } from "../redux/dragStartLogSlice";
import EditModalPlan from "./editModalPlan";

const Plan = ({ planItem, deletePlan, id, arrPlan, setArrPlan, date }) => {
	const { itemPlan } = useSelector(selectItemPlan);
	const [showEditModalPlan, setShowEditModalPlan] = useState(false);
	const { dragEnd } = useSelector(selectDragEnd);

	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const onEdit = () => {
		dispatch(setItemPlan(itemPlan));

		setShowEditModalPlan(true);
	};

	//происходит, когда пользователь начинает перетаскивать элемент
	const handleDragStart = (e) => {
		dispatch(setItemPlan(planItem));
		dispatch(setDragStartPlan(true));
		dispatch(setDragStartLog(false));
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
			return setArrPlan(
				arrPlan.filter((el) => el.id !== item.id),
				dispatch(setDragEnd(false)),
				dispatch(removePlan(id))
			);
	};

	return (
		<>
			<div
				className=" w-[94%] min-w-[100px] bg-[#f1f5f7] min-h-[70px] mt-[5px] ml-[3%]  text-center border-solid border border-[red] rounded-sm hover:border-black z-20 "
				draggable={true}
				onMouseOver={() => setShow(true)}
				onMouseOut={() => setShow(false)}
				onDragStart={(e) => handleDragStart(e, planItem)}
				onDragLeave={(e) => handleDragLeave(e)}
				onDragOver={(e) => handleDragOver(e)}
				/* onDrop={(e) => handleDrop(e, logItem)} */
				onDragEnd={(e) => handleDragEnd(e, planItem)}>
				<div className="font-bold text-xs  ml-2 mt-1 absolute">
					<Moment format="DD MMM YYYY">{Date.parse(planItem.date)}</Moment>{" "}
				</div>
				<div className="font-bold text-xs mt-[40px]  ml-[8%] fixed ">
					{getTimeFromMins(planItem.time)}
				</div>
				<div
					className={
						"w-[40%] h-[25px] bg-[#004976] text-white z-10  relative top-[5%] left-[58%] flex justify-around items-center rounded  " +
						(!show ? "hidden " : "")
					}>
					<button onClick={() => deletePlan(id)} className="decoration-white">
						<FontAwesomeIcon icon={faTrashCan} className="w-[12px] " />
					</button>
					<button onClick={onEdit}>
						<FontAwesomeIcon icon={faPenToSquare} className="w-[12px]" />
					</button>
				</div>
			</div>
			{showEditModalPlan && (
				<EditModalPlan
					setShowEditModalPlan={setShowEditModalPlan}
					arrPlan={arrPlan}
					setArrPlan={setArrPlan}
					id={id}
					date={date}
				/>
			)}
		</>
	);
};

export default Plan;
