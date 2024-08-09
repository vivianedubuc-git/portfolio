import Header from "./Header";
import Accueil from "../pages/Accueil";
import JeuxVideo from "../pages/JeuxVideo";
import CreationsNumeriques from "../pages/CreationsNumeriques";
import APropos from "../pages/APropos";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="interface">
            <Header></Header>
            <main>
                <Accueil></Accueil>
                <APropos></APropos>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;