import ProjetImages from "../components/ProjetImages";
import Projet from "../components/Projet";
import { motion } from "framer-motion";

const projets = [
    {
        img: ["images/Sarcophagus1.jpg", "images/Sarcophagus2.jpg"],
        titre: "Sarcophagus",
        sousTitre: "Prototype d'un RPG",
        competences: [
            { competence: "Rôle technique de programmeur" },
            { competence: "Importance de transmettre l'essence d'un jeu" }
        ],
        langages: [
            { langage: "C# dans Unity" }
        ]
    }
];
const projet = {
    img: "images/Tarot.jpg",
    titre: "Tarot",
    sousTitre: "Recherche-création sur le roman vidéoludique",
    competences: [
        { competence: "Rôle de concepteur narratif" },
        { competence: "Expérience documentée dans un journal de bord" }
    ],
    langages: [
        { langage: "Python dans Ren'Py" }
    ]
};

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
                <div className="row-slide">
                    <h3>{projet.titre}</h3>
                    <div>
                        <Projet projet={projet}></Projet>
                    </div>
                </div>
            </article>
        </motion.section>
    );
};

export default JeuxVideo;