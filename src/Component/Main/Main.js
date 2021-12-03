import React from 'react';
import MainHistory from '../MainHistory/MainHistory';
import MainPolls from '../MainPolls/MainPolls';
import Navigationbar from '../Navigationbar/Navigationbar';
import './Main.css';

export default function Main() {
    return (
        <div style={{height:'100vh'}} className="main">
            <Navigationbar/>
            <MainPolls/>
            <MainHistory/>
        </div>
    );
}
