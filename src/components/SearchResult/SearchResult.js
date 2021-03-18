import React, { useContext } from 'react';
import { UserContext } from '../../App';

const SearchResult = () => {
    const [user,setUser]=useContext(UserContext);
    return (
        <div>
            <h1>User has choosen {user.vehicle}</h1>
        </div>
    );
};

export default SearchResult;