import React from 'react';

type Props = {
    id: string;
    className?: string;
}

const YoutubeVideos = (props: Props) => {
    return (
        <div className={props.className}>
            <iframe src={"https://www.youtube.com/embed/" + props.id}
                    title="DÉBUTER UN POTAGER (Conseils, Fondamentaux, Matériel)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                    web-share" referrerPolicy="strict-origin-when-cross-origin" className={"w-full h-96"} allowFullScreen></iframe>
        </div>
    );
};

export default YoutubeVideos;