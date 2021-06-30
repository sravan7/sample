import './App.css'
import React, { Suspense, lazy,useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header  from './Components/Header'
import SideBar from './Components/SideBar'
import AppContainer from "./Components/AppContainer"
import BodyWrapper from "./Components/Common/BodyWrapper"
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
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
    const theme = useTheme()
    const isDownSM = useMediaQuery(theme.breakpoints.down('sm'))
    const [open,setOpen] = useState(false)
    return (
        <Switch>
          <AppContainer>
          <Header handleClick={()=>{setOpen(open=>!open)}} />
          <SideBar open={open} isDownSM={isDownSM} />
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
