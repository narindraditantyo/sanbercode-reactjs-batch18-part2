import React from 'react';
import './App.css';
import Tugas9 from './Tugas-9/tugas9'
import Tugas10 from './Tugas-10/tugas10'
import Tugas11 from './Tugas-11/tugas11';
import Tugas12 from './Tugas-12/tugas12';
import Tugas13 from './Tugas-13/tugas13';
import Tugas14 from './Tugas-14/tugas14';
import { Router } from 'react-router-dom';
import Routes from './Tugas-15/routes';

function App() {
	return(
		<Router>
			<Routes />
		</Router>
		// <div>
		// 	{/* <Tugas9 /> */}
		// 	{/* <Tugas10 /> */}
		// 	{/* <Tugas11 /> */}
		// 	{/* <Tugas12 /> */}
		// 	{/* <Tugas13 /> */}
		// 	{/* <Tugas14 /> */}
		// </div>
	);
}

export default App;
