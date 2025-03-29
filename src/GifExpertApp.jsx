import { useState } from "react";
import { GifGrid, AddCategory } from "./components/";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One Punch"]);

	const onAddCategory = (categorie) => {
		if (categories.includes(categorie)) return;
		setCategories([categorie, ...categories]);
	};

	const onDeleteCategorie = (categorie) => {
		const categorieFiltrada = categories.filter((cat) => cat != categorie);

		setCategories(categorieFiltrada);
	};
	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewCategorie={(event) => onAddCategory(event)} />

			{categories.map((categories) => (
				<GifGrid
					key={categories}
					category={categories}
					onDeleteCategorie={onDeleteCategorie}
				/>
			))}
		</>
	);
};
