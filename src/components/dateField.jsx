import React from "react";

const DateField = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className="mt-[5.2%] text-[#004974] font-semibold mr-[3%]  ">
			<label
				className=" block text-xs font-medium text-[#004974] "
				htmlFor="date">
				Date
			</label>

			<input
				className=" border border-[#f09b3c] rounded p-[5px] focus:outline-none  focus:border-[#dee3ed] mt-[0.5%]  "
				name="date"
				type="date"
				id="date"
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default DateField;
