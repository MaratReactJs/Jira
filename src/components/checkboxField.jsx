import React from "react";

const CheckboxField = ({ value, onChange, name }) => {
	const handleChange = () => {
		onChange({ name: name, value: !value });
	};

	return (
		<div className=" flex justify-evenly items-center">
			<input
				className="w-[20px] h-[20px] border border-[#004974] outline-none"
				type="checkbox"
				id="checkbox"
				value=""
				onChange={handleChange}
				checked={value}
			/>
			<label
				htmlFor="checkbox"
				className="text-base font-normal text-[#004974] whitespace-nowrap ml-[5%]">
				Log another
			</label>
		</div>
	);
};

export default CheckboxField;
