import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header';

// Demo for router api in react
// Exact --> Single path can be matched by multiple route. Check exactly match the path in the URL.

// const PageOne  = () => {
//     return (
//     <div>page1
//         <Link to='/pagetwo'> Navigate to Page Two</Link>
//     </div>
//     );
// }

// const PageTwo  = () => {
//     return <div>page2
//         <button>Click Me</button>
//         <Link to='/'> Navigate to Page One</Link>
//     </div>;
// }
// <BrowserRouter>
// <div>
//     <Route path = '/' exact component = {PageOne}/>
//     <Route path = '/pagetwo'  component = {PageTwo}/>
// </div>
// </BrowserRouter>

const App = () => {
    return (
        <div className ="ui container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path = '/' exact component = {StreamList}/>
                    <Route path = '/streams/new' exact component = {StreamCreate}/>
                    <Route path = '/streams/edit' exact component = {StreamEdit}/>
                    <Route path = '/streams/delete' exact component = {StreamDelete}/>
                    <Route path = '/streams/show' exact component = {StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;