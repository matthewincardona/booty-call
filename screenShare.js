export async function screenShare(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions
    );
  } catch (err) {
    console.log("Screenshare error: ${err}");
  }
  return captureStream;
}
