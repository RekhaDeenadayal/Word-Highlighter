import React from 'react';

export const IgnoreCaseToggle = ({onChecked}) => {
    return (
        <>
            <label htmlFor="ignore-case">Ignore case?</label>
            <input type="checkbox" id="ignore-case" onChange={(e) => onChecked(e.target.checked)}/>
        </>
    )
}