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
    const {vehicletype}=useParams();
    const [destination,setDestination]=useState({from:'',to:''});
    const [tripInfo,setTripInfo]=useState([]);
    const [searchResultShown,setSearchResultShown] = useState(false);
    useEffect(()=>{
        const url='https://api.mocki.io/v1/4820104f';
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
        const {from,to,type}=destination;
        const filteredResult=tripInfo.filter(trip=>trip.start===from && trip.end===to && trip.type===vehicletype);
        setDesiredTrip(filteredResult);
        setSearchResultShown(true);
    }
    console.log(desiredTrip);
    console.log(vehicletype);
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
        desiredTrip.map(trip=><ResultTemplate trip={trip}></ResultTemplate>)
    }
        </div>
        <div className="map-container">
        <iframe style={{height:'250%', width:'250%'}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Mohammadpur+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f9a664b9cdd05a747c1d57abb68614b746365db9'></script>
        </div>

        </div>
    );
};

export default SearchResult;