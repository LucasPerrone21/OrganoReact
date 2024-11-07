import "./TextField.css";

export default function TextField(props) {
	const label = props.label.charAt(0).toUpperCase() + props.label.slice(1);
	const placeholder =
		props.placeholder.charAt(0).toUpperCase() +
		props.placeholder.slice(1) +
		"...";

	return (
		<div className="text-field">
			<label>{label}:</label>
			<input
				value={props.value}
				onChange={onType}
				required={props.required}
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);

	function onType(event) {
		props.onChange(event.target.value);
	}
}
