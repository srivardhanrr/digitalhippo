"use client"

import {useState} from "react";
import {PRODUCT_CATEGORIES} from "@/config";
import NavItem from "@/components/NavItem";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<
        null | number
    >(null)
    return (
        <div className={'flex gap-4 h-full'}>
            {PRODUCT_CATEGORIES.map((category, i) => {
                const handleOpen = () => {
                    if (activeIndex === 1) {
                        setActiveIndex(null)
                    }
                    else {
                        setActiveIndex(1)
                    }
                }

                const isOpen = i === activeIndex

                return (
                    <NavItem />
                )
            })}
        </div>
    )
}

export default NavItems;