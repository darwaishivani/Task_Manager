import React from "react";
import CreateTask from "./CreateTask";

const Sidenav = ({ activeTab, setActiveTab }) => {
	return (
		<div className="block w-[17rem] h-[30rem] p-6 m-6 bg-transparent border border-gray-200 rounded-lg  shadow">
			<h2 className="mb-6  text-xl font-bold  text-teal-900 ">Filters</h2>
			<div className="flex flex-col  items-start gap-1 ">
				{/* <div className="  "> */}
				<button
					onClick={() => setActiveTab("all")}
					className={`${
						activeTab === "all"
							? "bg-teal-800 text-white p-1 h-[1.9rem] rounded w-[9.7rem] text-left"
							: "p-1 h-[1.9rem] rounded-xl w-[7rem] text-left"
					}`}
				>
					All
				</button>
				<button
					onClick={() => setActiveTab("due")}
					className={`${
						activeTab === "due"
							? "bg-teal-800 text-white p-1 h-[1.9rem] rounded w-[9.7rem] text-left"
							: "p-1 h-[1.9rem] rounded w-[7rem] text-left"
					}`}
				>
					Due
				</button>
				<button
					onClick={() => setActiveTab("pending")}
					className={`${
						activeTab === "pending"
							? "bg-teal-800 text-white p-1 h-[1.9rem] rounded w-[9.7rem] text-left"
							: "p-1 h-[1.9rem] rounded w-[7rem] text-left"
					}`}
				>
					Pending
				</button>
				<button
					onClick={() => setActiveTab("completed")}
					className={`${
						activeTab === "completed"
							? "bg-teal-800 text-white p-1 h-[1.9rem] rounded w-[9.7rem] text-left"
							: "p-1 h-[1.9rem] rounded w-[7rem] text-left"
					}`}
				>
					Completed
				</button>
				{/* </div> */}
			</div>
			<div>
				<h2 className="mt-4 mb-3 text-xl font-bold text-teal-900 ">Tasks</h2>
				<button
					onClick={() => setActiveTab("create")}
					className={`${
						activeTab === "create"
							? "bg-teal-800 text-white p-1 h-[1.9rem] rounded w-[9.7rem] text-left"
							: "p-1 h-[1.9rem] rounded w-[9.7rem] text-left"
					}`}
				>
					Create New Task
				</button>
			</div>
		</div>
	);
};

export default Sidenav;
