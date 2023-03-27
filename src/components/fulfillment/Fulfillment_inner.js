import React, { useState } from 'react';
import { Form, Row, Table, Modal, ProgressBar, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Imgtable from '../../assets/01.jpg';
import { Icon } from '@iconify/react';
const Fulfillment_Inner = () => {

    const [Add_note, setAdd_note] = useState(false);
    const [Add_address, setAdd_address] = useState(false);
    const [Postage, setPostage] = useState(false);
    const [order, setOrder] = useState(false);
    const now = 100;

    return (
        <>
            <Modal size="md" show={Add_note} onHide={() => setAdd_note(false)} aria-labelledby="example-modal-4">
                <div className="px-3">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-4">
                            <h6 className="fw-bold">Add Notes</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group cus-form-group mt-3">
                            <Form.Control placeholder="Cost" className='fill-input' as="textarea" rows={6} />
                            <label htmlFor="shipping" className='float-label'>Notes</label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end mb-2 mt-4">
                            <button className="btn-hover color-1 me-2">Cancel</button>
                            <button className="btn-hover color-2 r_mt-2">Save</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>

            <Modal size="md" show={Add_address} onHide={() => setAdd_address(false)} aria-labelledby="example-modal-4">
                <div className="px-3">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-4">
                            <h6 className="fw-bold">Verify Address</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='row g-3'>
                            <div className='col-md-12'>
                                <Form.Check inline type="radio" aria-label="radio" label="Current" />
                                US
                                <Form.Check inline type="radio" aria-label="radio" label="Manually Override" className='ms-5' />
                            </div>
                            <div className='col-md-12'>
                                <div className="form-group cus-form-group ">
                                    <Form.Control placeholder="First Name" className='fill-input' />
                                    <label htmlFor="Name" className='float-label'>First Name</label>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className="form-group cus-form-group ">
                                    <Form.Control placeholder="Last Name" className='fill-input' />
                                    <label htmlFor="Name" className='float-label'>Last Name</label>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Company Name" className='fill-input' />
                                    <label htmlFor="Company" className='float-label'>Company Name</label>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Address" className='fill-input' />
                                    <label htmlFor="Address" className='float-label'>Address</label>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Address2" className='fill-input' />
                                    <label htmlFor="Address2" className='float-label'>Address2</label>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="City" className='fill-input' />
                                    <label htmlFor="City" className='float-label'>City</label>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="State" className='fill-input' />
                                    <label htmlFor="State" className='float-label'>State</label>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Zip" className='fill-input' />
                                    <label htmlFor="Zip" className='float-label'>Zip</label>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Country" className='fill-input' />
                                    <label htmlFor="Country" className='float-label'>Country</label>
                                </div>
                            </div>
                            <div className='col-md-4'>

                                <Form.Check aria-label="check" label="Force Override" />
                            </div>
                            <div className='col-md-12'>
                                <p className='mt-4 mb-3 fw-bold'>Recommended Address</p>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="float-end my-2">
                            <button className="btn-hover color-1 me-2">Close</button>
                            <button className="btn-hover color-2 r_mt-2">Override</button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>



            <div className="bg_col fulfillment">
                <Row className='p-3'>
                    <div className='col-md-12'>
                        <div className=''>
                            <Form.Check aria-label="option 1" label="Purchase Postage" inline />
                            <Form.Check aria-label="option 2" label="Packing Slip" inline />
                            <Form.Check aria-label="option 3" label="Mark Shipped" inline />
                            <Form.Check aria-label="option 4" label="Auto Combine" inline />
                            <button className='btn-hover color-2 me-2'>Process</button>
                            <button className='btn-hover color-2 me-2 r_mt-2'>Refund</button>
                            <button className='btn-hover color-2 r_mt-2' onClick={() => setPostage(!Postage)}>Postage Queue</button>
                        </div>
                    </div>
                    {
                        Postage ?
                            <div>
                                <div className="mt-3">
                                    <h6 className='mt-4 mb-3 fw-bold'>Details</h6>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Created Date</th>
                                                <th>Total</th>
                                                <th>Success</th>
                                                <th>Failed</th>
                                                <th>Reprinted</th>
                                                <th>Progress</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2023-03-02 21:14:55</td>
                                                <td>1</td>
                                                <td>0</td>
                                                <td>1</td>
                                                <td>0</td>
                                                <td><ProgressBar variant="success" now={100} label={`${now}%`} /></td>
                                                <td>
                                                    <div className='card_detail'>
                                                        <span className='text-center d-flex'>
                                                            <a className="btn_edit cursor">
                                                                <Icon icon="material-symbols:print-outline-rounded" />
                                                                <p className='mb-0'>Print</p>
                                                            </a>
                                                            <a className="btn_delete cursor ms-3">
                                                                <Icon icon="icon-park-outline:clear" />
                                                                <p className='mb-0'>Clear</p>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            : null
                    }
                    <div className='table-responsive'> 
                        <Table className='mt-4'>
                            <thead>
                                <tr>
                                    <th><Form.Check inline name="group1" /></th>
                                    <th>User ID</th>
                                    <th>Customer Status</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Company</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>Address 2</th>
                                    <th>State</th>
                                    <th>Postal code</th>
                                    <th>Contact source</th>
                                    <th>State</th>
                                    <th>ABV ID</th>
                                    <th>Additionl Phone</th>
                                    <th>Phone</th>
                                    <th>Dollers Spend</th>
                                    <th>Last Order Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td className="text-decoration-none cursor"><lable onClick={() => setOrder(!order)} >1</lable></td>
                                    <td>menual testing</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                    <td>$399.00</td>
                                </tr>
                                {
                                    order ?
                                        <tr>
                                            <td colSpan={18} className="py-3">

                                                <div className='row g-3'>
                                                    <div className='col-md-4'>
                                                        <div className=" bg_col p-3">
                                                            <h6 className='fw-bold mb-3'>Order Summary</h6>
                                                            <Row className='g-3'>
                                                                <div className='col-md-4'>
                                                                    <p className='fw-bold'>Source:
                                                                    </p>
                                                                    <p className='fw-bold'>Order Date:
                                                                    </p>
                                                                    <p className='fw-bold'>Paid Date:
                                                                    </p>
                                                                </div>
                                                                <div className='col-md-4'>
                                                                    <p>API</p>
                                                                    <p>09/28/2022</p>
                                                                    <p>09/28/2022</p>
                                                                </div>
                                                                <div className='col-md-4'>
                                                                    <p className='txt_color cursor'>Print Packing Slip</p>
                                                                    <p className='txt_color cursor'>Print Full Receipt</p>
                                                                    <p className='txt_color cursor' onClick={() => setAdd_note(true)}>Add Note</p>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="form-group cus-form-group">
                                                                        <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                                                        <label htmlFor="shipping" className='float-label'>Search Product</label>
                                                                    </div>
                                                                </div>
                                                                <hr></hr>
                                                                <p className='txt_color cursor text-end' onClick={() => setAdd_address(true)}>Add Address</p>
                                                            </Row>
                                                        </div>
                                                        <div className=" bg_col p-3 mt-3">
                                                            <h6 className='fw-bold mb-3'>Shipping Info</h6>
                                                            <Accordion defaultActiveKey="0">
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header>Shipment #114</Accordion.Header>

                                                                    <Accordion.Body className='p-3'>
                                                                        <div className='border p-3'>
                                                                            <h6 className='fw-bold mb-3'>Weight/Dimensions</h6>
                                                                            <div className="form-group cus-form-group">
                                                                                <Form.Control placeholder="Weight" className='fill-input' />
                                                                                <label htmlFor="Weight" className='float-label'>Weight</label>
                                                                            </div>
                                                                            <div className="form-group cus-form-group mt-3">
                                                                                <Form.Control placeholder="Length" className='fill-input' />
                                                                                <label htmlFor="Length" className='float-label'>Length</label>
                                                                            </div>
                                                                            <div className="form-group cus-form-group mt-3">
                                                                                <Form.Control placeholder="Height" className='fill-input' />
                                                                                <label htmlFor="Height" className='float-label'>Height</label>
                                                                            </div>
                                                                        </div>
                                                                        <div >
                                                                            <h6 className='fw-bold mt-5 mb-3'>Shipping Carrier</h6>
                                                                            <div className="form-group cus-select-group">
                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                    <option>No</option>
                                                                                    <option value="1">One</option>
                                                                                    <option value="2">Two</option>
                                                                                    <option value="3">Three</option>
                                                                                </Form.Control>
                                                                                <label className='float-label' htmlFor="require_shipping">Carrier:</label>
                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                            </div>
                                                                            <div className="form-group cus-select-group mt-3">
                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                    <option>No</option>
                                                                                    <option value="1">One</option>
                                                                                    <option value="2">Two</option>
                                                                                    <option value="3">Three</option>
                                                                                </Form.Control>
                                                                                <label className='float-label' htmlFor="require_shipping">Service:</label>
                                                                                <Icon icon="ic:outline-refresh" className='btn-refresh' />
                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                            </div>
                                                                            <div className="form-group cus-form-group mt-3">
                                                                                <Form.Control placeholder="Insurance" className='fill-input' />
                                                                                <label htmlFor="Insurance" className='float-label'>Insurance</label>
                                                                            </div>
                                                                            <div className="form-group cus-select-group mt-3">
                                                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                                                    <option>No</option>
                                                                                    <option value="1">One</option>
                                                                                    <option value="2">Two</option>
                                                                                    <option value="3">Three</option>
                                                                                </Form.Control>
                                                                                <label className='float-label' htmlFor="require_shipping">Signature:</label>
                                                                                <Icon icon="ic:round-keyboard-arrow-down" className='inputIcon' />
                                                                            </div>

                                                                            <Row className='my-3 g-3'>
                                                                                <Col md={4}>
                                                                                    <label className='fw-bold'>Rate:</label>
                                                                                </Col>
                                                                                <Col md={8}>
                                                                                    <label className='fw-bold'>$0.00</label>
                                                                                </Col>

                                                                                <div className='text-end'>
                                                                                    <button className='btn-hover color-2 me-1 w-auto'>Purchase Postage and Print</button>
                                                                                    <button className='btn-hover color-1 me-1 r_mt-2 w-auto'>Delete</button>
                                                                                    <button className='btn-hover color-3 r_mt-2 w-auto'>Apply</button>
                                                                                </div>
                                                                            </Row>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                            <div className='text-end'>
                                                                <button className='btn-hover color-3 mt-3 r_mt-2 w-auto '><Icon icon="typcn:plus" className='me-2' />Shipment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className=" bg_col p-3">
                                                            <h6 className='fw-bold  my-3'>Order Items</h6>
                                                            <div>
                                                                <Table responsive>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Item</th>
                                                                            <th>Stock</th>
                                                                            <th>Quantity</th>
                                                                            <th>Shipment</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <div>
                                                                                    <img src={Imgtable} alt="Img" className='tabImg' />
                                                                                    <h6 className='fw-bold  my-3'>Order Items</h6>
                                                                                    <label>UPC: 021032416690</label>
                                                                                </div>
                                                                                <label>Product ID: 3127</label>
                                                                            </td>
                                                                            <td>1</td>
                                                                            <td>0</td>
                                                                            <td>1</td>
                                                                            <td>0</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </div>

                                                        <div className=" bg_col p-3 mt-3">
                                                            <h6 className='fw-bold  my-3'>Notes</h6>
                                                            <div>
                                                                <Table responsive>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Date/Time</th>
                                                                            <th>Logged By</th>
                                                                            <th>Note</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>03/02/2023</td>
                                                                            <td>indrapal</td>
                                                                            <td>Error Processing OrderID#226 ShipmentID#114::Skipping order push as txn_type is:REFUND</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>03/02/2023</td>
                                                                            <td>indrapal</td>
                                                                            <td>Error Processing OrderID#226 ShipmentID#114::Skipping order push as txn_type is:REFUND</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>03/02/2023</td>
                                                                            <td>indrapal</td>
                                                                            <td>Error Processing OrderID#226 ShipmentID#114::Skipping order push as txn_type is:REFUND</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        : null
                                }
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </div>
        </>
    );
}
export default Fulfillment_Inner;