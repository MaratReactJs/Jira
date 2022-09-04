import React from "react";
import Day from "./day";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Week = () => {
	let week = [];
	let today = new Date();
	function getStartDay(d) {
		d = new Date(d);
		let day = d.getDay();
		let dayNumber = d.getDate() + (day ? -day : 0);
		return new Date(d.setDate(dayNumber));
	}

	let startDay = new Date(
		new Date(getStartDay(today).setDate(getStartDay(today).getDate() - 1))
	);
	for (let i = 0; i < 7; i++) {
		let newDate = new Date(startDay.setDate(startDay.getDate() + 1));
		week.push(newDate);
	}

	return (
		<>
			<div className="w-[90vw] h-[5vh] mx-auto border-[#dee3ed]  border-t mt-6">
				<div className="w-[18vw] min-h-[100%] min-w-[350px]  flex justify-evenly items-center">
					<FontAwesomeIcon icon={faCalendarDays} />{" "}
					<p>
						<Moment format="MMM D">{week[0]}</Moment> -
						<Moment format=" MMM D, yyy">{week[week.length - 1]}</Moment>{" "}
					</p>
					<button>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>
					<button>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
					<button>Today</button>
				</div>
			</div>{" "}
			<div className={" w-[90vw] mx-auto h-[88vh]  flex   "}>
				{week.map((d, i) => (
					<Day date={d} key={i} />
				))}
			</div>
		</>
	);
};

export default Week;
