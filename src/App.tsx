import React from 'react';
import logo from './logo.svg';
import Link from "./ui/Link";
import './App.css';
import Project from "./ui/Project";

function App() {
    // TODO: вынести тип (?)
    // TODO: вынести в отдельный провайдер информации
    const projects: {
        title: string,
        url: string,
        description: string,
    }[] = [
        {
            title: "Maecenas malesuada",
            url: "#project1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique risus est."
        },
        {
            title: "Donec posuere",
            url: "#project2",
            description: "Praesent vehicula porta erat, id egestas."
        },
        {
            title: "Varius turpis",
            url: "#project3",
            description: "Nulla facilisi. Aliquam laoreet, ipsum at sodales."
        },
        {
            title: "Vestibulum tincidunt",
            url: "#project4",
            description: "Donec tempus placerat ullamcorper."
        },
        {
            title: "Ut interdum",
            url: "#project5",
            description: "Fusce sit amet lacinia elit, eget facilisis risus."
        },
        {
            title: "Morbi a ultrices",
            url: "#project6",
            description: "Praesent tincidunt varius turpis, eu posuere dolor cursus in."
        },
        {
            title: "Nunc finibus",
            url: "#project7",
            description: "Donec efficitur congue justo non varius. "
        },
    ];

    return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
            Имя Фамилия Отчество
            </h1>
        </header>

        <main className="App-main">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Egone quaeris, inquit, quid sentiam? In schola desinis.
            </p>

            <h2>Проекты</h2>

            {projects.map(project => (
                <Project title={project.title} description={project.description} url={project.url}/>
            ))}
        </main>


        <footer className="App-footer">
            <Link linkName={"Github"} url={"#github"}/>
            <Link linkName={"VK"} url={"#vk"}/>
            <Link linkName={"Telegram"} url={"#telegram"}/>
        </footer>
    </div>
    );
}

export default App;
