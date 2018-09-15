import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'
import { Header } from './components/Header';
import Location from './components/Location';
import Title from './components/Title';
import Weather from './components/Weather';

import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/Title" component={Title} />
                    <Route path="/Location" component={Location} />
                    <Route path="/Weather" component={Weather} />
                    <Redirect from='*' to='/' />
                </main>
            </div>
        </BrowserRouter>

    );
}