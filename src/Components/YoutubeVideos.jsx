import React from 'react';
import PropTypes from 'prop-types';

const YoutubeVideos = props => {
    return (
        <div>
            <iframe width="921" height="518" src={"https://www.youtube.com/embed/" + props.id}
                    title="DÉBUTER UN POTAGER (Conseils, Fondamentaux, Matériel)" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                    web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

YoutubeVideos.propTypes = {
    id: PropTypes.string
};

export default YoutubeVideos;