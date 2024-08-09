import { motion } from "framer-motion";

const Accueil = () => {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} id="accueil">
            {/* <article className="cvvideo">
                <p>Découvrez mon <span>Demo reel</span></p>
                <video src="/videos/CV-Video.mp4" controls></video>
            </article> */}
            <article className="content">
                <p>Je suis une</p>
                <p className="sliding-title">intégratrice multimédia</p>
                <motion.p className="sliding-text" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}>
                    collaborative</motion.p>
                <motion.p className="sliding-text" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 2 } }}>
                    persévérante</motion.p>
                <motion.p className="sliding-text" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 3 } }}>
                    productive</motion.p>
                <motion.p className="sliding-text" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 4 } }}>
                    respectueuse</motion.p>
            </article>
        </motion.section >
    );
};

export default Accueil;