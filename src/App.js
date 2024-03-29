import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./page/Register";
import Login from "./page/Login";
import Home from "./page/Home";
import "./style.scss"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
	const { currentUser } = useContext(AuthContext);

	const ProtectedRoute = ({ children }) => {
		console.log("* ", currentUser);
		if (!currentUser) {
			return <Navigate to="/login"/>;
		} else {
			return children;
		}
	}

	const ProtectedRouteLogin = ({ children }) => {
		console.log("** ", currentUser);
		if (currentUser) {
			return <Navigate to="/"/>;
		} else {
			return children;
		}
	}

	return (
    	<BrowserRouter> 
			<Routes>
				<Route path="/" element={
					<ProtectedRoute>
						<Home />
					</ProtectedRoute>} />
				<Route path="/register" element={
					<ProtectedRouteLogin>
						<Register />
					</ProtectedRouteLogin>} />
				<Route path="/login" element={
					<ProtectedRouteLogin>
						<Login />
					</ProtectedRouteLogin>} />
			</Routes>
    	</BrowserRouter>
  	);
}

export default App;
