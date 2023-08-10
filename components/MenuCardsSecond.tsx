import React from 'react';
import MenuCard from "@/components/MenuCard";

const MenuCardsSecond = () => {
    return (
        <div className={'px-48 py-20'}>
            <div className={'flex justify-center gap-4'}>
                <MenuCard direction={''}/>
                <MenuCard direction={'-'}/>
                <MenuCard direction={''}/>
            </div>
        </div>
    );
};

export default MenuCardsSecond;