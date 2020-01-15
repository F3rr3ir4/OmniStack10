import React, { useState, useEffect } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            err => {
                console.log(err);
            },
            { timeout: 30000 }
        );
    }, []);
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="username_github">
                            Usuário do Github
                        </label>
                        <input
                            name="github_username"
                            id="username_github"
                            required
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required />
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input
                                type="number"
                                name="latitude"
                                id="latitude"
                                required
                                value={latitude}
                                onChange={e => setLatitude(e.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input
                                type="number"
                                name="longitude"
                                id="longitude"
                                required
                                value={longitude}
                                onChange={e => setLongitude(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img
                                src="https://avatars3.githubusercontent.com/u/8379265?s=460&v=4"
                                alt="Leandro Ferreira"
                            />
                            <div className="user-info">
                                <strong>Leandro Ferreira</strong>
                                <span>ReactJS, React Native, NodeJS</span>
                            </div>
                        </header>
                        <p>
                            is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s
                        </p>
                        <a href="https://github.com/F3rr3ir4/">
                            Acessar perfil no github
                        </a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img
                                src="https://avatars3.githubusercontent.com/u/8379265?s=460&v=4"
                                alt="Leandro Ferreira"
                            />
                            <div className="user-info">
                                <strong>Leandro Ferreira</strong>
                                <span>ReactJS, React Native, NodeJS</span>
                            </div>
                        </header>
                        <p>
                            is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s
                        </p>
                        <a href="https://github.com/F3rr3ir4/">
                            Acessar perfil no github
                        </a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img
                                src="https://avatars3.githubusercontent.com/u/8379265?s=460&v=4"
                                alt="Leandro Ferreira"
                            />
                            <div className="user-info">
                                <strong>Leandro Ferreira</strong>
                                <span>ReactJS, React Native, NodeJS</span>
                            </div>
                        </header>
                        <p>
                            is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s
                        </p>
                        <a href="https://github.com/F3rr3ir4/">
                            Acessar perfil no github
                        </a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img
                                src="https://avatars3.githubusercontent.com/u/8379265?s=460&v=4"
                                alt="Leandro Ferreira"
                            />
                            <div className="user-info">
                                <strong>Leandro Ferreira</strong>
                                <span>ReactJS, React Native, NodeJS</span>
                            </div>
                        </header>
                        <p>
                            is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s
                        </p>
                        <a href="https://github.com/F3rr3ir4/">
                            Acessar perfil no github
                        </a>
                    </li>
                </ul>
            </main>
        </div>
    );
}
export default App;
