import { useState } from "react";

export const GifItem = ({ url, title }) => {
	const [Copiado, setCopiado] = useState(false);

	const handleCopyClick = () => {
		navigator.clipboard.writeText(url);
		setCopiado(true);
	};

	return (
		<div className="card">
			<img src={url} alt={title} />
			<p>
				{title}

				<button onClick={handleCopyClick}>{Copiado ? "✅" : "📋"}</button>
			</p>
		</div>
	);
};
