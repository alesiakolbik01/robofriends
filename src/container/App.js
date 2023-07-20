import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { requestRobots } from '../actions.js'

import MainTitle from '../components/MainTitle.js';
import CardList from '../components/CardList.js';
import Search from '../components/Search.js';
import Loader from '../components/Loader.js';
import ErrorBoundary from '../components/ErrorBoundary.js';


import '../css/App.css';

const mapStateToProps = state => {
    return {
        searchTerm: state.searchRobots.searchTerm,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPerding,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = ({ onRequestRobots, robots, searchTerm, isPending}) => {

    useEffect(() => {
        onRequestRobots();
       
    }, [])

    return (
        <div className="tc hl-100">
            <div className = {'header sticky'} >
                <MainTitle title = {'Robofriends'} />
                <Search />
            </div>
            { isPending ? <Loader/> : 
                <div className={'container'}>
                    <ErrorBoundary>
                        <CardList robots = { robots.filter(user => {
                                return user.name.toLowerCase().includes(searchTerm.toLowerCase())
                            })
                        } />
                   </ErrorBoundary>
                </div>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);