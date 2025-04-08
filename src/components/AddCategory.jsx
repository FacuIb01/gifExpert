import { useState } from "react";

export const AddCategory = ({ onNewCategorie }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		if (inputValue.trim().length <= 1) return;

		onNewCategorie(inputValue.trim());
		setInputValue("");
	};

	return (
		<form aria-label="form"
			onSubmit={(event) => {
				onSubmit(event);
			}}
		>
			<input
				type="text"
				placeholder="Buscar gifs.."
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};
