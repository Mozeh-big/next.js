import Link from "next/link"

const year = new Date

export default function Footer() {
    return (
        <footer className=" w-[1260] h-[350] bg-black text-white">

            <div className="flex items-center justify-around">

                <div className="mt-[30]">
                    <div className="mt-[15] font-bold text-lg">
                        <h3>HOME</h3>
                    </div>
                    <div className="mt-[20] text-gray-600 cursor-pointer">
                        <ul>
                            <li className="hover:text-cyan-300 hover:underline hover:scale-[1.05] transition-transform duration-500 origin-left">About us</li>

                            <li className="hover:text-cyan-300 hover:underline hover:scale-[1.05] transition-transform duration-500 origin-left">Privacy</li>

                            <li className="hover:text-cyan-300 hover:underline hover:scale-[1.05] transition-transform duration-500 origin-left">Contact us</li>

                            <li className="hover:text-cyan-300 hover:underline hover:scale-[1.05] transition-transform duration-500 origin-left">Vision and Mission</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-[30]">
                    <div>
                        <h3 className="mt-[15] font-bold text-lg">SOCIAL MEDIA</h3>
                    </div>
                    <div className="mt-[20] text-gray-600 cursor-pointer">
                        <ul>
                            <li className="hover:text-cyan-300 hover:underline hover:scale-[1.05] transition-transform duration-500 origin-left">Facebook</li>

                            <li className="hover:text-cyan-300 hover:underline hover:scale-[1.05] transition-transform duration-500 origin-left">Instagram</li>

                            <li className="hover:text-cyan-300 hover:underline hover:scale-[1.05] transition-transform duration-500 origin-left">Github</li>

                            <li className="hover:text-cyan-300 hover:underline hover:scale-[1.05] transition-transform duration-500 origin-left">LinkedIn</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-[30]">
                    <div>
                        <h3 className="mt-[15] font-bold text-lg">FOCUS AREA</h3>
                    </div>
                    <div className="mt-[20] text-gray-600 cursor-pointer">
                        <ul> 
                            <li className="hover:text-cyan-300 hover:underline transform hover:scale-[1.05] transition-transform duration-500 origin-left">Events</li>

                            <li className="hover:text-cyan-300 hover:underline transform hover:scale-[1.05] transition-transform duration-500 origin-left">Upcoming Events</li>

                            <li className="hover:text-cyan-300 hover:underline transform hover:scale-[1.05] transition-transform duration-500 origin-left">Roadmap</li>

                            <li className="hover:text-cyan-300 hover:underline hover:scale-[1.05] transition-transform duration-500 origin-left">Learning links</li>

                            <li className="hover:text-cyan-300 hover:underline transform hover:scale-[1.05] transition-transform duration-500 origin-left">Results</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-grey-800 mt-8 pt-8 text-center text-gray-600">
                <p> &copy; {year.getFullYear()} Mozeh. All rights reserved.</p>
            </div>
        </footer>

    )
}