import React from "react";

const SelectFieldTwo = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className=" mt-[1%] text-[#004974] flex justify-between items-baseline">
			<label className="  text-[#004974]">Repeat</label>
			<select
				value={value}
				onChange={handleChange}
				name="selectFieldTwo"
				className="w-[85%] h-[40px] border border-[#dee3ed]   mt-[5%] rounded  text-[#466079]  outline-0 px-3">
				<option value="Never">Never</option>
				<option value="option2">Option2</option>
				<option value="other">Other</option>
			</select>
		</div>
	);
};

export default SelectFieldTwo;
