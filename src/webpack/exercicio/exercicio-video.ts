interface VideoPlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    pauseButton: HTMLButtonElement;
}

interface VideoPlayerButtons {
    play(): void;
    stop(): void;
    events(): void;
}

export default class VideoPlayer implements VideoPlayerElements, VideoPlayerButtons {
    videoPlayer = document.querySelector(".video") as HTMLVideoElement;
    playButton = document.querySelector(".play") as HTMLButtonElement;
    pauseButton = document.querySelector(".stop") as HTMLButtonElement;
    constructor() {
        this.events();
    }

    play(): void {
        if (this.playButton.innerText === "Stop") {
            this.playButton.innerText = "Play";
            this.videoPlayer.pause();
        } else {
            this.playButton.innerText = "Stop";
            this.videoPlayer.play();
        }
    }
    stop(): void {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
    }
    events(): void {
        this.playButton.addEventListener("click", () => this.play());
        this.pauseButton.addEventListener("click", () => this.stop());
    }
}

const player = new VideoPlayer();
