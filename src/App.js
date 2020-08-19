import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

class App extends React.Component {
 render() {
     /*const user = {
         name : "Devansh Singh",
         address : "Vikas Nagar"
     };
     function details(user)
     {
        return user.name + ' '+ user.address;
     };*/
  return(
   <div>
        < Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Hello</NavbarBrand>
            </div>
        </Navbar>
        {/*<h1>My name is {user.name} and my address is {user.address} </h1>    
        <h2> Hello  {details(user)} !!</h2>*/}
        <Menu />
        
   </div>
   
    );
 }
}
export default App;
