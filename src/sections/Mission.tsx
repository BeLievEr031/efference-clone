
function Mission() {
    return (
        <div className="md:grid grid-cols-2 justify-evenly items-center gap-x-2 px-5 py-10 md:space-y-0 space-y-10" id="mission">
            <div className="">
                <p className="text-[26px] text-gray-200">Mission</p>
                <p className="text-3xl md:text-5xl">
                    Enabling autonomy through robotic vision you can trust.
                </p>
            </div>

            <div className="text-[18px] space-y-4">
                <p>
                    Robots fail when their cameras fail. The 3D information they need to manipulate and navigate the environment is too often noisy, incomplete, and unreliable. Or, just simply too expensive.
                </p>
                {/* <br /> */}
                <p>
                    Level-5 autonomy, safe household robots, and dependable autonomous drones require vision that works everywhere; robustly, reliably, and like humans. The path forward is the same one humans use: a data-driven approach to perception.
                </p>
                <p>
                    Efference is redefining robotic vision by building the most intelligent cameras on the market.
                </p>
            </div>
        </div>
    )
}

export default Mission