import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "./TrafficLight";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Semáforo</h1>
			<TrafficLight/>
		</div>
	);
};

export default Home;