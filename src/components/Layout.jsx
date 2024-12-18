import Header from "./Header";
import JeuxVideo from "../pages/JeuxVideo";
import APropos from "../pages/APropos";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="interface">
            <Header></Header>
            <main>
                <APropos></APropos>
                <JeuxVideo></JeuxVideo>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;