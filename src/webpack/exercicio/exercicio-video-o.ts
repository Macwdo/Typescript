interface VideoPlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    pauseButton: HTMLButtonElement;
}

interface VideoPlayerButtons {
    play(): void;
    pause(): void;
    events(): void;
}

export default class VideoPlayer implements VideoPlayerElements, VideoPlayerButtons {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    pauseButton: HTMLButtonElement;

    constructor(videoPlayerElements: VideoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.pauseButton = videoPlayerElements.pauseButton;
    }

    play(): void {
        this.videoPlayer.play();
    }
    pause(): void {
        this.videoPlayer.pause();
    }
    events(): void {
        this.playButton.addEventListener("click", () => this.play());
        this.pauseButton.addEventListener("click", () => this.pause());
    }
}

const player = new VideoPlayer({
    videoPlayer: document.querySelector(".video") as HTMLVideoElement,
    playButton: document.querySelector(".play") as HTMLButtonElement,
    pauseButton: document.querySelector(".stop") as HTMLButtonElement,
});
