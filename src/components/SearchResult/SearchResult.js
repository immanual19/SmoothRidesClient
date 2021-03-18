import React, { useContext } from 'react';
import { UserContext } from '../../App';

const SearchResult = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div>
            <h1>User has choosen {loggedInUser.vehicle}</h1>
        </div>
    );
};

export default SearchResult;