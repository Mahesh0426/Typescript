abstract class TakePhoto {
  constructor(
    // The constructor takes three properties: cameraMode, filter, and burst.
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
  // An abstract method that must be implemented by any subclass.
  // In this case, it should provide the logic for applying the sepia camera filter.
  abstract getSepiaCamera(): void;

  // A regular method that can be used by any subclass.
  // It returns the reel time, hardcoded to 8 (possibly representing seconds or frames).
  getReelTime(): number {
    return 8;
  }
}

// A class 'FacebookCamera' that extends the abstract class 'TakePhoto'.
// This class must implement the abstract methods of 'TakePhoto'.
class FacebookCamera extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter, burst); // Call to the parent class constructor.
  }
  getSepiaCamera(): void {
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
