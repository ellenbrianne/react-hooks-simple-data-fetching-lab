import React, { useState, useEffect } from "react";

function App () {

const [dogData, setDogData] = useState("");

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json())
    .then(data => {
        setDogData(data.message);
    })
}, []) 

if (!dogData) {
    return <p>Loading...</p>
}

return (
    <>
     <img src={dogData} alt="A Random Dog" />   
    </>
    )
};


export default App;