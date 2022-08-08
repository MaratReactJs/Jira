import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ModalLog = () => {
	const [search, setSearch] = useState("");
	const handleChange = ({ target }) => {
		setSearch(target.value);
	};

	return (
		<div className="w-[100vw] h-[100vh] bg-[#00497652] fixed top-0 left-0 flex justify-center items-center">
			<div className=" p-[20px] rounded w-[30vw] h-[55vh] bg-white border     ">
				<h1 className="text-xl ">
					<FontAwesomeIcon
						icon={faCircleCheck}
						className="w-[25px]  mr-5 text-[#00b481]"
					/>
					Log Time
				</h1>
				<div className=" w-[100%] bg-[#dee3ed] h-[1px] mt-[5%]"></div>

				<input
					className="w-[100%] h-[10%] border border-[#f09b3c] rounded mt-[5%] focus:clear-none border-2  "
					value={search}
					onChange={handleChange}
					placeholder="Search issues"
				/>
			</div>
		</div>
	);
};

export default ModalLog;
