import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClipboardList,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const SearchField = () => {
	const [search, setSearch] = useState("");
	const handleChange = ({ target }) => {
		setSearch(target.value);
	};

	return (
		<div className="w-[100%]  flex mt-[5%] items-center">
			<FontAwesomeIcon
				icon={faClipboardList}
				className="  mr-5 text-[#004974]"
			/>

			<input
				className="w-[100%] h-[40px] border border-[#f09b3c] rounded  focus:outline-none  focus:border-sky-500 pl-[10px] "
				value={search}
				onChange={handleChange}
				placeholder="Search issues"
			/>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				className="   text-[#004974] absolute left-[62.5%]"
			/>
		</div>
	);
};

export default SearchField;
