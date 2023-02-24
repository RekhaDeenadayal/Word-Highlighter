import React, { useEffect, useRef, forwardRef} from 'react';

export const ParagraphInput = forwardRef(({ onParaUpdate}, pararef) => {    

    // useEffect(()=>{
    //     pararef.current.innerHTML = highlightedContent;
    // },[highlightedContent])

    return (
        <>
            Enter paragraph here
            <div ref={pararef} id="paragraph-input" contentEditable onKeyUp={(e) => onParaUpdate(e.target.innerText)}>
            </div>
            
        </>
    )
})