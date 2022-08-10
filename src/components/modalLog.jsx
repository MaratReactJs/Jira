import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import SearchField from "./searchField";
import DateField from "./dateField";
import TimeField from "./timeField";
import DescptionField from "./descptionField";
import CheckboxField from "./checkboxField";

const ModalLog = ({ setShowModal }) => {
	const [data, setData] = useState({
		checkbox: false,
		date: "",
		time: "",
		description: "",
		search: "",
	});

	const handleChange = (target) => {
		setData((prevState) => ({ ...prevState, [target.name]: target.value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};
	return (
		<div
			className="w-[100vw] h-[100vh] bg-[#00497652] fixed top-0 left-0 flex justify-center items-center"
			onClick={() => setShowModal(false)}>
			<div
				className=" p-[20px] rounded w-[30vw] h-[50vh] bg-white border  "
				onClick={(e) => e.stopPropagation()}>
				<form onSubmit={handleSubmit}>
					{" "}
					<h1 className="text-xl ">
						<FontAwesomeIcon
							icon={faCircleCheck}
							className="w-[1vw]  mr-5 text-[#00b481]"
						/>
						Log Time
					</h1>
					<div className=" bg-[#dee3ed] h-[1px] mt-[5%]"></div>
					<SearchField onChange={handleChange} value={data.search} />
					<div className="flex  ">
						<FontAwesomeIcon
							icon={faClock}
							className="mt-[10%] mr-4 text-[#004974] "
						/>
						<DateField onChange={handleChange} value={data.date} />
						<TimeField onChange={handleChange} value={data.time} />
					</div>
					<DescptionField onChange={handleChange} value={data.description} />
					<div className="mt-[15%]   flex items-center justify-between">
						<CheckboxField
							onChange={handleChange}
							value={data.checkbox}
							name="checkbox"
						/>
						<div className="flex">
							{" "}
							<button
								type="submit"
								value={data}
								className="font-medium text-white bg-[#004974] mr-[3%] hover:bg-[#0073a9] hover:text-white px-3 py-2 whitespace-nowrap rounded">
								Log time
							</button>
							<button className=" font-medium text-[#004974] mr-[3%] hover:bg-[#f5f8fa]  px-3  py-2 rounded hover:outline outline-offset-[-1px] outline-1">
								Cancel
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ModalLog;
