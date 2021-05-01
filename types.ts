export interface Args {
    input: string
    output: string

    format?: string
    videoCodec?: string
    audioCodec?: string
    videoBitrate?: string
    audioBitrate?: string
    frameRate?: number
    bufsize?: string
    preset?:
        "veryslow"
        | "slower"
        | "slow"
        | "medium"
        | "fast"
        | "faster"
        | "veryfast"
        | "superfast"
        | "ultrafast"
    crf?:
        0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
        | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27
        | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
        | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51
    strict?: "experimental" | "unofficial" | "normal" | "strict" | "very"
    errDetect?: "crccheck" | "bitstream" | "buffer" | "explode" | "ignore_err" | "careful" | "compliant" | "aggresive"
    map: unknown[]
    threads?: number
    banner?: boolean
    copy?: boolean
    copyVideo?: boolean
    copyAudio?: boolean
    noVsync?: boolean
    deinterlace?: boolean
    removeAudio?: boolean
    overwrite?: boolean
    metadata?: object
    maxRate?: string
    gop?: number
    videoSize?: string
    rotate?: 0 | 1 | 2 | 3 | "cclock_flip" | "clock" | "cclock" | "clock_flip"
    tune?:
        "film" | "animation" | "grain" | "stillimage"
        | "fastdecode" | "zerolatency" | "psnr" | "ssim"
    videoFilter?: string
    timeOffset?: string
    duration?: number
}
