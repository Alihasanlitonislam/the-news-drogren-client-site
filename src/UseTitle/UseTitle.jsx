import React, { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} catagiris `
    },[title])
};

export default UseTitle;