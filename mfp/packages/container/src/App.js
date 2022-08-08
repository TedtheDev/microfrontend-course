import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';

const AuthLazy = lazy(() => import('../components/AuthApp'));
const MarketingLazy = lazy(() => import('../components/MarketingApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

// My App
export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Suspense fallback={<ProgressBar />}>
                        <Switch>
                            <Route path="/auth" component={AuthLazy} />
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                   
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}