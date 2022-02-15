import { Component } from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

class AppFooter extends Component{
    render(){
        
        return <div className="fixed-bottom">
            <Navbar color="dark" dark="true">
                <Container>
                    <NavbarBrand>
                        <footer/>
                        hello
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>
    }
}

export default AppFooter