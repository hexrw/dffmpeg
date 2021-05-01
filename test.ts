import { ffmpeg } from "./mod.ts"

Deno.test("Fast encoding test", async () => {
    const process = ffmpeg()
        .execPath("/usr/bin/ffmpeg")
        .input("/home/kubuntu/Documents/deno/project/ffmpeg-stream/big_buck_bunny.mp4")
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
        .output("output.flv")

    await process.run()

    console.log(Deno.resources())
})
