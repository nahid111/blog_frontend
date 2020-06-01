import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar.jsx';
import Alert from './Alert.jsx';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <Container>
                <Alert />
                {props.children}
            </Container>
        </React.Fragment>
    )
}

export default Layout;


