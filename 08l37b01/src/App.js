import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import { generateRandomAppointments, dentistList, assistantList, names } from "./utils";

const randomAppointments = generateRandomAppointments(150);

const App = () => {
  const [appointments, setAppointments] = useState(randomAppointments);
  const [dentists, setDentists] = useState(dentistList);
  const [assistants, setAssistants] = useState(assistantList);
  const [patients, setPatients] = useState(names);

  const addDentist = (state, name, surname, phone, email) => {
    const newId = state.length + 1;
    const newDentist = { id: newId, name, surname, phone, email };

    return [...state, newDentist];
  };

  const handleAddDentist = () => {
    const newDentistsState = addDentist(
      dentists,
      "Toos",
      "Trekker",
      "06-12345678",
      "toos@tandartspraktijkbvt.nl"
    );
    setDentists(newDentistsState);
  };

  // const addPatient = (state, name, surname, phone, email, birth) => {
  //   const newId = state.length + 1;
  //   const newPatient = { id: newId, name, surname, phone, email, birth };
  //   return [...state, newPatient];
  // };

  // const makeDentistSick = (state, dentistId) => {
  //   // find the dentist
  //   const findSickDentist = state.filter((dentist) => {
  //     return dentist.id === dentistId;
  //   });

  //   // get the full name
  //   const sickDentistFullName = `${findSickDentist[0].name} ${findSickDentist[0].surname}`;

  //   // mark the appointments..
  //   const markAppointmentsSick = appointments.map((appointment) => {
  //     return appointment.dentist === sickDentistFullName
  //       ? { ...appointment, sickDentist: true }
  //       : { ...appointment, sickDentist: false };
  //   });
  //   setDentists(markAppointmentsSick); // this works, but the state is not working as it should...
  // };

  // useEffect(() => {
  //   // // Add a new dentist
  //   // const newDentistsState = addDentist(
  //   //   dentists,
  //   //   "Toos",
  //   //   "Trekker",
  //   //   "06-12345678",
  //   //   "toos@tandartspraktijkbvt.nl"
  //   // );
  //   // setDentists(newDentistsState);
  //   // // Add a new patient
  //   // const newPatientsState = addPatient(
  //   //   patients,
  //   //   "Piet",
  //   //   "Auw",
  //   //   "06-12345679",
  //   //   "piet@wincacademy.nl",
  //   //   "1985"
  //   // );
  //   // // setPatients(newPatientsState);
  //   // // Make a dentist sick
  //   // makeDentistSick(dentists, 2);
  //   // console.log("new state sick", newStateSick);
  // }, []);

  // console.log("log before return", dentists);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/calendar">
              <Calendar appointments={appointments} />
            </Route>
            <Route path="/day">
              <Day appointments={appointments.filter((app) => app.day === 1)} />
            </Route>
            <Route path="/">
              <Home />
              <button onClick={() => handleAddDentist()}>Add dentist</button>
              {console.log(dentists)}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
