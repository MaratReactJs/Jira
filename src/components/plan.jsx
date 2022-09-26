import React, { useState } from "react";
import {
	faAnglesRight,
	faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getTimeFromMins } from "../utils/getTimeFromMins";
import { selectDragEnd, setDragEnd } from "../redux/dragEndSlice";
import { removePlan } from "../redux/planSlice";
import { selectItemPlan, setItemPlan } from "../redux/itemPlanSlice";
import { setDragStartPlan } from "../redux/dragStartPlanSlice";
import { setDragStartLog } from "../redux/dragStartLogSlice";
import { setData } from "../redux/dataSlice";
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
		dispatch(
			setData({
				checkbox: false,
				date: date.toISOString().slice(0, 10),
				time: "",
				description: "",
				search: "",
				descriptionTwo: "",
				selectField: "",
				checkboxTwo: false,
				fromField: "",
				toField: "",
				timeFieldTwo: "",
				selectFieldTwo: "",
			})
		);
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
				className=" w-[94%] min-w-[100px] bg-[#fff] min-h-[70px] mt-[3%] ml-[3%]  text-center border-solid border border-[#d6e2e9] rounded-sm hover:border-black z-20 flex"
				draggable={true}
				onMouseOver={() => setShow(true)}
				onMouseOut={() => setShow(false)}
				onDragStart={(e) => handleDragStart(e, planItem)}
				onDragLeave={(e) => handleDragLeave(e)}
				onDragOver={(e) => handleDragOver(e)}
				/* onDrop={(e) => handleDrop(e, planItem)} */
				onDragEnd={(e) => handleDragEnd(e, planItem)}>
				<FontAwesomeIcon
					icon={faGripLinesVertical}
					className="w-[5px] h-[58px]  text-[#00c3f2] bg-[#00c3f2]  mt-[5px] ml-[5px] rounded"
				/>
				<p className="font-bold text-sm text-[#425871]  ml-[1%] mt-[5px] absolute">
					{planItem.search}
				</p>
				<p className="font-semibold text-sm text-[#425871]  ml-[1%] mt-[23px] absolute">
					{planItem.description}
				</p>
				<h1 className="font-normal text-xs flex items-center  text-[#425871]  ml-[1%] mt-[45px]  absolute">
					<FontAwesomeIcon
						icon={faAnglesRight}
						className="h-[12px] p-[2px] text-[#fff] bg-[#00c3f2] mr-[5px]"
					/>
					AD-12434
				</h1>
				<p className="w-[50px] font-bold text-sm text-[#425871] mt-[2.7%] text-right  ml-[8.5%] absolute ">
					{getTimeFromMins(planItem.time)}
				</p>
				<div
					className={
						"w-[20%] h-[25px] bg-[#004976] text-white z-10  relative top-1 left-[71%] flex justify-around items-center rounded  " +
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
