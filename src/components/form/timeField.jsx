import React from "react";

const TimeField = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className=" mt-[5%] text-[#004974] font-semibold">
			<label
				className="block text-xs font-medium text-[#004974] "
				htmlFor="timeField">
				Duration
			</label>
			<input
				type="time"
				className="border border-[#f09b3c] rounded  focus:outline-none  focus:border-[#dee3ed] w-[40%] p-[6px] inline mr-[3%] mt-[0.5%]"
				name="time"
				value={value}
				onChange={handleChange}
				placeholder="0h"
				id="time"
			/>
			<h2 className="inline ">Set start and end time</h2>
		</div>
	);
};

export default TimeField;
