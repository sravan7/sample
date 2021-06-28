import './App.css'
import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header  from './Components/Header'
import SideBar from './Components/SideBar'
import AppContainer from "./Components/AppContainer"
import BodyWrapper from "./Components/Common/BodyWrapper"

const Home = lazy(() => import('./Pages/Home'))
const Login = lazy(() => import('./Pages/Login'))
const Loading = () => (
    <div
        style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        Loading...
    </div>
)
function App() {
    return (
        <Switch>
          <AppContainer>
          <Header />
          <SideBar />
          <BodyWrapper>
            <Route
                exact
                path="/"
                render={(props) => (
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                )}
            />
            <Route
                exact
                path="/home"
                render={(props) => (
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                )}
            />
            <Route
                exact
                path="/login"
                render={(props) => (
                    <Suspense fallback={<Loading />}>
                        <Login />
                    </Suspense>
                )}
            />
            </BodyWrapper>
          </AppContainer>
        </Switch>
    )
}

export default App
