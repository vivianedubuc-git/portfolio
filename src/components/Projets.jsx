import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Projets = ({ projets }) => {
    const [index, setIndex] = useState(0);
    const handleClickLeft = () => {
        if (index - 1 < 0) setIndex(projets.length - 1);
        else setIndex(index - 1);
    }
    const handleClickRight = () => {
        if (index + 1 >= projets.length) setIndex(0);
        else setIndex(index + 1);
    }

    return (
        <section>
            <div className="row-multislide">
                <div className="video">
                    {projets[index].img.includes("images") ? <img src={projets[index].img} alt="" /> : <video src={projets[index].img} controls></video>}
                </div>
                <button className="multislide-menu-left" onClick={() => handleClickLeft()}><AiOutlineArrowLeft /></button>
                <button className="multislide-menu-right" onClick={() => handleClickRight()}><AiOutlineArrowRight /></button>
            </div>
            <div className="content">
                <header>
                    <h4>{projets[index].sousTitre}</h4>
                </header>
                <p><strong>Éléments importants:</strong></p>
                <ul>
                    {projets[index].competences.map((c, i) => (
                        <li key={i}>{c.competence}</li>
                    ))}
                </ul>
                <p><strong>Langages et logiciels:</strong></p>
                <ul>
                    {projets[index].langages.map((l, i) => (
                        <li key={i}>{l.langage}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projets;