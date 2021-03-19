import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ResultTemplate from '../ResultTemplate/ResultTemplate';
import cardbg from '../../images/search-card.png';
import map from '../../images/Map.png';
import './SearchResult.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SearchResult = () => {
    const classes = useStyles();
    const [desiredTrip,setDesiredTrip]=useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const {type}=useParams();
    const [destination,setDestination]=useState({from:'',to:''});
    const [tripInfo,setTripInfo]=useState([]);
    const [searchResultShown,setSearchResultShown] = useState(false);
    useEffect(()=>{
        const url='https://api.mocki.io/v1/46a920e0';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTripInfo(data))
    },[])

    const handleOnBlur=(event)=>{
        if(event.target.name==='start'){
            const updateDestination={...destination};
            updateDestination.from=event.target.value;
            setDestination(updateDestination);
        }
        if(event.target.name==='end'){
            const updateDestination={...destination};
            updateDestination.to=event.target.value;
            setDestination(updateDestination);
        }
    }
    const handleSearchResult=(destination)=>{
        const {from,to}=destination;
        const filteredResult=tripInfo.filter(trip=>trip.start===from && trip.end===to);
        setDesiredTrip(filteredResult);
        setSearchResultShown(true);
    }
    return (
        <div style={{display:'flex'}}>
        <div className="search-result-container">
        { !searchResultShown && <form className={classes.root} noValidate autoComplete="off">
      <TextField fullWidth onBlur={handleOnBlur} name="start" id="standard-basic" label="From" /> <br/>
      <TextField onBlur={handleOnBlur} name="end" id="standard-basic" label="To" /> <br/>
      <Button onClick={()=>handleSearchResult(destination)} variant="contained" color="secondary">Search</Button>
    </form>}
{
    searchResultShown && <div style={{backgroundColor:'red',borderRadius:'20px',padding:'20px',backgroundImage:'cardbg'}}><h4>From: {destination.from}</h4><h4>To:{destination.to}</h4></div>
}
    {
        desiredTrip.map(trip=><ResultTemplate vehicleType={type} trip={trip}></ResultTemplate>)
    }
        </div>
        <div className="map-container">
        <img src={map} alt=""/>
        </div>

        </div>
    );
};

export default SearchResult;