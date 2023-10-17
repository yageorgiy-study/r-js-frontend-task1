import React from 'react';
import './Project.css';

export default function Project({title, description, url}: {title: string, description: string, url: string}){
    return (
        <a className={"Project"} href={url} rel="noopener noreferrer">
            <h6>{title}</h6>
            <p>{description}</p>
        </a>
    );
}