import React from 'react'
import "./App.css";
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'

// Pages
import Classes from "./Pages/Classes"
import Subjects from "./Pages/Subjects"
import Home from './Pages/Home'
import Chapter1 from './Pages/Chapter1'
import LoginScreen from './Pages/LoginScreen';
import ChapterIndexScreen from './Pages/ChapterIndexScreen';
import QuizHome from './Pages/QuizHome'
import Oneword from './Pages/oneword';
import Truefalse from './Pages/truefalse';
import { AuthContextProvider } from './context/AuthContext';
import MatchingActivity from './Pages/MatchingActivity';
import WordSearch from './Pages/WordSearch';
import OddOneOut from './Pages/OddOneOut';

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/classes' element={<Classes/>} />
            <Route path='/class3/subjects' element={<Subjects/>} />
            <Route path='/class3/EVS/chapters' element={<ChapterIndexScreen/>} />
            <Route path='/class3/EVS/chapter1' element={<Chapter1/>} />
            <Route path='/class3/EVS/chapter1/Quiz' element={<QuizHome/>} />
            <Route path='/class3/EVS/chapter1/Quiz/OneWord' element={<Oneword/>} />
            <Route path='/class3/EVS/chapter1/Quiz/TrueFalse' element={<Truefalse/>} />
            <Route path='/class3/EVS/chapter1/Quiz/OddOneOut' element={<OddOneOut/>} />
            <Route path='/class3/EVS/chapter1/Activity1' element={<MatchingActivity/>} />
            <Route path='/class3/EVS/chapter1/Activity2' element={<WordSearch/>} />
        </Route>
    )
)

function App() {
    return(
        <AuthContextProvider>
        <   RouterProvider router={route} />
        </AuthContextProvider>
    )
}

export default App;