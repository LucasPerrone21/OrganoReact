import "./Worker.css";

export default function Worker(props) {
	return (
		<div className="worker">
			<div className="header" style={{ backgroundColor: props.primaryColor }}>
				<img src={props.image} alt="Foto de Perfil" />
			</div>
			<div className="footer">
				<h4>{props.name}</h4>
				<h5>{props.role}</h5>
			</div>
		</div>
	);
}
