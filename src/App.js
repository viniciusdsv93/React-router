import "./App.css";
import Header from "./components/Header";
import AlbumLinks from "./components/AlbumLinks";
import AlbumItem from "./components/AlbumItem";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<AlbumLinks />} />
				<Route path='/:id' element={<AlbumItem />} />
			</Routes>
		</div>
	);
}

export default App;
