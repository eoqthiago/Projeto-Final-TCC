import React from "react";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import "./index.sass";

const Index = () => {
	return (
		<div className="initial page ">
			<Menu />
			<Header menu />
		</div>
	);
};

export default Index;