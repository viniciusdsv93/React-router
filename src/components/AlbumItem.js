import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [AlbumItemData, setAlbumItemData] = useState([]);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/albums/${params.id}`)
			.then((response) => setAlbumItemData(response.data));
	}, []);

	function handleBackButton() {
		navigate(-1);
	}

	return (
		<div>
			<button onClick={handleBackButton}>Voltar</button>
			<p>{AlbumItemData.id}</p>
			<p>{AlbumItemData.title}</p>
		</div>
	);
};

export default AlbumItem;
