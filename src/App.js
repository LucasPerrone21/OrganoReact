import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Squad from "./components/Squad";
import Footer from "./components/Footer";

function App() {
	const squads = [
		{
			name: "Programação",
			primaryColor: "#57c278",
			secondaryColor: "#d9f7e9",
		},
		{
			name: "Front-End",
			primaryColor: "#82cffa",
			secondaryColor: "#e8f8ff",
		},
		{
			name: "Devops",
			primaryColor: "#a6d157",
			secondaryColor: "#f0f8e2",
		},
		{
			name: "UX e Design",
			primaryColor: "#e06b69",
			secondaryColor: "#fde7e8",
		},
		{
			name: "Mobile",
			primaryColor: "#db6ebf",
			secondaryColor: "#fae9f5",
		},
		{
			name: "Dados e Gestão",
			primaryColor: "#ffba05",
			secondaryColor: "#fff5d9",
		},
	];

	const [workers, setWorkers] = useState([]);

	return (
		<div className="App">
			<Banner />
			<Form
				onCreate={(worker) => saveWorker(worker)}
				squads={squads.map((squad) => squad.name)}
			/>
			{squads.map((squad) => {
				return (
					<Squad
						key={squad.name}
						title={squad.name}
						primaryColor={squad.primaryColor}
						secondaryColor={squad.secondaryColor}
						workers={workers.filter((worker) => worker.squad === squad.name)}
						squads={squads.map((squad) => squad.name)}
					/>
				);
			})}
			<Footer />
		</div>
	);

	function saveWorker(worker) {
		console.log(worker);
		setWorkers([...workers, worker]);
		console.log(workers);
	}
}

export default App;
