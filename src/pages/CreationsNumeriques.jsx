import Projets from "../components/Projets";
import { motion } from "framer-motion";

const projet = [
    {
        img: "",
        titre: "",
        competences: [
            { competence: "" }
        ],
        langages: [
            { langage: "" }
        ]
    }
];

const CreationsNumeriques = () => {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} id="creationsNumeriques" className="projets">
            <header>
                <h2>Créations numériques</h2>
            </header>
            <article>
                <div className="row-slide">
                    <h3>Titre</h3>
                    <div>
                        <Projets projets={projet}></Projets>
                    </div>
                </div>
            </article>
        </motion.section>
    );
};

export default CreationsNumeriques;