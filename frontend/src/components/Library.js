import React from 'react';
import Music from './Music';
import Podcast from './Podcast';
import All from './All';
import MusicVideo from './MusicVideo';
import Audiobook from './Audiobook';
import ShortFilm from './ShortFilm';
import TvShow from './TvShow';
import Software from './Software';
import Movie from './Movie';
import eBook from './eBook';
import './components.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Library = () => {
    return (
        <div>
            <h3> Browse </h3><br></br>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="All" title="All" >
                    <All />
                </Tab>
                <Tab eventKey="Music" title="Music">
                    <Music />
                </Tab>
                <Tab eventKey="MusicVideo" title="MusicVideo">
                    <MusicVideo />
                </Tab>
                <Tab eventKey="Podcast" title="Podcast" >
                    <Podcast />
                </Tab>
                <Tab eventKey="Movie" title="Movie" >
                    <Movie />
                </Tab>
                <Tab eventKey="ShortFilm" title="ShortFilm" >
                    <ShortFilm />
                </Tab>
                <Tab eventKey="Audiobook" title="Audiobook" >
                    <Audiobook />
                </Tab>
                <Tab eventKey="eBook" title="eBook" >
                    <eBook />
                </Tab>
                <Tab eventKey="TvShow" title="TvShow" >
                    <TvShow />
                </Tab>
                <Tab eventKey="Software" title="Software" >
                    <Software />
                </Tab>

            </Tabs>

        </div>
    )

}


export default Library;
