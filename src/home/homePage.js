import React, {useState} from 'react';
import { Things } from './Things';
import { Image } from './Image';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {TestingPage} from "./TestingPage"
import { NavComponent } from './NavComponent';
//import './index.scss'

export const HomePage = ({}) => {
    return(
        <div className={'root-container'}>
            <div className={'content-container'}>
                <div>
                    <Router>
                        <NavComponent/>

                        <Routes>
                            <Route path={'/'} element={<TestingPage/>}/>
                        </Routes>
                    </Router>
                    {/* <Things
                        words={"hi there"}
                    />
                    <Image
                        image = {"./images/coolGuy.png"}
                        meaning = {"cool guy"}
                    /> */}
                </div>
            </div>
        </div>
    );
}