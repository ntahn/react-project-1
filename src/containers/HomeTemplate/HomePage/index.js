import React from 'react';
import Advertise from '../../../components/Advertise';
import Carousel from '../../../components/Carousel';
import News from '../../../components/News';
import SearchBar from '../../../components/SearchBar';
import ListMovie from '../../../components/ListMovie';
import CinemaTable from '../../../components/CinemaTable';

export default function HomePage() {

    return (
        <div>
            <div>
                <Carousel />
                <SearchBar />
                <ListMovie />
                <CinemaTable />
                <News />
                <Advertise />
            </div>
        </div>
    )
}


