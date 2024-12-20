abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

class Instagram2 extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("Sepia1`");
  }

  // we can also override it
  // getReelTime(): number {
  //   return 7;
  // }
}

const kashif = new Instagram2("test", "TEST", 3);

//  we can acces the method
// kashif.getReelTime()

export {};
