# dffmpeg

## Description

This is a **simple FFmpeg library wrapper** (requires `ffmpeg` to be installed).
The core is an FFmpeg class with methods which have names similar or identical to existing library arguments. On top of that there's also validation and typing included.

## Usage

If we'd want to rotate a video 90 degrees using 2 threads with the veryfast preset while also adding some metadata and we'd have FFmpeg installed and in the path

```ts
import { ffmpeg } from "https://deno.land/x/dffmpeg/mod.ts"
// you can also import the class directly and create a new
// instance of it

const process = ffmpeg()
    .input("big_buck_bunny.mp4")
    .threads(2)
    .preset("veryfast")
    .rotate(1)
    .metadata({ title: "Title", author: "John Doe" })
    .overwrite() // overwrite any existing output files
    .output("output.mp4")

await process.run()
```

## Methods

**Remember to use methods in the same order you would use arguments when running ffmpeg from the command line**! For example if you use a format method before an input method it will apply to that input if you add it after the last input it will apply to the output.

Here's a list of all currently available methods (with example inputs).
If there's a method missing feel free to create an issue of a PR on GitHub-

- `execPath()` - Pass a custom location of the ffmpeg binary
- `input()` - Add an input
- `output()` - Add an output
- `format()` - Set format
- `videoCodec()` - Set video codec
- `audioCodec()` - Set audio codec
- `videoBitrate()` - Set video bitrate
- `audioBitrate()` - Set audio bitrate
- `frameRate()` - Set frameRate
- `bufsize()` - Set buffer size
- `preset()` - Set preset
- `crf()` - Set Constant Rate Factor
- `strict("experimental")` - Set strict
- `errDetect("ignore_err")` - Set error detection level
- `map("1:3")` - *"Designate one or more input streams as a source for the output file"*
- `threads(4)` - Set the amount of threads to use
- `banner()` - Show the banner *(hidden by default)*
- `copy()` - Just copy the input video and audio encoding
- `copyVideo()` - Just copy the input video encoding
- `copyAudio()` - Just copy the input audio encoding
- `rotate(2)` or `rotate("clock")` - Set rotate level
- `tune("film")` - Set tune
- `deinterlace()` - Deinterlace
- `removeAudio()` - Completely remove the audio track
- `removeVideo()` - Extract the audio only
- `overwrite()` - Overwrite any existing output files
- `metadata({ title: "Title", author: "John Doe" })` - Add metadata
- `maxRate("2M")` - Set a limited bitrate
- `gop(30)` - Use a 2 second Group of Pictures (framerate * 2)
- `videoSize()` - Set video size
- `timeOffset(60)` - Add a time offset (in seconds)
- `copyCodec()` - Copy the input codec
- `duration()` - Limit the max time duration
- `scale(1080, 1920)` - Scale the input
- `shortest()` - Finish the encoding when the shortest clip ends.
- `pixelFormat("yuv420p")` - Set a custom pixel format
- `audioChannels(2)` - Set a custom number of audio channels
- `filterComplex("...")` - Add a custom complex filter
- `loop()` or `loop(3)` - Loop an image
- `streamLoop()` - Loop the input
- `nativeSourceFrameRate()` - Use the native frame rate of the source
- `flags("+flag_name")` - Add a flag
