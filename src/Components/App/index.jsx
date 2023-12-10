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
import { createTheme, ThemeProvider } from "@mui/material";

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

    return (
        <ThemeProvider theme={theme}>
            <Suspense>
                <Router>
                    <Routes>
                        <Route path="/" element={<Indicators />}></Route>
                        <Route
                            path="/indicators"
                            element={<Indicators />}
                        ></Route>
                        <Route path="/map" element={<Map />}></Route>
                        <Route path="/history" element={<History />}></Route>
                        <Route path="/events" element={<Events />}></Route>
                        <Route
                            path="/documents"
                            element={<Documents />}
                        ></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                        <Route path="/database" element={<Database />}></Route>
                        {/* <Route path="/about" element={<NotFound/>}></Route>  */}
                    </Routes>
                </Router>
            </Suspense>
        </ThemeProvider>
    );
}
export default App;
