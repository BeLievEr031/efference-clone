
export default function Navbar() {
    return (
        <header className="bg-black text-white  items-center py-4">
            <div className="flex justify-center md:justify-between px-2">
                <h1 className="md:text-6xl font-extrabold tracking-tight text-outline-white md:text-center font-roboto text-4xl" >
                    EFFERENCE
                </h1>
                <button className="md:hidden border border-white hover:bg-white hover:text-black px-4 cursor-pointer">Sign-in</button>
            </div>

            <div className="border-t border-t-white mt-5"></div>
            <nav className="mt-4 mx-auto w-fit hidden md:block">
                <ul className="flex gap-x-5 text-lg">
                    <li className="hover:text-black transition-colors cursor-pointer px-4 py-2 hover:bg-white">

                        <a href="#mission">
                            Mission
                        </a>
                    </li>
                    <li className="hover:text-black transition-colors cursor-pointer px-4 py-2 hover:bg-white ">

                        <a href="#model">
                            Model
                        </a>
                    </li>
                    <li className="hover:text-black transition-colors cursor-pointer px-4 py-2 hover:bg-white ">
                        <a href="#camera">
                            Camera
                        </a>
                    </li>
                    <li className="hover:text-black transition-colors cursor-pointer px-4 py-2 hover:bg-white ">
                        <a href="#team">
                            Team
                        </a>
                    </li>
                    <li className="hover:text-black transition-colors cursor-pointer px-4 py-2 hover:bg-white">Sign-in</li>
                </ul>
            </nav>
        </header>
    );
}
