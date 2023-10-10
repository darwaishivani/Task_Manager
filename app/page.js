"use client";

import React, { useState } from "react";
import Tasks from "./Components/Tasks";

const page = () => {
	const [activeTab, setActiveTab] = useState("create");
	
	return (
		<div className="bg">
			<Tasks activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	);
};

export default page;
