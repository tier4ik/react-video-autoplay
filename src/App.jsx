import { useRef } from "react";
import VideoCard from "./components/VideoCard.jsx";
import useVideoAutoplay from "./hooks/useVideoAutoplay.jsx";

const videos = [
  {
    src: "https://excite.videvo.net/videvo_files/video/premium/partners0652/large_watermarked/1697813_preview.mp4",
    title: "Teamwork",
    desc: "Teamwork is always the answer"
  }, 
  {
    src: "https://excite.videvo.net/videvo_files/video/premium/partners0615/large_watermarked/2451926_preview.mp4",
    title: "The finance department",
    desc: "The finance department staying on top of things"
  },
  {
    src: "https://excite.videvo.net/videvo_files/video/premium/partners0651/large_watermarked/1685404_preview.mp4",
    title: "Meetings",
    desc: "Meetings keep everyone in sync"
  },
  {
    src: "https://excite.videvo.net/videvo_files/video/premium/partners0649/large_watermarked/1599697_preview.mp4",
    title: "Right choices",
    desc: "Making the right choices for the company"
  },
];

function App() {

  const videoRefs = [];

  function createMyRef() {
    const videoRef = useRef();
    videoRefs.push(videoRef);
    return videoRef;
  }

  const Videocards = videos.map(video => (
      <VideoCard key={video.title} video={video} ref={createMyRef()} />
  ))

  useVideoAutoplay(videoRefs);
  
  return (
    <>
      <section className="container">
        <h1>Videos list</h1>
        <div className="videocards">
          { Videocards }
        </div>
      </section>
    </>
  )
}

export default App
