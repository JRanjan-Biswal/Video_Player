import { useEffect, useState, useRef } from 'react';
import styles from './VideoPlayer.module.css';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { RiVolumeDownLine, RiVolumeMuteLine, RiCloseFill, RiSkipForwardMiniFill, RiArrowRightCircleFill } from "react-icons/ri";
import Link from 'next/link';

const VideoPlayer = ({ videoData, nextButtonClicked }) => {

    const [pause, setPause] = useState(1);
    const [time, setTime] = useState(0);
    const [mute, setMute] = useState(false);
    const [exactTime, setExactTime] = useState(0);  // total time of video
    const [timelineClicked, setTimeLineClicked] = useState(false)
    const ref = useRef(null);
    const timeJuice = useRef(null);

    const playAndPause = (event) => {
        // using ref to target video element
        const videoNode = ref.current;
        videoNode.paused ? videoNode.play() : videoNode.pause();
        setPause(pause == 1 ? 0 : 1)
    }

    useEffect(() => {
        let videoElement = ref.current;
        videoElement.addEventListener('loadeddata', () => {
            timeJuice.current.style.setProperty('--video-progress', 0);
            videoElement.muted = false;
            setMute(false);
            setPause(true);
            // setExactTime(videoElement.duration)
            // formatDuration(videoElement.duration);
            formatDuration()
        })
        return () => videoElement.removeEventListener('loadeddata', () => {
            formatDuration()
        })
    }, [])

    const loadingZeroFormatter = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 })

    const formatDuration = (percent) => {
        let currentTime = ref.current.currentTime;
        let totalTime = ref.current.duration;
        if (timelineClicked) {
            currentTime = percent * totalTime;
        }
        let ended = ref.current.ended
        let time = (ended || currentTime == 0) ? totalTime : (currentTime);
        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60) % 60;
        setTime(`${loadingZeroFormatter.format(minutes)}:${loadingZeroFormatter.format(seconds)}`)
    }

    // on video pause and also sets video timeline juice
    useEffect(() => {
        let videoTimer;
        let currentTime = exactTime == 0 ? (ref.current.duration * 1000) : exactTime;
        let video = ref.current;
        formatDuration()
        if (video.ended) {
            currentTime = video.duration;
            timelineUpdate()
            setExactTime(currentTime)
            setPause(true);
            setMute(false);
            video.muted = false;
            // if video is ended then the add the dark background to the video -> in css there is before and after css psuedo elemnts that are used to add a background color
            // when the video is paused or ended
            let childContainer = document.getElementsByClassName('childContainer')[0];
            childContainer.style.setProperty('--opacity-onPause', 1);

            return () => clearTimeout(videoTimer);
        }
        if (pause == true) return;

        videoTimer = setTimeout(() => {
            setExactTime(currentTime - 1);
            timelineUpdate()
        }, 1);

        // const timeline = timeJuice.current;
        // timeline.addEventListener('mousemove', timelineUpdate)

        return () => clearTimeout(videoTimer)

    }, [exactTime, pause])


    // timeline juice 
    const timelineUpdate = (e) => {
        let percent = (Math.ceil(ref.current.currentTime * 1000) / Math.ceil(ref.current.duration * 1000));
        timeJuice.current.style.setProperty('--video-progress', percent);
    }


    const muteOnClick = (event) => {
        if (pause == true) return
        const video = ref.current;
        video.muted = !mute;
        setMute(!mute);
    }

    const newTimeLine = (e) => {
        const video = ref.current;
        const rect = timeJuice.current.getBoundingClientRect();
        let percent = Math.min(Math.max(0, e.nativeEvent.x - rect.x), rect.width) / rect.width;
        timeJuice.current.style.setProperty('--video-progress', percent);
        // formatDuration(percent)
        let totalTime = ref.current.duration;
        let time = percent * totalTime
        ref.current.currentTime = time
        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60) % 60;
        setTime(`${loadingZeroFormatter.format(minutes)}:${loadingZeroFormatter.format(seconds)}`)
        return
    }

    // onMouse move controls opacity of controls, next button, talk to expert container --> using '--opacity-onPause' css variable
    const controlsOpacityControlOnMouseMove = () => {
        let controlsContainer = document.getElementsByClassName('controls')[0];
        let childContainer = document.getElementsByClassName('childContainer')[0];
        console.log(childContainer.style.opacity = 1)
        if (pause) {
            controlsContainer.style.opacity = 1;
            childContainer.style.setProperty('--opacity-onPause', 1)
            return
        }
        controlsContainer.style.opacity = 1;
        childContainer.style.setProperty('--opacity-onPause', 1)
        setTimeout(() => {
            if (ref.current.paused == false) {
                controlsContainer.style.opacity = 0;
                childContainer.style.setProperty('--opacity-onPause', 0)
            }
        }, 4000);
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.childContainer} childContainer`}>

                <video className={styles.video} ref={ref}>
                    <source src={videoData.data} type="video/mp4" />
                </video>

                <div className={`${styles.controlsContainer} controls`} style={{ opacity: pause ? "1" : "" }}
                    onMouseMove={controlsOpacityControlOnMouseMove}
                >

                    <div className={styles.header}>
                        <div className={styles.title}><h2>{videoData.title}</h2></div>
                        <div className={styles.muteAndCloseButton}>
                            <div className={styles.muteButton} onClick={muteOnClick}>
                                {mute ? <RiVolumeMuteLine /> : <RiVolumeDownLine />}
                            </div>
                            <div className={styles.veticalLine}></div>
                            <Link href='/' >
                                <div className={styles.closeButton}>
                                    <RiCloseFill />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <div onClick={playAndPause}>{!pause ? <FaPauseCircle /> : <FaPlayCircle />}</div>
                        <div onClick={nextButtonClicked} className={styles.nextButtonMobileView}><RiSkipForwardMiniFill /></div>
                    </div>


                </div>
                <div className={styles.timelineContainer}>
                    <div className={styles.timeline} onMouseDown={(event) => { newTimeLine(event) }} ref={timeJuice}>
                        <div className={styles.timelineCircle}></div>
                    </div>
                    <div className={styles.duration}>{time}</div>
                </div>

                <div className={styles.nextButton} onClick={nextButtonClicked}>
                    <div className={styles.nextLogo}>
                        <RiSkipForwardMiniFill />
                    </div>
                    <div className={styles.nextWord}>
                        <div>UP Next</div>
                        <div>Your Weight You Loose</div>
                    </div>
                </div>

                <div className={styles.talkToExpertContainer}>
                    <div className={styles.freeButton}>FREE</div>
                    <div className={styles.talktoExpertChildContainer}>
                        <div>
                            <div><RiArrowRightCircleFill /></div>
                            <div>Talk to an Expert</div>
                        </div>
                        <div>
                            Re-directs to third-party website, we don’t control or take responsibility for accuracy, practices or standards of the same
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default VideoPlayer;