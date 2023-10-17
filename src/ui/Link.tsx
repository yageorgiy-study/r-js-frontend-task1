import React from 'react';
import './Link.css';

export default function Link({linkName, url}: {linkName: string, url: string}){
    return (<a className={"Link"} href={url} rel="noopener noreferrer">{linkName}</a>);
}