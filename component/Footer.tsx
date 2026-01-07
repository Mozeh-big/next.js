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
                    <div className="mt-[20] text-gray-600 hover:text-cyan-300">
                        <ul>
                            <li>About us</li>
                            <li>Privacy</li>
                            <li>Contact us</li>
                            <li>Vision and Mission</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-[30]">
                    <div>
                        <h3 className="mt-[15] font-bold text-lg">SOCIAL MEDIA</h3>
                    </div>
                    <div className="mt-[20] text-gray-600 hover:text-cyan-300">
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Github</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-[30]">
                    <div>
                        <h3 className="mt-[15] font-bold text-lg">FOCUS AREA</h3>
                    </div>
                    <div className="mt-[20] text-gray-600 hover:text-cyan-300">
                        <ul> 
                            <li>Events</li>
                            <li>Upcoming Events</li>
                            <li>Roadmap</li>
                            <li>Learning links</li>
                            <li>Results</li>
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