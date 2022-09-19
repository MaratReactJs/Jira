import React from "react";

const DescptionFieldTwo = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className="mt-[5%] ">
			<textarea
				className="w-[100%] h-[80px] border  rounded  focus:outline-none  focus:border-[#004976] border-[#dee3ed] placeholder:text-[#466079] "
				name="descriptionTwo"
				type="text"
				id="descriptionTwo"
				value={value}
				placeholder="Description"
				onChange={handleChange}
			/>
		</div>
	);
};

export default DescptionFieldTwo;
