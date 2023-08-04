import { Alert } from 'bootstrap';
import React, { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label, Table } from 'reactstrap'

function MultipleInput() {

    let [name, setName] = useState({
        email: "",
        name: "",
        address: ""
    })

    const [arr, setArr] = useState([]);


    function getData(e) {

        setName({ ...name, [e.target.name]: e.target.value })

    }


    function addFunc() {

        setArr([...arr, name]);
        setName({
            email: "",
            name: "",
            address: ""
        });


        // arr.length > 0 ? (setArr([...arr, name]),
        //     setName({
        //         email: "",
        //         name: "",
        //         address: ""
        //     })) : Alert("Please Fill Up Form!")

    }

    function deletHandler(index) {

        arr.splice(index, 1)
        setArr([...arr])

    }

    function delAll() {
        setArr([])

    }

    function updateFun(index, data) {
        setName(data)

    }

    return (
        <>
            <Form style={{ width: "fit-content", margin: "auto" }}>

                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        value={name.email}
                        placeholder="with a placeholder"
                        type="email"
                        style={{ width: "350px" }}

                        onChange={(e) => getData(e)}


                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleName">
                        Name
                    </Label>
                    <Input
                        id="exampleName"
                        name="text"
                        value={name.text}
                        placeholder="Name placeholder"
                        type="text"
                        style={{ width: "350px" }}

                        onChange={(e) => getData(e)}

                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleText">
                        Address
                    </Label>
                    <Input
                        id="exampleText"
                        name="address"
                        value={name.address}
                        type="textarea"
                        style={{ width: "350px" }}

                        onChange={(e) => getData(e)}

                    />
                </FormGroup>

                <Button className='btn btn-success' onClick={() => addFunc()}>
                    Submit
                </Button>

                <Button color="primary" className='ms-3' onClick={() => delAll()}>
                    DeleteAll
                </Button>

                <Button variant="Success" style={{ marginLeft: "30px" }} onClick={() => changeFun()}>Click to change</Button>

            </Form>


            {arr.length > 0 ? (<Table striped bordered hover style={{ marginTop: "10px" }}>
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th>No.</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th style={{ backgroundColor: "red" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.email}</td>
                                <td>{e.text}</td>
                                <td>{e.address}</td>
                                <td><button className='btn btn-danger' onClick={() => deletHandler()}>Delete</button>
                                    <Button color="primary" className='ms-3' onClick={() => updateFun(i, e)}>
                                        Update
                                    </Button></td>
                            </tr>)
                    })}

                </tbody>
            </Table>) : null}


        </>
    )
}

export default MultipleInput