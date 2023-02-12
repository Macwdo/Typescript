/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/webpack/exercicio/exercicio-video.ts":
/*!**************************************************!*\
  !*** ./src/webpack/exercicio/exercicio-video.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    videoPlayer = document.querySelector(".video");
    playButton = document.querySelector(".play");
    pauseButton = document.querySelector(".stop");
    constructor() {
        this.events();
    }
    play() {
        if (this.playButton.innerText === "Stop") {
            this.playButton.innerText = "Play";
            this.videoPlayer.pause();
        }
        else {
            this.playButton.innerText = "Stop";
            this.videoPlayer.play();
        }
    }
    stop() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
    }
    events() {
        this.playButton.addEventListener("click", () => this.play());
        this.pauseButton.addEventListener("click", () => this.stop());
    }
}
exports["default"] = VideoPlayer;
const player = new VideoPlayer();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************************!*\
  !*** ./src/webpack/exercicio/index.ts ***!
  \****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// import "./form-validate";
// import "./form-validate-o";
__webpack_require__(/*! ./exercicio-video */ "./src/webpack/exercicio/exercicio-video.ts");
// Campo vazio
// Email correto
// Duas senhas Batem

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map