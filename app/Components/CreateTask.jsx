"use client";

import React from "react";
import { toast } from "react-toastify";

const CreateTask = (props) => {
	// console.log(props);
	const {
		title,
		setTitle,
		description,
		setDescription,
		status,
		setStatus,
		activetask,
		setActivetask,
		tasks,
		setTasks,
		activeTab,
		setActiveTab
	} = props;

	const submitHandler = (e) => {
		e.preventDefault();

		if (title.length < 3 || description.length < 10) {
			// console.log(title, title.length);
			toast.error(
				"Title and Descriprion must be more than 3 and 10 char respectively "
			);
			return;
		}

		const newTask = {
			title,
			description,
			status,
			date: new Date().toLocaleDateString(),
		};

		setTasks([...tasks, newTask]);
		setTitle("");
		setDescription("");
		setStatus("due");

		console.log(newTask);
		// console.log("title", title);
	};

	const Updatetask = (e) => {
		e.preventDefault();
		const copyTasks = [...tasks];
		copyTasks[activetask] = {
			...copyTasks[activetask],
			title,
			description,
			status,
		};

		setTasks(copyTasks);
		setActivetask(null);
		setTitle("");
		setDescription("");
		setStatus("due");
		setActiveTab("all");
	};
	return (
		<form className="flex flex-col items-center justify-around gap-y-7  ">
			<h2 className="text-xl font-bold mt-3 text-teal-900 text-center">
				Create Your Task
			</h2>
			<input
				value={title}
				className="w-[20rem]  p-6 border border-gray-100 shadow bg-transparent outline-none rounded-lg"
				type="text"
				placeholder="Title"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				value={description}
				className="w-[20rem]  resize-none  p-6 border border-gray-100 shadow bg-transparent outline-none rounded-lg"
				placeholder="Description here..."
				onChange={(e) => setDescription(e.target.value)}
			></textarea>
			<select
				value={status}
				className="w-[20rem]  py-3 px-5 border border-gray-100 shadow bg-transparent outline-none rounded-lg"
				onChange={(e) => setStatus(e.target.value)}
			>
				<option value="due">Due</option>
				<option value="pending">Pending</option>
				<option value="completed">Completed</option>
			</select>
			{activetask === null ? (
				<button
					type="submit"
					onClick={submitHandler}
					className="bg-transparent hover:bg-teal-800 transition text-teal-900 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
				>
					Create Task
				</button>
			) : (
				<button
					type="submit"
					onClick={Updatetask}
					className=" bg-transparent hover:bg-teal-800 transition text-teal-900 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
				>
					Update Task
				</button>
			)}
		</form>
	);
};

export default CreateTask;
