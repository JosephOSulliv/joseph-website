import React, {useState} from 'react';
import {things} from './things';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const homePage = ({}) => {
    return(
        <div className={'root-container'}>
            <div className={'content-container'}>
                <things
                    words={"hi there"}
                />
            </div>
        </div>
    );
}