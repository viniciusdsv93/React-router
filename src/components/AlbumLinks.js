import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AlbumLinks = () => {
	const [jsonData, setJsonData] = useState([]);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/albums").then((response) => setJsonData(response.data));
	}, []);

	return (
		<div>
			{jsonData.map((item, index) => {
				return (
					<Link to={`/${index}`}>
						<button className='btnTitle' key={index} id={item.id} title={item.title}>
							{item.title}
						</button>
					</Link>
				);
			})}
		</div>
	);
};

export default AlbumLinks;
