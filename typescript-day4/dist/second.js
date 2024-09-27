"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
const instagram = new Instagram("Wide", "Vintage", 3);
console.log(instagram);
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("story created successfully");
    }
}
const youtube = new Youtube("Wide", "Vintage", 3, "Short Video");
console.log(youtube);
