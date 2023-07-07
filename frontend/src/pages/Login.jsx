import React, {useEffect, useState } from "react";

import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import './../styles/login.css'

import loginImg from '../assets/images/login.jpg'
import UserIcon from './../assets/images/user.png'

import { BASE_URL } from './../config';
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";

const Login = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }) 

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    })

    const dispatch = useDispatch()

    // const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = event => {
        setCredentials(prev => ({ ...prev, [event.target.id]: event.target.value }))

    }

    const handleClick = async event => {
        event.preventDefault();      
             
        // dispatch({ type: 'LOGIN_START' });
        dispatch(authAction.loginStart())

        // console.log(credentials)
        
 
        try {
            const res = await fetch(`${BASE_URL}/users/login`, {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { 
                    'Content-Type': 'application/json',  
                },
            })

            const result = await res.json();
            console.log(result)

            if (!res.ok) {
                return alert(result.message)
            }

            // dispatch({ type: 'LOGIN_SUCCESS', payload: result })
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', JSON.stringify(result.data.user));
            dispatch(authAction.loginSuccess(result))
            navigate('/') 

        } catch (err) {
            console.log(err)
            // dispatch({ type: 'LOGIN_FAILURE', payload: err.message })
            dispatch(authAction.loginFailure(err.message))
            
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
                                <h2>Login</h2>

                                <Form onSubmit={handleClick}>
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
                                    <Button className="btn secondary__btn auth__btn"
                                        type="submit" >Login
                                    </Button>
                                </Form>
                                <p>Don't have an account <Link to='/register'>create</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login