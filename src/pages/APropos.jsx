import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const APropos = () => {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} id="aPropos">
            <article className="content">
                <h2>À propos</h2>
                <h3>Une étudiante <span>animée</span> et <span>inspirée</span></h3>
                <p>En 2021, je débute ma formation en Techniques d'Intégration Multimédia au Cégep de Saint-Jérôme. Je touche à plusieurs sphères du domaine du multimédia comme l'<strong>infographie</strong>, le <strong>design</strong>, l'<strong>animation 2D et 3D</strong>, la production <strong>audio</strong> et <strong>vidéo</strong>, la conception de <strong>sites Web</strong> et de <strong>jeux vidéo</strong>, la <strong>programmation</strong> et la <strong>réalité virtuelle</strong> entre autres. Le Web et le jeu vidéo n'ont plus de secret pour moi. J'y développe aussi mon talent technique à travers la production de plusieurs projets.</p>
                <p>Aujourd'hui, je sais notamment participer à toutes les étapes d'un projet multimédia. De l'<strong>idéation</strong> à la <strong>conceptualisation</strong> sans oublier la <strong>production</strong>, je sais développer des applications, des jeux et des sites Web. Une chose est sûre: c'est dans ce domaine d'avenir que je veux faire carrière.</p>
                <a href="/files/CV.pdf" target="_blank">Mon CV <FaFilePdf /></a>
            </article>
            <article>
                <img src="/images/Viviane.jpg" alt="" />
            </article>
        </motion.section>
    );
};

export default APropos;