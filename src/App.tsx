import Navbar from "./sections/Navbar"
import Mission from "./sections/Mission"
import Camera from "./sections/Camera"
import Model from "./sections/Model"
import Team from "./sections/Team"
import Footer from "./sections/Footer"
function App() {
  return (
    <main className="bg-black min-h-screen px-2 md:px-12 text-white">
      <Navbar />
      <div className="relative">
        <video src={"https://efference.ai/videos/compressed.mp4"} muted autoPlay></video>

        <div className="absolute bottom-5 px-2 md:px-10 text-white">
          <div className="">
            <h1 className="text-[22px] md:text-4xl font-bold font-inter leading-tight">We help robots see like humans do</h1>
            <a href="https://www.youtube.com/@Efference" className="text-xl underline">See it in action →</a>
          </div>
          {/* <div>

            <Linkedin />
          </div> */}
        </div>
      </div>
      <div className="border-t border-t-white mt-10"></div>
      <Mission />
      <div className="border-t border-t-white mt-10"></div>
      <Model />
      <div className="border-t border-t-white mt-10"></div>
      <Camera />
      <div className="border-t border-t-white mt-10"></div>
      <Team />
      <div className="border-t border-t-white "></div>
      <Footer />
    </main>
  )
}

export default App