import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClipboardList,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const SearchField = ({ value, onChange }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};

	return (
		<div className="w-[100%]  flex mt-[5%] items-center">
			<FontAwesomeIcon
				icon={faClipboardList}
				className="  mr-5 text-[#004974]"
			/>

			<input
				className="w-[100%] h-[40px] border border-[#f09b3c] rounded  focus:outline-none  focus:border-[#dee3ed] pl-[10px] "
				placeholder="Search issues"
				name="search"
				type="text"
				id="search"
				value={value}
				onChange={handleChange}
			/>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				className="   text-[#004974] absolute left-[62.5%]"
			/>
		</div>
	);
};

export default SearchField;
