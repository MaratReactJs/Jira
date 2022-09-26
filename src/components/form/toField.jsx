import React from "react";

const ToField = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className=" mt-[3%] text-[#004974]  inline">
			<label className=" text-[#004974] " htmlFor="toField">
				To
			</label>
			<input
				type="time"
				className="w-[23%] ml-[3%] border border-[#dee3ed] rounded  focus:outline-none  focus:border-[#dee3ed] w-[40%] p-[6px] inline mr-[3%] mt-[0.5%]"
				name="toField"
				value={value}
				onChange={handleChange}
				placeholder="14:00"
				id="toField"
			/>
		</div>
	);
};

export default ToField;
