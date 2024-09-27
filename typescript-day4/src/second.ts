interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
interface Story {
  createStory(): void;
}

class Instagram implements takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
const instagram = new Instagram("Wide", "Vintage", 3);
console.log(instagram);

class Youtube implements takePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}
  createStory(): void {
    console.log("story created successfully");
  }
}
const youtube = new Youtube("Wide", "Vintage", 3, "Short Video");
console.log(youtube);
