import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import { NavBar } from './components';
import { StarEdu } from './pages';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/staredu" element={<StarEdu />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
