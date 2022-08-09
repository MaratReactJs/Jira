import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const DateField = () => {
	const [date, setDate] = useState("");

	const handleChange = ({ target }) => {
		console.log(target.value);
		setDate(target.value);
	};
	return (
		<div className="mt-[5%] text-[#004974] font-semibold w-[60%]">
			<label
				className="block text-sm font-medium text-[#004974]"
				htmlFor="date">
				Date
			</label>
			<FontAwesomeIcon icon={faClock} className="w-[25px]  text-[#004974]" />

			<input
				className="border border-[#f09b3c] rounded p-[5px] focus:outline-none  focus:border-sky-500 w-[35%] "
				name="date"
				type="date"
				format="MMM YYYY"
				id="date"
				value={date}
				onChange={handleChange}
			/>
		</div>
	);
};

export default DateField;
