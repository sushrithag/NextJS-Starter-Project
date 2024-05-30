export default function Page() {
    return (<>
        <div className="max-w-2xl p-8">
            <h1 className="font-semibold text-fuchsia-600 text-xl pb-3 tracking-wide">INTRODUCING...</h1>
            <p className="pb-6 text-5xl font-bold text-gray-900 tracking-tight">Tailwind stories.</p>

            <ul className="flex space-x-4">
                <li className="flex flex-col items-center">
                    <div className="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1 mb-3">
                        <a className="block bg-white p-1 rounded-full" href="#">
                            <img className="hover:rotate-3 transform h-24 w-24 rounded-full " src="https://placekitten.com/200/200" alt="cute cat" />
                        </a>
                        <button className="absolute right-1 bottom-1 h-8 w-8 bg-blue-500 hover:bg-blue-700 font-bold text-white text-2xl rounded-full font-mono border-white border-4 flex items-center justify-center">+</button>
                    </div>
                    <a>You</a>
                </li>
                <li className="flex flex-col items-center">
                    <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1 mb-3">
                        <a className="block bg-white p-1 rounded-full" href="#">
                            <img className="hover:rotate-3 transform h-24 w-24 rounded-full " src="https://placekitten.com/300/200" alt="cute cat" />
                        </a>
                    </div>
                    <a>Bunny</a>
                </li>
                <li className="flex flex-col items-center">
                    <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1 mb-3">
                        <a className="block bg-white p-1 rounded-full" href="#">
                            <img className="hover:rotate-3 transform h-24 w-24 rounded-full " src="https://placekitten.com/200/300" alt="cute cat" />
                        </a>
                    </div>
                    <a>Cunny</a>
                </li>
                <li className="flex flex-col items-center">
                    <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1 mb-3">
                        <a className="block bg-white p-1 rounded-full" href="#">
                            <img className="hover:rotate-3 transform h-24 w-24 rounded-full " src="https://placekitten.com/300/300" alt="cute cat" />
                        </a>
                    </div>
                    <a>Sunny</a>
                </li>
            </ul>
        </div>
    </>);
}