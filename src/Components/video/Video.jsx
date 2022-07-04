import Button from "../common/Button";

import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const startVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} data-testid="video-container" width="400" controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button>
          <button onClick={startVideo}>PLAY</button>
        </Button>
        <Button>
          <button onClick={pauseVideo}>PAUSE</button>
        </Button>
        <Button>
          <button
            onClick={() => {
              const time = videoRef.currentTime;
              videoRef.current.currentTime = time + 30;
            }}
          >
            {" "}
            SKIP 30 SECONDS
          </button>
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
