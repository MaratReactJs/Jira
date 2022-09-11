import React, { useState } from "react";
import Day from "./day";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Week = () => {
	const [countWeek, setCountWeek] = useState(0);
	let week = [];
	let today = new Date();

	function getStartDay(d) {
		let day = d.getDay(); //индекс дня в неделе
		let dayNumber = d.getDate() + (day ? -day : 0);
		return new Date(d.setDate(dayNumber));
	}

	let startDay = new Date(
		getStartDay(today).setDate(getStartDay(today).getDate() - 1 + countWeek)
	);

	for (let i = 0; i < 7; i++) {
		let newDate = new Date(startDay.setDate(startDay.getDate() + 1));
		week.push(newDate);
	}

	const minusWeek = () => {
		setCountWeek((prevstate) => prevstate - 7);
	};

	const plusWeek = () => {
		setCountWeek((prevstate) => prevstate + 7);
	};

	return (
		<>
			<div className="w-[90vw] h-[5vh] mx-auto border-[#dee3ed]  border-t mt-6">
				<div className="w-[18vw] min-h-[100%] min-w-[350px]  flex justify-evenly items-center">
					<FontAwesomeIcon icon={faCalendarDays} />{" "}
					<p>
						<Moment format="MMM D">{week[0]}</Moment> -
						<Moment format=" MMM D, yyy">{week[week.length - 1]}</Moment>{" "}
					</p>
					<button onClick={minusWeek}>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>
					<button onClick={plusWeek}>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
					<button className="border border-[#dee3ed] rounded px-2 ">
						Today
					</button>
				</div>
			</div>{" "}
			<div className={" w-[90vw] mx-auto h-[88vh]  flex    "}>
				{week.map((d, i) => (
					<Day date={d} key={i} minusWeek={minusWeek} />
				))}
			</div>
		</>
	);
};

export default Week;
