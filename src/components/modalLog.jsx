import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import SearchField from "./searchField";
import DateField from "./dateField";
import TimeField from "./timeField";

const ModalLog = () => {
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
				<SearchField />
				<div className="flex ">
					<DateField />
					<TimeField />

					{/* Set start and end time */}
				</div>
			</div>
		</div>
	);
};

export default ModalLog;
