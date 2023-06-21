import React from 'react'
// import Navbar from './NavBar';
import { Button } from "@material-tailwind/react";


const NavBar = () => {

    return (
        <div className="flex w-full component-preview p-4 items-center justify-between font-sans">
            {/* <Navbar> */}
                <div className="flex-none">
                    {/* <Button shape="square" color="ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </Button> */}
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                    <Button className="text-4xl font-bold text-gray-900 "
                            color="ghost"
                            style={{ boxShadow: 'none', border: 'none' }}>
                        SCAPE
                    </Button>
                    <p className="mt-2 text-sm text-gray-500">CREE, VIVE, VIAJA</p>
                </div>


                <div className="flex-none ml-auto">
                    <Button shape="square"
                            color="ghost" 
                            className="focus:outline-none"
                            style={{ boxShadow: 'none', border: 'none' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                        </svg>
                    </Button>
                </div>
            {/* </Navbar> */}
        </div>
    )
};
export default NavBar;
