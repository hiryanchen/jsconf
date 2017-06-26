enum MediaType {
    VIDEO,
    AUDIO,
    IMAGE
}

type Media =
    { kind: MediaType.VIDEO, bitrate: number, width: number, height: number } |
    { kind: MediaType.AUDIO, bitrate: number} |
    { kind: MediaType.IMAGE, width: number, height: number };

function getResolutionArea(media : Media):number {
  switch (media.kind) {
    case MediaType.VIDEO:
      return media.width * media.height;
    case MediaType.AUDIO:
      return 0;
    case MediaType.IMAGE:
      return media.width * media.height;
  }
  throw new Error("Unexpected media!");
}
