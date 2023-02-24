import React, { useState } from 'react';

export const WordInput = ({onSearch, wordInput}) => {
    
    return (
       
        <>   
            <label htmlFor="word-input">Enter word to be highlighted here</label>
            <input id="word-input" type={"text"} onChange={(e) => onSearch(e.target.value)}  value = {wordInput}/>
        </>
    )
}