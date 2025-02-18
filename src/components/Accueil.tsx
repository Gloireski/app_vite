import "../App.css"
import useCompteur from "../hooks/useCompteur";
import Button from "./Button";

const Accueil = () => { 
    const { count, handleIncrement, handleDecrement } = useCompteur(0)
    return (
        <div className="p-4 flex flex-col items-center space-y-2">
            <p className="text-xl font-medium">My app's home page</p>
            
                <p>Count: {count}</p>
            <div className="flex flex-row space-x-4">
                <Button onClick={handleIncrement}>Increment</Button>
                <Button onClick={handleDecrement}>Decrement</Button>
            </div>
        </div>
    )
}
export default Accueil;