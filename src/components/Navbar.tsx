import React from 'react'



const Navbar = () => {

    return (
        <div className='w-full '>
            <nav className="flex items-center center bg-black p-6 justify-center">
                <div className=" text-white mr-10 ">
                    <span className="font-extrabold text-xl tracking-tight text-yellow-300 place-content-center ">My website</span>
                </div>
                <div className="block lg:hidden place-content-center">
                    <button className="flex items-center border rounded text-white border-white hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                        </svg>
                    </button>
                </div>
                <div className="lg:flex lg:items-center lg:w-auto ">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-10 font-extrabold">
                            Docs
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-10 font-extrabold">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 font-extrabold">
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        </div>



    )
}

export default Navbar