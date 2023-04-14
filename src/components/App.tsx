import './App.scss'
import Header from "./Header";
import AppRouter from "../router/AppRouter";
import Footer from "./Footer";

function App() {

    return (
        <div className="App">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}

export default App
