import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const SearchResult = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const {type}=useParams();
    return (
        <div>
            <h1>{loggedInUser.name} has choosen {type}</h1>
        </div>
    );
};

export default SearchResult;