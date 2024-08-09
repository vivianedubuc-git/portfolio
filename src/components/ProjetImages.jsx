import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProjetImages = ({ projet }) => {
    const [index, setIndex] = useState(0);
    const handleClickLeft = () => {
        if (index - 1 < 0) setIndex(projet.img.length - 1);
        else setIndex(index - 1);
    }
    const handleClickRight = () => {
        if (index + 1 >= projet.img.length) setIndex(0);
        else setIndex(index + 1);
    }

    return (
        <section>
            <div className="row-multislide">
                <img src={projet.img[index]} alt="" />
                <button className="multislide-menu-left" onClick={() => handleClickLeft()}><AiOutlineArrowLeft /></button>
                <button className="multislide-menu-right" onClick={() => handleClickRight()}><AiOutlineArrowRight /></button>
            </div>
            <div className="content">
                <header>
                    <h4>{projet.titre}</h4>
                </header>
                <p><strong>Éléments importants:</strong></p>
                <ul>
                    {projet.competences.map((c, i) => (
                        <li key={i}>{c.competence}</li>
                    ))}
                </ul>
                <p><strong>Langages et logiciels:</strong></p>
                <ul>
                    {projet.langages.map((l, i) => (
                        <li key={i}>{l.langage}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjetImages;