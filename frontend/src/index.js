import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import App from "./App";
import StepOne from "./components/routes/StepOne";
import SelectUniversities from "./components/routes/SelectUniversities";
import SelectFaculties from "./components/routes/SelectFaculties";
import StepTwo from "./components/routes/StepTwo";
import SelectSubjects from "./components/routes/SelectSubjects";
import SelectCurriculum from "./components/routes/SelectCurriculum";
import EnterGrades from "./components/routes/EnterGrades";
import DisplayPrograms from "./components/routes/DisplayPrograms";

ReactDOM.render(

    <React.StrictMode>

        <BrowserRouter>

            <Routes>

                <Route path="/" element={ <App /> } />
                <Route path="stepone" element={ <StepOne />} />
                <Route path="selectuniversities" element={ <SelectUniversities /> } />
                <Route path="selectfaculties" element={ <SelectFaculties /> } />
                <Route path="steptwo" element={ <StepTwo /> } />
                <Route path="selectcurriculum" element={ <SelectCurriculum /> } />
                <Route path="selectsubjects" element={ <SelectSubjects /> } />
                <Route path="entergrades" element={ <EnterGrades /> } />
                <Route path="displayprograms" element={ <DisplayPrograms /> } />

                <Route path="*" element={ <h1 className="mt-10 text-center font-semibold text-2xl">There's nothing here!</h1> }/>

            </Routes>

        </BrowserRouter>

    </React.StrictMode>,

    document.getElementById("root")

);
