import React from 'react';

type Props = {
    id: string;
}

const YoutubeVideos = (props: Props) => {
    return (
        <div>
            <iframe width="921" height="518" src={"https://www.youtube.com/embed/" + props.id}
                    title="DÉBUTER UN POTAGER (Conseils, Fondamentaux, Matériel)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                    web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

export default YoutubeVideos;