import ProjetImages from "../components/ProjetImages";
import { motion } from "framer-motion";

const projets = [
    {
        img: [],
        titre: "Jeu",
        competences: [
            { competence: "" }
        ],
        langages: [
            { langage: "" }
        ]
    }
];

const JeuxVideo = () => {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} id="jeuxVideo" className="projets">
            <header>
                <h2>Jeux vidéo</h2>
            </header>
            <article>
                {projets.map((projet) =>
                    <div key={projet.titre} className="row-slide">
                        <h3>{projet.titre}</h3>
                        <div >
                            <ProjetImages projet={projet}></ProjetImages>
                        </div>
                    </div>
                )}
            </article>
        </motion.section>
    );
};

export default JeuxVideo;