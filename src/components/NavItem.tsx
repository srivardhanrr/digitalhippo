import React from 'react';
import {Button} from "@/components/ui/button";
import {PRODUCT_CATEGORIES} from "@/config";

type Category = typeof PRODUCT_CATEGORIES[number]

interface  NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({category, isAnyOpen, handleOpen, isOpen}: NavItemProps) => {
    return (
        <div className={'flex'}>
            <div className={"relative flex items-center"}>
                <Button variant={isOpen ? "secondary" : 'ghost'} className={'gap-1.5'} onClick={handleOpen}>
                    Home
                </Button>
            </div>

        </div>
    )
}

export default NavItem;