import { useState } from "react"

function Model() {
    const [vsrc, setVsrc] = useState("https://efference.ai/videos/d435i_rgb_web.mp4")
    return (
        <div className="md:grid grid-cols-2 gap-x-10 py-10 font-inter md:space-y-0 space-y-10" id="model">
            <div>
                <p className="text-[26px]">
                    Model
                </p>
                <h1 className="text-[30px] md:text-[42px]">
                    Seeing the world in 3D
                </h1>

                <div className="space-y-4 text-[18px]">
                    <p>
                        Any two-dimensional image is consistent with an infinite number of possible 3D worlds. Determining which world is most likely is the fundamental problem of perception.
                    </p>
                    <p>
                        Our models solve this the way humans do, by selecting the most probable world using every available cue: shadows, perspective, occlusions, and much more. The result is clear, consistent 3D structure that you can actually train robots on.
                    </p>
                    <a href="" className="underline">

                        Learn more about perception →
                    </a>

                </div>

            </div>

            <div>
                <video src={vsrc} autoPlay muted></video>
                <div className="grid grid-cols-3">
                    <div className="text-center flex justify-center items-center hover:bg-white/20 cursor-pointer py-5" onClick={() => setVsrc("https://efference.ai/videos/d435i_rgb_web.mp4")}>RGB</div>
                    <div className="text-center flex justify-center items-center hover:bg-white/20 cursor-pointer py-5" onClick={() => setVsrc("https://efference.ai/videos/d435i_orig_web.mp4")}>Intel</div>
                    <div className="text-center flex justify-center items-center hover:bg-white/20 cursor-pointer py-5" onClick={() => setVsrc("https://efference.ai/videos/d435i_clean_web.mp4")}>Efference</div>
                </div>
            </div>
        </div>
    )
}

export default Model