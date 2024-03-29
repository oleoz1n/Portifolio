import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Resume from "./components/resume";
import Sobremim from "./components/sobremim";
import Portifolio from "./components/portifolio";
import Contato from "./components/contato";
import ScrollPage from "./components/backtop";
import Habilidades from "./components/habilidades";

function App() {
    return (
        <>
            <Header />
            <Resume />
            <Sobremim />
            <Habilidades />
            <Portifolio />
            <Contato />
            <ScrollPage />
            <Footer />
        </>
    );
}

export default App;
