import { Form, Row, Col } from 'react-bootstrap';

const EmpCrud = () => {
    return (
        <>
            <h1>Employee CRUD</h1>

            <Form>
                {/* ID */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextId">
                    <Form.Label column sm="2">
                        ID
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter ID" />
                    </Col>
                </Form.Group>

                {/* First Name */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextFirstName">
                    <Form.Label column sm="2">
                        First Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Col>
                </Form.Group>

                {/* Last Name */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
                    <Form.Label column sm="2">
                        Last Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Col>
                </Form.Group>

                {/* Email */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Col>
                </Form.Group>

                {/* Password */}
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
};

export default EmpCrud;
