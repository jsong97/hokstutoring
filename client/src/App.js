import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import Videos from './components/pages/videos';
import Contact from './components/pages/contact';
import AboutMe from './components/pages/aboutMe';
import Blog from './components/pages/blog';
import MathMethods from './components/pages/methods';
import Specialist from './components/pages/specialist';
import University from './components/pages/university';
import SignUp from './components/pages/signUp';

// not available for public
import AddVideo from './components/pages/addVideo';
import AddArticle from './components/pages/addArticle';


// includes
import './Assets/css/default.min.css';

fetch('https://localhost:3000/addVideo', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})

fetch('https://localhost:3000/addArticle', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})

fetch('https://localhost:3000/Contact', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})

fetch('https://localhost:3000/HomePage', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})

fetch('https://localhost:3000/SignUp', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
  })
})

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />

            <Route exact path='/' component={HomePage} />
            <Route exact path='/Videos' component={Videos} />
            <Route exact path='/Blog' component={Blog} />
            <Route exact path='/AboutMe' component={AboutMe} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/MathMethods' component={MathMethods} />
            <Route exact path='/SpecialistMaths' component={Specialist} />
            <Route exact path='/UniversityMaths' component={University} />
            <Route exact path='/Signup' component={SignUp} />

            <Route exact path='/AddVideo' component={AddVideo} />
            <Route exact path='/AddArticle' component={AddArticle} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
