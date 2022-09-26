import React from "react";

const SelectField = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<select
			value={value}
			defaultValue="Search issues..."
			onChange={handleChange}
			name="selectField"
			className="w-[100%] h-[40px] border border-[#004976]  mt-[5%] rounded  text-[#466079]  outline-0 px-3">
			<option disabled value={value}>
				Search issues...
			</option>
			<option value={value}>task1</option>
			<option value={value}>task2</option>
			<option value={value}>task3</option>
			<option value={value}>task4</option>
		</select>
	);
};

export default SelectField;
