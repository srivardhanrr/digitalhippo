import React from 'react';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={'bg-white sticky z-50 top-0 inset-x-0 h-16'}>
            <header className={"relative bg-white"}>
                <MaxWidthWrapper>
                    <div className={'border-b border-gray-200'}>
                        <div className={'flex items-center h-16'}>
                            {/* TODO: Mobile Nav */}

                            <div className={"ml-4 flex lg:ml-0"}>
                                <Link href={'/'}>
                                    <h1>Hello</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
}

export default Navbar;