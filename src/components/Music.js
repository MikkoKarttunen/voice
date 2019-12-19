import React, { useState } from 'react';
import '../App.css';



const GigInfo = ({ gigData, addProduct, reduceProduct }) => {
    //console.log(imageData.Title);



    return (
        <div>
            <h3>{gigData.tapahtuman_nimi}</h3>
            <p>{gigData.keikkakuvaus}</p>
            <p>alkamisaika: {gigData.alkamisaika}</p>
            <a href={gigData.linkki}>Keikan sivut</a>
            <p>osoite: {gigData.katuosoite}</p>
            <img src={gigData.keikkamainoskuva}></img>
            <br></br><br></br>
        </div>
    )
}

const GigsInfo = ({ gigData, addProduct, reduceProduct, e }) => {
    const [oldGigs, setOldGigs] = useState(false);
    let filteredGigs = [];

    var today = new Date();

    if(oldGigs){
        filteredGigs = gigData.filter(gigData => new Date(gigData.keikkapaiva) > today)
    } else{
        filteredGigs = gigData.filter(gigData => new Date(gigData.keikkapaiva) < today)
    }
   
        return (
            <tbody>
                <div>
                    {filteredGigs.map(c => (
                        <GigInfo gigData={c} key={c.id} />
                    ))}
                </div>
                <button onClick={e => setOldGigs(false)}>menneet keikat</button><br></br>
                <button onClick={e => setOldGigs(true)}>tulevat keikat</button>
            </tbody>
        )
}




export default GigsInfo;
