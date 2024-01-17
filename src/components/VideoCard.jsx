import { forwardRef } from "react";

const VideoCard = forwardRef((props, ref) => {

    const { video } = props;

    return (
        <article className="videocard"> 
            <video ref={ref} className="videocard__video" src={video.src} controls muted loop></video>
            <h2 className="videocard_title">{video.title}</h2>
            <p className="videocard_description">{video.desc}</p>
            <hr />
        </article>
    )
})

export default VideoCard;