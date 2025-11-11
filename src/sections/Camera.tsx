import WhiteEfferenceImg from "../assets/white-efference.png"


function Camera() {
    return (
        <div className="md:grid grid-cols-2 justify-evenly items-center gap-x-10 px-5 py-10" id="camera">
            <div className="">
                <p className="text-[26px] text-gray-200">Camera</p>
                <p className="text-5xl mt-3">
                    H-01
                </p>
                <div className="space-y-4 mt-10 text-[18px]">

                    <p>
                        The H-01 is a passive stereo system modeled on the constraints of human vision. Two global-shutter 5 MP sensors capture high-speed RGBD video — 2560×1440 at 30 fps, 1920×1080p at 60 fps, and 1280×720 at 120 fps.
                    </p>

                    <p>
                        A 60 mm baseline, matching human interpupillary distance, is integrated into a 100 × 30 × 30 mm enclosure. A 140° diagonal FOV and HDR imaging provide wide coverage and reliable performance in real-world lighting.
                    </p>


                    <p>
                        To maintain stable depth during motion, the system incorporates dual 400 Hz IMUs that fuse inertial and visual information with extremely low latency. An automotive-grade GMSL2 interface enables long-distance, low-noise transmission to onboard compute.
                    </p>

                    <p>
                        The design philosophy is simple: tasks performed by humans are optimized for the human visual system. H-01 brings that same geometry and sensing strategy to robotics, with state-of-the-art algorithms running directly on the PCB board.
                    </p>

                </div>

                <div className="md:block flex justify-center">
                    <button className="text-black hover:text-white bg-white hover:bg-black hover:border hover:border-white py-3 px-4 font-semibold font-inter transition-colors mt-15 cursor-pointer md:mx-0 mx-auto w-fit">Pre-order</button>
                </div>
            </div>

            <div className="text-[18px] space-y-4 mt-10">
                <img src={WhiteEfferenceImg} alt="" />
            </div>
        </div>
    )
}

export default Camera