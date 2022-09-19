import React from "react";

const TimeFieldTwo = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className=" mt-[5%] text-[#004974] ">
			<label className=" break-words text-[#004974] " htmlFor="timeField">
				Planned time
			</label>
			<input
				type="text"
				className="w-[34%] border border-[#dee3ed] rounded  focus:outline-none  focus:border-[#dee3ed] w-[40%] p-[6px] inline mr-[3%] mt-[0.5%]"
				name="timeFieldTwo"
				value={value}
				onChange={handleChange}
				placeholder="0h"
				id="timeFieldTwo"
			/>
		</div>
	);
};

export default TimeFieldTwo;
