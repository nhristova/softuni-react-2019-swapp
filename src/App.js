import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { pages } from "./Components";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* <Appbar navs={demos} /> */}
                <div className="container">
                    <Switch>
                        {pages.map(({ path, component }) => (
                            <Route path={path} key={path} component={component} />
                        ))}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
