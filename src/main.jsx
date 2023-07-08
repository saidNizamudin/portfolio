import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import NavBar from './components/NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
