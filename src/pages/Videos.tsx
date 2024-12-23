/* eslint-disable react/no-unescaped-entities */
import YoutubeVideos from "../Components/YoutubeVideos";


const Videos = () => {
    return (
        <div className={"container mx-auto mb-24"}>
            <h1>Quelques vidéos sur l'entretien d'un potager</h1>
            <div className="grid grid-cols-2 gap-[10%]">
                <YoutubeVideos id={"NSUQO5PX0EE"} className={"w-full"}/>
            </div>
        </div>
    );
};

export default Videos;