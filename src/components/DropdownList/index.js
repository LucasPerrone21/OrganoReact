import "./DropdownList.css";

export default function DropdownList(props) {
	const itens = props.itens;
	return (
		<div className="dropdownList">
			<label>{props.label}</label>
			<select
				onChange={handleChange}
				required={props.required}
				value={props.squad}
			>
				<option value="">Selecione um time</option>
				{itens.map((item) => (
					<option key={item}>{item}</option>
				))}
			</select>
		</div>
	);

	function handleChange(event) {
		props.onChange(event.target.value);
	}
}
