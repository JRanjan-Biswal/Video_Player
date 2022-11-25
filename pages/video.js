import { useState } from 'react';
import VideoPlayer from '../Components/VideoPlayer';

export default function Video() {
    const [page, setPage] = useState(1)
    const videoData = [
        { id: 1, data: "/1.mp4", title: "BATHROOM BREAKKE BAAD" },
        { id: 2, data: "/2.mp4", title: "Lorem ipsum" },
        // { id: 3, data: "/3.mp4", title: "dolor lorem ipsum" },
        // { id: 4, data: "/4.mp4", title: "hello world it is a test" },
        // { id: 5, data: "/5.mp4", title: "test" }
    ]

    const nextButtonClicked = () => {
        const video = document.querySelector('video');
        video.load();
        if(page == videoData.length) {
            console.log(page)
            setPage(1);
            return;
        }
        setPage(page + 1)
    }

    return (
        <div>
            <VideoPlayer videoData={videoData[page - 1]} nextButtonClicked={nextButtonClicked} />
        </div>
    )
}