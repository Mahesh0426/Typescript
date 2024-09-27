"use strict";
class TakePhoto {
    constructor(
    // The constructor takes three properties: cameraMode, filter, and burst.
    cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // A regular method that can be used by any subclass.
    // It returns the reel time, hardcoded to 8 (possibly representing seconds or frames).
    getReelTime() {
        return 8;
    }
}
// A class 'FacebookCamera' that extends the abstract class 'TakePhoto'.
// This class must implement the abstract methods of 'TakePhoto'.
class FacebookCamera extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst); // Call to the parent class constructor.
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepiaCamera() {
        console.log("Applying sepia filter to Facebook photo");
    }
}
// Create an instance of 'FacebookCamera' with specific parameters.
const camera = new FacebookCamera("landscape", "sepia", 4);
console.log(camera);
// Call the 'getSepiaCamera' method, which applies the sepia filter and logs a message.
camera.getSepiaCamera();
camera.getReelTime();
// const photo = new TakePhoto("landscape", "vinegar" , 4)
