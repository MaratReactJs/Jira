import React from "react";

const FromField = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className=" mt-[3%] text-[#004974] ml-[4%] inline">
			<label className=" text-[#004974] " htmlFor="fromField">
				From
			</label>
			<input
				type="time"
				className="w-[23%] ml-[3%] border border-[#dee3ed] rounded  focus:outline-none  focus:border-[#dee3ed] w-[40%] p-[6px] inline mr-[3%] mt-[0.5%]"
				name="fromField"
				value={value}
				onChange={handleChange}
				placeholder="14:00"
				id="fromField"
			/>
		</div>
	);
};

export default FromField;
