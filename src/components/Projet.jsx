const Projet = ({ projet }) => {
    return (
        <section>
            <div className="row-multislide">
                <div className="video">
                    <video src={projet.video} controls></video>
                </div>
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

export default Projet;