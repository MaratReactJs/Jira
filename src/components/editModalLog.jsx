import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import SearchField from "./form/searchField";
import DateField from "./form/dateField";
import TimeField from "./form/timeField";
import DescptionField from "./form/descptionField";
import CheckboxField from "./form/checkboxField";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectData, setData } from "../redux/dataSlice";
import { selectLogs, setLog, removeLog } from "../redux/logSlice";

const EditModalLog = ({ setShowEditModalLog, arrLog, setArrLog, id, date }) => {
	const { data } = useSelector(selectData);
	const { logs } = useSelector(selectLogs);
	const dispatch = useDispatch();

	const handleChange = (target) => {
		dispatch(setData({ ...data, [target.name]: target.value }));
	};
	const handleSubmit = (e) => {
		setShowEditModalLog(false);
		e.preventDefault();

		const upgradeItemLog = {
			date: data.date ? data.date : date.toISOString().slice(0, 10),
			id: Math.random(),
			time: data.time,
			search: data.search,
			description: data.description,
		};

		dispatch(setLog([...logs, upgradeItemLog]));

		dispatch(removeLog(id));
		setArrLog(arrLog.filter((log) => log.id !== id));
		dispatch(
			setData({
				checkbox: false,
				date: "",
				time: "",
				description: "",
				search: "",
				descriptionTwo: "",
				selectField: "",
				checkboxTwo: false,
				fromField: "",
				toField: "",
				timeFieldTwo: "",
				selectFieldTwo: "",
			})
		);
	};

	const closeEditModal = () => {
		setShowEditModalLog(false);
	};
	return (
		<div
			className="w-[100vw] h-[100vh] bg-[#00497652] fixed top-0 left-0 flex justify-center items-center z-20"
			onClick={closeEditModal}>
			<div
				className="  p-[20px] rounded min-w-[30vw] min-h-[50vh] bg-white border  "
				onClick={(e) => e.stopPropagation()}>
				<form onSubmit={handleSubmit}>
					{" "}
					<h1 className="text-xl ">
						<FontAwesomeIcon
							icon={faCircleCheck}
							className="w-[1vw]  mr-5 text-[#00b481]"
						/>
						Edit time record
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
								className="font-medium text-white bg-[#004974] mr-[3%] hover:bg-[#0073a9] hover:text-white px-3 py-2 whitespace-nowrap rounded">
								Update
							</button>
							<button
								onClick={closeEditModal}
								className=" font-medium text-[#004974] mr-[3%] hover:bg-[#f5f8fa]  px-3  py-2 rounded hover:outline outline-offset-[-1px] outline-1">
								Cancel
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditModalLog;
