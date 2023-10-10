import React from "react";

const Show = (props) => {
	const {
		tasks,
		setTasks,
		setActivetask,
		setTitle,
		setDescription,
		setStatus,
		activeTab,
		setActiveTab,
	} = props;

	const UpdateHandler = (index) => {
		const { title, description, status } = tasks[index];
		console.log(index);
		setTitle(title);
		setDescription(description);
		setStatus(status);
		setActivetask(index);
		setActiveTab("update");
	};

	const DeleteHandler = (index) => {
		setTasks(tasks.filter((t, i) => i !== index));
	};

	let tasklist = (
		<h2 className="text-xl font-bold text-teal-800">No tasks available....</h2>
	);

	if (tasks.length > 0) {
		if (activeTab === "all") {
			tasklist = tasks.map((task, index) => {
				return (
					<div key={index} className="shadow p-3 my-5 rounded  w-[22rem]">
						<h2 className="text-xl font-bold text-teal-800">{task.title}</h2>
						<h5 className="text-sm text-gray-600">{task.date}</h5>
						<h5 className="text-sm text-teal-800">{task.Status}</h5>
						<p className="text-md mb-2 text-teal-900 ">{task.description}</p>
						<button
							onClick={() => UpdateHandler(index)}
							className="ml-3 bg-transparent hover:bg-teal-800 transition text-teal-900 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
						>
							Update Task
						</button>
						<button
							onClick={() => DeleteHandler(index)}
							className="ml-3 bg-transparent hover:bg-delete transition text-teal-900 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
						>
							Delete Task
						</button>
					</div>
				);
			});
		} else {
			tasklist = tasks.map((task, index) => {
				return (
					task.status === activeTab && (
						<div key={index} className="shadow p-3 my-5 rounded  w-[22rem]">
							<h2 className="text-xl font-bold text-teal-800">{task.title}</h2>
							<h5 className="text-sm text-gray-600">{task.date}</h5>
							<h5 className="text-sm text-teal-800">{task.Status}</h5>
							<p className="text-md mb-2 text-teal-900 ">{task.description}</p>
							<button
								onClick={() => UpdateHandler(index)}
								className="ml-3 bg-transparent hover:bg-teal-800 transition text-teal-900 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
							>
								Update Task
							</button>
							<button
								onClick={() => DeleteHandler(index)}
								className="ml-3 bg-transparent hover:bg-delete transition text-teal-900 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
							>
								Delete Task
							</button>
						</div>
					)
				);
			});
		}
	}

	return (
		<div className="overflow-y-auto overflow-x-hidden h-[26rem]">
			{tasklist}
		</div>
	);
};

export default Show;
