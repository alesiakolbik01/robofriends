import React, { useEffect, useState } from "react";
import MainTitle from './MainTitle';
import CardList from './CardList';
import Search from './Search';
import Loader from './Loader';
import ErrorBoundary from './ErrorBoundary';
import '../css/App.css'

const App = () => {
    const [robotsState, setRobotsState] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeInput = (value) => {
        setSearchTerm(value);
    }

    const getUsersList = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        return await resp.json();
    }

    useEffect(() => {
        let ignore = false;
        setIsLoading(true);
        getUsersList().then(users => {
            if (!ignore) {
                setRobotsState(users);
                setIsLoading(false);
            }
        });
        
        return () => {
            ignore = true;
        };
      }, []);

    return (
        <div className="tc hl-100">
            <div className = {'header sticky'} >
                <MainTitle title = {'Robofriends'} />
                <Search handleChangeInput = { handleChangeInput } searchTerm = { searchTerm } />
            </div>
            {isLoading ? <Loader/> : 
                <div className={'container'}>
                    <ErrorBoundary>
                        <CardList robots = { robotsState.filter(user => {
                                return user.name.toLowerCase().includes(searchTerm.toLowerCase())
                            })
                        } />
                   </ErrorBoundary>
                </div>
            }
        </div>
    )
}

export default App;