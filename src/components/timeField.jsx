import React, { useState } from "react";

const TimeField = () => {
	const [time, setTime] = useState("");
	const handleChange = ({ target }) => {
		setTime(target.value);
	};
	return (
		<div className=" mt-[5%] text-[#004974] font-semibold">
			<label
				className="block text-xs font-medium text-[#004974] "
				htmlFor="timeField">
				Duration
			</label>
			<input
				type="text"
				className="border border-[#f09b3c] rounded p-[5px] focus:outline-none  focus:border-sky-500 w-[40%] "
				name="date"
				value={time}
				onChange={handleChange}
				placeholder="0h"
			/>
		</div>
	);
};

export default TimeField;
