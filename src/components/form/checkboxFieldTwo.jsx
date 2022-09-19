import React from "react";

const CheckboxFieldTwo = ({ value, onChange, name }) => {
	const handleChange = () => {
		onChange({ name: name, value: !value });
	};

	return (
		<div className="w-[22%] flex justify-between items-center">
			<label
				htmlFor="checkbox"
				className="text-base font-normal text-[#004974] whitespace-nowrap ml-[5%]">
				Period
			</label>
			<input
				className="w-[15px] h-[15px] accent-[#dee3ed] "
				type="checkbox"
				id="checkboxTwo"
				value=""
				onChange={handleChange}
				checked={value}
				name="checkboxTwo"
			/>
		</div>
	);
};

export default CheckboxFieldTwo;
