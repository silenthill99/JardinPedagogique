const Portfolio = () => {
    document.title = "Portfolio | jardin pédagogique"
    return (
        <div className={"container mx-auto"}>
            <h1 className={"text-center"}>Portfolio</h1>
            <h2 className={"text-center"}>Conférence au tribunal</h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-[10%] mb-24 rounded-xl overflow-hidden">
                {Conference.map((image) => (
                    <a key={image.id} href={image.link} target={"_blank"} className={"relative duration-300 group"}>
                        <img src={image.link} alt={image.alt} className="w-full h-full object-cover"/>
                        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 hidden justify-center items-center text-white text-xl group-hover:flex">
                            Voir la photo
                        </div>
                    </a>
                ))}
            </div>
            <h2 className={"text-center"}>Lieu</h2>
            <div className="grid grid-cols-4 gap-4 mx-[10%] mb-[10%] rounded-xl overflow-hidden">
                {Lieu.map((image) => (
                    <a key={image.id} href={image.link} target={"_blank"} className={"group relative"}>
                        <img src={image.link} alt={image.alt} className={"w-full h-full object-cover"}/>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 text-white hidden justify-center items-center text-xl group-hover:flex">Voir la photo</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

const Conference = [
    {
        link: "1 - 23 mars  - 3e Forum Citoyen Responsabilité écologique.png",
        alt: "Affiche",
        id: 1
    },
    {
        link: "2 - 418171939_1376080656561973_1780255866686462083_n.jpg",
        alt: "Tableau",
        id: 2
    },
    {
        link: "3 - 419044626_1376080719895300_3984056632727648427_n.jpg",
        alt: "Présentation",
        id: 3
    },
    {
        link: "4 - 419324800_1376080636561975_3928395571157246398_n.jpg",
        alt: "Atelier",
        id: 4
    },
    {
        link: "5 - 420203580_1376080626561976_4037523779686633588_n.jpg",
        alt: "Atelier 2",
        id: 5
    },
    {
        link: "6 - 420478381_1376080606561978_873995250332830573_n.jpg",
        alt: "Atelier 3",
        id: 6
    }
]

const Lieu = [
    {
        link: "7 - IMG_20240328_155410.jpg",
        alt: "Cabanon",
        id: 7
    }
]

export default Portfolio;