/* eslint-disable react/no-unescaped-entities */
import YoutubeVideos from "../Components/YoutubeVideos";
import "../css/Videos.css"

const Videos = () => {
    return (
        <div>
            <h1>Quelques vidéos sur l'entretien d'un potager</h1>
            <div className="videos">
                <YoutubeVideos id={"NSUQO5PX0EE"}/>
            </div>
        </div>
    );
};

export default Videos;