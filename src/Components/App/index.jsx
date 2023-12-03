import { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import MainPage from "../MainPage";
import Map from "../Map";
import History from "../History";
import Events from "../Events";
import Documents from "../Documents";
import Indicators from "../Indicators";
import Settings from "../Settings/Settings";
import Database from "../DataBase";
import { useState } from "react";
import { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const AppContext = createContext(null);

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                "Manrope",
                "Nunito Sans",
                "-apple-system",
                "BlinkMacSystemFont",
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(","),
        },
    });

    const [width, setWidth] = useState(250);
    const [channels, setChannels] = useState(null);
    const [preloader, setPreloader] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Suspense>
                <AppContext.Provider
                    value={{
                        width,
                        setWidth,
                        channels,
                        setChannels,
                        preloader,
                        setPreloader,
                    }}
                >
                    <Router>
                        <Routes>
                            {/* <Route path="/" element= {<MainPage/>}></Route> */}
                            <Route
                                path="/indicators"
                                element={<Indicators />}
                            ></Route>
                            <Route path="/map" element={<Map />}></Route>
                            <Route
                                path="/history"
                                element={<History />}
                            ></Route>
                            <Route path="/events" element={<Events />}></Route>
                            <Route
                                path="/documents"
                                element={<Documents />}
                            ></Route>
                            <Route
                                path="/settings"
                                element={<Settings />}
                            ></Route>
                            <Route
                                path="/database"
                                element={<Database />}
                            ></Route>
                            {/* <Route path="/about" element={<NotFound/>}></Route>  */}
                        </Routes>
                    </Router>
                </AppContext.Provider>
            </Suspense>
        </ThemeProvider>
    );
}
export default App;
