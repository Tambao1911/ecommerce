import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'


import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import Nav from './Nav/Nav';
import Home from './Exampla/Home';
import About from './Exampla/About';
import ListUser from './User/ListUser'
import DetailUser from './User/DetailUser';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />

                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            path='/todos'
                            element={<ListTodo />}
                        />
                        <Route
                            path='/about'
                            element={<About />}
                        />
                        <Route
                            path='/user'
                            element={<ListUser />}
                        />
                        <Route
                            path='/user/:id'
                            element={<DetailUser />}
                        />

                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
