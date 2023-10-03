import './App.css';
import React from 'react';
import News from './component/News';
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/General" element={<News key="general" pageSize={5} country="in" category="general" />} />
          <Route path="/Sports" element={<News key="sports" pageSize={5} country="in" category="sports" />} />
          <Route path="/Business" element={<News key="business" pageSize={5} country="in" category="business" />} />
          <Route path="/Science" element={<News key="science" pageSize={5} country="in" category="science" />} />
          <Route path="/Health" element={<News key="health" pageSize={5} country="in" category="health" />} />
          <Route path="/Entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />} />
          <Route path="/Technology" element={<News key="technology" pageSize={5} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;








// // import logo from './logo.svg';
// import './App.css';

// import React, { Component } from 'react';


// import News from './component/News';
// import NavBar from './component/NavBar';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// // import NewsItem from './component/NewsItem';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//         <NavBar/>
//         <Switch>
//           <Route exact path="/Generral"><News pageSize={5} country='in' category= "Generral"/></Route>
//           <Route exact path="/Sports"><News pageSize={5} country='in' category= "Sports"/></Route>
//           <Route exact path="/Business"><News pageSize={5} country='in' category= "Business"/></Route>
//           <Route exact path="/Science"><News pageSize={5} country='in' category= "Science"/></Route>
//           <Route exact path="/Health"><News pageSize={5} country='in' category= "Health"/></Route>
//           <Route exact path="/Entertainment"><News pageSize={5} country='in' category= "Entertainment"/></Route>
//           <Route exact path="/Technology"><News pageSize={5} country='in' category= "Technology"/></Route>
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
// }

