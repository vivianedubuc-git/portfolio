import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const APropos = () => {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} id="aPropos">
            <article className="content">
                <h2>À propos</h2>
                <h3><span>Étudiante passionnée</span> par le domaine du jeu vidéo!</h3>
                <p>Je suis une intégratrice multimédia débutant sa <strong>première année de formation en DEC-BAC de création de jeux vidéo</strong> à l'UQAT. J'ai de l'intérêt pour la réalisation de jeux vidéo et j'ai de l'expérience avec C# dans Unity. Je veux être en mesure d'évaluer ma capacité à intégrer le marché du travail dans un domaine lié aux jeux vidéo.</p>
                <p><strong>Intéressée par l'innovation du jeu vidéo et les technologies émergentes</strong>, mon but est d'étoffer mes connaissances concernant le multimédia et tout ce qu'il a à offrir. Je désire contribuer à des projets concrets, rejoindre des équipes dynamiques et acquérir de nouvelles compétences.</p>
                <p>Je crois fermement que le multimédia demeure une solution efficace pour communiquer et partager de l'information à grande échelle. Je suis ouverte à toutes discussions concernant des emplois, le domaine du multimédia ou les technologies de l'information et de la communication.</p>
                <a href="/files/CV.pdf" target="_blank">Mon CV <FaFilePdf /></a>
            </article>
            {/* <article>
                <img src="/images/Viviane.jpg" alt="" />
            </article> */}
        </motion.section>
    );
};

export default APropos;