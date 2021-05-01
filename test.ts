import { ffmpeg } from "./mod.ts"

// Create `test_output/`
// Create your own testing assets and change the input options

//Deno.test("Fast encoding test", async () => {
    const process = ffmpeg()
        .execPath("/usr/bin/ffmpeg")
        .input("test_assets/big_buck_bunny.mp4")
        .crf(30)
        .audioBitrate("196k")
        .videoBitrate("2048k")
        .format("flv")
        .bufsize("2M")
        .maxRate("6M")
        .copyAudio()
        .errDetect("careful")
        .threads(2)
        .preset("veryfast")
        .strict("very")
        .rotate(1)
        .metadata({ title: "Title", author: "John Doe" })
        .overwrite()
        .output("test_output/output.flv")

    await process.run()
//})

//Deno.test("Encoding for streaming sites", async () => {
    const process2 = ffmpeg()
        .nativeSourceFrameRate()
        .overwrite()
        .input("test_assets/earth_zoom_in.mov")
        .preset("veryfast")
        .maxRate("3000k")
        .bufsize("6000k")
        .pixelFormat("yuv420p")
        .gop(50)
        .videoCodec("libx264")
        .videoBitrate("3000k")
        .audioCodec("aac")
        .audioBitrate("160k")
        .audioChannels(2)
        .format("flv")
        .output("test_output/output1.flv")

    await process2.run()

    console.log(Deno.resources())
//})
