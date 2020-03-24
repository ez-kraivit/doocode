import React from 'react';
// import './App.css';
import { Link } from 'react-router-dom';
import Routers from './Routers';

// เรียก Bulma มาใช้ความสวยงาม เอาไว้ประดับความสวยงาม การใช้ Button
document.addEventListener('DOMContentLoaded',()=>{
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0);
  if($navbarBurgers.length > 0){
    $navbarBurgers.forEach(el =>{
      el.addEventListener('click',()=>{
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      })
    })
  }
  });




// ES6 and ES5
const App = () => {

  return (
    <div className="App">
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to='/' className="navbar-item">
            DOOCODE
            </Link>
          <a role="button" className="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navMenu" className="navbar-menu ">
        {/* Navbar-start */}
          <div className="navbar-start">
            <Link  to='/' activeclass="is-active" className="navbar-item">HOME</Link>

          <div className="navbar-item has-dropdown is-hoverable">
          <Link to='/Frontend' className="navbar-link">
            FRONT-END
          </Link>

          <div className="navbar-dropdown">
            <div className="navbar-item">
            <b>>Basics</b>
            </div>
            <Link to='/Frontend/html' className="navbar-item">
              HTML:5
            </Link>
            <Link to='/' className="navbar-item">
              CSS
            </Link>
            <Link to='/' className="navbar-item">
              Javascript
            </Link>
            <div className="navbar-item">
              <b>>Frameworks</b>
            </div>
            <Link to='/' className="navbar-item">
              React
            </Link>
            <Link to='/' className="navbar-item">
              Vue
            </Link>
            <Link to='/' className="navbar-item">
              Angular
            </Link>
            <Link to='/' className="navbar-item">
              Webpack
            </Link>
            <div className="navbar-item">
            <b>>Styles</b>
            </div>
            <Link to='/' className="navbar-item">
              Bootstrap
            </Link>
            <Link to='/' className="navbar-item">
              Material Ui
            </Link>
            <Link to='/' className="navbar-item">
              Bulma
            </Link>
          </div>
          </div>
          {/* End Front-end */}
          <div className="navbar-item has-dropdown is-hoverable">
          <Link to='/Backend' className="navbar-link">
            BACK-END
          </Link>
          <div className="navbar-dropdown">
            <div className="navbar-item">
            <b>>Technology</b>
            </div>
            <Link to='/' className="navbar-item">
              PHP
            </Link>
            <Link to='/' className="navbar-item">
              Node
            </Link>
            <Link to='/' className="navbar-item">
              Ruby on Rails
            </Link>
            <Link to='/' className="navbar-item">
              Java(Spring)
            </Link>
            <Link to='/' className="navbar-item">
              ASP.NET
            </Link>
            <Link to='/' className="navbar-item">
              Redis
            </Link>
          </div>
          </div>
          {/* End Back-end */}
          <div className="navbar-item has-dropdown is-hoverable">
          <Link to='/Database' className="navbar-link">
            DATABASE
          </Link>
          <div className="navbar-dropdown">
            <div className="navbar-item">
            <b>>RDBMS</b>
            </div>
            <Link to='/' className="navbar-item">
              MSSQL
            </Link>
            <Link to='/' className="navbar-item">
              MySql
            </Link>
            <Link to='/' className="navbar-item">
              Postgres
            </Link>
            <div className="navbar-item">
            <b>>NoSql</b>
            </div>
            <Link to='/' className="navbar-item">
              Mongodb
            </Link>
            <Link to='/' className="navbar-item">
              Cassndra
            </Link>
            <Link to='/' className="navbar-item">
              CouchDB
            </Link>
            <Link to='/' className="navbar-item">
              Elasticsearch
            </Link>
            <div className="navbar-item">
            <b>>RDBMS</b>
            </div>
            <Link to='/' className="navbar-item">
              MSSQL
            </Link>
            <Link to='/' className="navbar-item">
              MySql
            </Link>
            <Link to='/' className="navbar-item">
              Postgres
            </Link>
            <div className="navbar-item">
            <b>>Graph</b>
            </div>
            <Link to='/' className="navbar-item">
              Neo4j
            </Link>
            <Link to='/' className="navbar-item">
              ArangoDB
            </Link>
            <div className="navbar-item">
            <b>>Message Queues</b>
            </div>
            <Link to='/' className="navbar-item">
              Kafka
            </Link>
            <Link to='/' className="navbar-item">
              SQS
            </Link>
            <Link to='/' className="navbar-item">
              ZeroMQ
            </Link>
            <Link to='/' className="navbar-item">
              RabbltMQ
            </Link>
          </div>
          </div>
          {/* End Database */}
          <div className="navbar-item has-dropdown is-hoverable">
          <Link to='/' className="navbar-link">
            DEV OPS
          </Link>
          <div className="navbar-dropdown">
            <div className="navbar-item">
            <b>>Infrastucture</b>
            </div>
            <Link to='/' className="navbar-item">
              NGINX
            </Link>
            <Link to='/' className="navbar-item">
              AWS
            </Link>
            <Link to='/' className="navbar-item">
              Azure
            </Link>
            <Link to='/' className="navbar-item">
              ELK
            </Link>
            <div className="navbar-item">
            <b>>Automation</b>
            </div>
            <Link to='/' className="navbar-item">
              Mongodb
            </Link>
            <Link to='/' className="navbar-item">
              Ansible
            </Link>
            <Link to='/' className="navbar-item">
              Chef
            </Link>
            <Link to='/' className="navbar-item">
              Jenkins
            </Link>
            <div className="navbar-item">
            <b>>Virtualization</b>
            </div>
            <Link to='/' className="navbar-item">
              Docker
            </Link>
            <Link to='/' className="navbar-item">
              Bladecenter
            </Link>
            <Link to='/' className="navbar-item">
              Kubernetes
            </Link>
            <Link to='/' className="navbar-item">
              Vagrant
            </Link>
            <Link to='/' className="navbar-item">
              VMWare
            </Link>
          </div>
          </div>
          {/* End Dev OPS */}
          <div className="navbar-item has-dropdown is-hoverable">
          <Link to='/' className="navbar-link">
            MOBILE APP
          </Link>
          <div className="navbar-dropdown">
            <div className="navbar-item">
            <b>>Android</b>
            </div>
            <Link to='/' className="navbar-item">
              Java
            </Link>
            <Link to='/' className="navbar-item">
              SDK
            </Link>
            <div className="navbar-item">
            <b>>IOS</b>
            </div>
            <Link to='/' className="navbar-item">
              Obective C
            </Link>
            <Link to='/' className="navbar-item">
              Swift
            </Link>
            <div className="navbar-item">
            <b>>Cross Platform</b>
            </div>
            <Link to='/' className="navbar-item">
              React Native
            </Link>
            <Link to='/' className="navbar-item">
              Ionic
            </Link>
            <Link to='/' className="navbar-item">
              PWA
            </Link>
            <Link to='/' className="navbar-item">
              Xamarin
            </Link>
            <Link to='/' className="navbar-item">
              Unity
            </Link>
          </div>
          </div>
          {/* End Mobile App */}


          </div>
          {/* End navbar-start */}
          <div className="navbar-end">

          </div>

        </div>
      </nav>
      {/* End Navbar */}
      <Routers />
    </div>
  );
}

export default App;


// Function
// const Name1 = () => 'Kraivit Mongkhonsaknurit'

// const Name2 = () => {
//   const F1 = {
//     B1: "K",
//     B2: "V"
//   }
// }

// Arrow Function javascript oop
// class App extends Component {
//   render(){
//     const hello = {
//       status: "Hello",
//       cout: 0
//     }
//     const H1 = Name1()
//     const H2 = Name2()
//     return (
//       <div className="App">
//         <header className="App-header">
//          <h1>Hello {H1}</h1>
//          <div className="row">
//          <button>Insertment</button>
//          <a>dfsdfsdfsdf{H2}</a>
//          <button>Desertment</button>
//          </div>
//         </header>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//          <h1>Hello</h1>
//          </div>
//         </header>
//       </div>
//     );
//   }
// }

// ES6 and ES5
// const App  = () => {
//   return (
//         <div className="App">
//           <header className="App-header">
//            <h1>Hello</h1>
//           </header>
//         </div>
//       );
// }

// Arrow Function react
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>Hello</h1>
//       </header>
//     </div>
//   );
// }



// npm install @material-ui/icons
// npm install @material-ui/core