import React from "react";

const SelectField = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<select
			value={value}
			onChange={handleChange}
			name="selectField"
			className="w-[100%] h-[40px] border border-[#004976]  mt-[5%] rounded  text-[#466079]  outline-0 px-3">
			<option value="Search issues...">Search issues...</option>
			<option value="option2">Option2</option>
			<option value="other">Other</option>
		</select>
	);
};

export default SelectField;
