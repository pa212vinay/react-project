import React from "react";
import { Row, Container } from 'react-bootstrap';
import Subheader from "../common/Subheader";
import Contact_Phone_Inner from "./Contact_Phone_Inner";
import Contact_Nav from "./Contact_Nav";


const Contact_Phone = () => {

    return(
        <>
            <Container fluid className='p-3'>
                <Subheader />
                <Row className="g-3">
                    <div className="col-lg-12 col-xl-12 col-md-12">
                    <div className='bg_col mt-3 p-3'>
                        <Contact_Nav />
                        <Contact_Phone_Inner/>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}
export default Contact_Phone;