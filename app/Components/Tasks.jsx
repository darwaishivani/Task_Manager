"use client";
import CreateTask from "./CreateTask";
import Show from "./Show";
import Sidenav from "./Sidenav";
import React, { useEffect, useState } from "react";

const tasks = ({ activeTab, setActiveTab }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState("due");
	const [tasks, setTasks] = useState([
		{
			title: "Check 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime ducimus voluptate. Ab asperiores sint sed commodi deserunt aliquid atque!",
			status: "due",
		},
		{
			title: "Check 2",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime ducimus voluptate. Ab asperiores sint sed commodi deserunt aliquid atque!",
			status: "pending",
		},
		{
			title: "Check 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime ducimus voluptate. Ab asperiores sint sed commodi deserunt aliquid atque!",
			status: "completed",
		},
	]);
	const [activetask, setActivetask] = useState(null);

	useEffect(() => {
		console.log(activeTab);
	}, [activeTab]);

	return (
		<div className="block max-w-7xl p-6 w-[800px] bg-transparent border-2 border-teal-900 rounded-lg shadow-lg  ">
			<h2 className=" text-center mb-2 pl-6 text-2xl font-bold tracking-tight text-teal-950 dark:text-white">
				Task Manager
			</h2>
			<div className="flex">
				<Sidenav activeTab={activeTab} setActiveTab={setActiveTab} />

				<div className="block w-[30rem] h-[30rem] p-6 m-6 border bg-transparent border-gray-200 rounded-lg shadow-lg ">
					{activeTab === "create" && (
						<CreateTask
							title={title}
							setTitle={setTitle}
							description={description}
							setDescription={setDescription}
							status={status}
							setStatus={setStatus}
							tasks={tasks}
							setTasks={setTasks}
							activetask={activetask}
							setActivetask={setActivetask}
						/>
					)}
					{activeTab === "all" && (
						<Show
							setTitle={setTitle}
							setStatus={setStatus}
							setDescription={setDescription}
							tasks={tasks}
							setTasks={setTasks}
							setActivetask={setActivetask}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
					)}

					{activeTab === "due" && (
						<Show
							setTitle={setTitle}
							setStatus={setStatus}
							setDescription={setDescription}
							tasks={tasks}
							setTasks={setTasks}
							setActivetask={setActivetask}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
					)}

					{activeTab === "pending" && (
						<Show
							setTitle={setTitle}
							setStatus={setStatus}
							setDescription={setDescription}
							tasks={tasks}
							setTasks={setTasks}
							setActivetask={setActivetask}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
					)}

					{activeTab === "completed" && (
						<Show
							setTitle={setTitle}
							setStatus={setStatus}
							setDescription={setDescription}
							tasks={tasks}
							setTasks={setTasks}
							setActivetask={setActivetask}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
					)}
					{activeTab === "update" && (
						<CreateTask
							title={title}
							setTitle={setTitle}
							description={description}
							setDescription={setDescription}
							status={status}
							setStatus={setStatus}
							tasks={tasks}
							setTasks={setTasks}
							activetask={activetask}
							setActivetask={setActivetask}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default tasks;
