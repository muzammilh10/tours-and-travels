import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'


import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import './../styles/login.css'

import loginImg from '../assets/images/login.jpg'
import UserIcon from '../assets/images/user.png'

import { BASE_URL } from "../config";
import { authAction } from "../store/auth";

const Register = () => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
        passwordConfirm: undefined,
        secretKey: undefined,
        role: undefined
    })
    const dispatch = useDispatch()

    // const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    // const url = `${BASE_URL}/users/signup`


    const handleChange = event => {
        setCredentials(prev => ({ ...prev, [event.target.id]: event.target.value }))

    }

    const handleClick = async event => {
        event.preventDefault()


        try {
            if(credentials.role === 'admin' && credentials.secretKey !== 'adminKey'){
                return alert('invaid admin')
            }

            console.log(credentials)
            const res = await fetch(`${BASE_URL}/users/signup`, {
                method: 'post',
                body: JSON.stringify(credentials),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await res.json();

            console.log(result)

            if (!res.ok) {
                return alert(result.message)
            }

            // dispatch({type:'REGISTER_SUCCESS'})
            dispatch(authAction.registerSucces())
            navigate('/login')

        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt="" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={UserIcon} alt="" />
                                </div>
                                <h2>Sign Up</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup className="role">
                                        Register As
                                        <input type='radio'
                                            required
                                            name="Role"
                                            value='admin'
                                            id="role"
                                            onClick={handleChange}
                                        /> Admin
                                        <input type='radio'
                                            required
                                            name="Role"
                                            value='user'
                                            id="role"
                                            onClick={handleChange}
                                        /> User
                                    </FormGroup>

                                    {credentials.role === 'admin' ?
                                        <FormGroup>
                                            <input
                                                type="text"
                                                placeholder="enter admin key"
                                                required
                                                name="adminKey"
                                                id="secretKey"
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                        :
                                        ""}

                                    <FormGroup>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            required
                                            name="username"
                                            id="username"
                                            onChange={handleChange}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            name="email"
                                            id="email"
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            name="password"
                                            id="password"
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder="Password Confirm"
                                            required
                                            name="passwordConfirm"
                                            id="passwordConfirm"
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <Button
                                        className="btn secondary__btn auth__btn"
                                        type="submit" >Create Acount
                                    </Button>
                                </Form>
                                <p>Already have an account ? <Link to='/login'>Login</Link></p>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Register;