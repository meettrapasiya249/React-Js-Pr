import { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Table } from 'react-bootstrap';


const EmpCrud = () => {
  const [employee, setEmployee] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [employees, setEmployees] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
 
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };
 
  const generateId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 6; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) { 
      const updatedEmployees = employees.map((emp) =>
        emp.id === employee.id ? employee : emp
      );
      setEmployees(updatedEmployees);
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      setIsEditing(false);
    } else { 
      const newEmployee = { ...employee, id: generateId() };
      const updatedEmployees = [...employees, newEmployee];
      setEmployees(updatedEmployees);
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    } 
    setEmployee({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };
 
  const handleEdit = (emp) => {
    setEmployee(emp);
    setIsEditing(true);
  };
 
  const handleDelete = (id) => {
    const filteredEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(filteredEmployees);
    localStorage.setItem('employees', JSON.stringify(filteredEmployees));
  };

  return (
    <>
      <h1>Employee CRUD</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextFirstName">
          <Form.Label column sm="2">First Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
          <Form.Label column sm="2">Last Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">Email</Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">Password</Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              name="password"
              value={employee.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant={isEditing ? 'warning' : 'primary'}>
          {isEditing ? 'Update' : 'Submit'}
        </Button>
      </Form>

      <hr />

      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th> 
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td> 
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(emp)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default EmpCrud;
      