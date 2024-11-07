import "./Squad.css";
import Worker from "../Worker";

export default function Squad(props) {
	return (
		props.workers.length > 0 && (
			<section
				className="squad"
				style={{
					backgroundColor: props.secondaryColor,
				}}
			>
				<h3 style={{ borderColor: props.primaryColor }}>{props.title}</h3>
				<div className="workers">
					{props.workers.map((worker) => {
						return (
							<Worker
								key={worker.name}
								primaryColor={props.primaryColor}
								secondaryColor={props.secondaryColor}
								name={worker.name}
								role={worker.role}
								image={worker.image}
								squad={worker.squad}
							/>
						);
					})}
				</div>
			</section>
		)
	);
}
