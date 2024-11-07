import "./Form.css";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";

export default function Form(props) {
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [image, setImage] = useState("");
	const [squad, setSquad] = useState("");

	return (
		<section className="form">
			<form onSubmit={handleSubmit}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<TextField
					required={true}
					label="name"
					placeholder="digite seu nome"
					value={name}
					onChange={(name) => setName(name)}
				/>
				<TextField
					required={true}
					label="role"
					placeholder="digite seu cargo"
					value={role}
					onChange={(role) => setRole(role)}
				/>
				<TextField
					label="imagem"
					placeholder="digite o endereço da imagem"
					value={image}
					onChange={(image) => setImage(image)}
				/>
				<DropdownList
					label="Time:"
					required={true}
					itens={props.squads}
					value={props.squad}
					onChange={(squad) => setSquad(squad)}
				/>
				<Button>Criar Card</Button>
			</form>
		</section>
	);

	function handleSubmit(event) {
		event.preventDefault();
		props.onCreate({ name, role, image, squad });
		setName("");
		setRole("");
		setImage("");
		setSquad("");
	}
}
