import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onDeleteCategorie }) => {
	const { images, isLoading } = useFetchGifs(category);

	const onDelete = () => {
		onDeleteCategorie(category);
	};

	return (
		<>
			<h3>
				{category} <button onClick={onDelete}>Borrar Categoria</button>
			</h3>
			{isLoading ? <h4>Cargando</h4> : null}
			<div className="card-grid">
				{images.map((image) => {
					return <GifItem key={image.id} {...image} />;
				})}
			</div>
		</>
	);
};
