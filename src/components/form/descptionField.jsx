import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

const DescptionField = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className="mt-[5%] ">
			<label className="block text-xs font-medium text-[#004974] ml-[7%]">
				Description
			</label>
			<div className=" mt-[1%] flex  items-center">
				<FontAwesomeIcon icon={faAlignLeft} className="  mr-5 text-[#004974]" />
				<input
					className="w-[100%] h-[40px] border border-[#f09b3c] rounded  focus:outline-none  focus:border-[#dee3ed] pl-[10px] "
					name="description"
					type="text"
					id="description"
					value={value}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default DescptionField;
