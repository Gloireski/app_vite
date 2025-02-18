// import styles from './App.module.css'
import "./App.css";
import { NavLink } from 'react-router-dom';
import RoutesPosts from './Router/RoutesPosts';


function App() {
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate("/detail");
  // }
  return (
    <>
      <nav className="flex justify-center space-x-4">
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
        <NavLink to="/detail" className={({ isActive }) => isActive ? "active" : ""}>Tasks</NavLink>  
      </nav>    
      <RoutesPosts />
    </>
  )
}

export default App
