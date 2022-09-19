import React from "react";

const DateFieldTwo = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className="mt-[3%] text-[#004974]  ml-[5%]  ">
			<label className="text-[#004974] " htmlFor="date">
				Date
			</label>

			<input
				className="w-[35%] ml-[3%] border border-[#dee3ed] rounded p-[5px] focus:outline-none  focus:border-[#004976] mt-[0.5%]  "
				name="date"
				type="date"
				id="date"
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default DateFieldTwo;
