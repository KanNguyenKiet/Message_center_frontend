import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./page/Register";
import Login from "./page/Login";
import "./style.scss"

function App() {
	return (
    	<BrowserRouter> 
			<Routes>
				<Route path='register' element={<Register />} />
				<Route path='login' element={<Login />} />
			</Routes>
    	</BrowserRouter>
  	);
}

export default App;
