import React, { useEffect, useRef } from "react";

import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate } from "react-router-dom";

import logo from './../../assets/images/logo.png'
import './header.css'

import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/auth";


const nav__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
]

const Header = ({toggle}) => {

    const HeaderRef = useRef(null)
    const menuRef = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    

    const user = useSelector(state => state.auth.user)
    
    // console.log(user)
    // const { user, dispatch } = useContext(AuthContext)

    
    const Logout = () => {
        // dispatch({ type: 'LOGOUT' ,})
        toggle(false)
        localStorage.removeItem('sidebar');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch(authAction.logout())  
        
        navigate('/')
    }

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                HeaderRef.current.classList.add('sticky__header')
            }
            else {
                HeaderRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[user])


    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

    return (
        <header className="header" ref={HeaderRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center 
                    justify-content-between">
                        {/* logo */}
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        {/* logo end */}
                        {/* menu start */}
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <ul className="menu d-flex align-items-center gap-5">
                                {
                                    nav__links.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                            <NavLink to={item.path} className={navClass =>
                                                navClass.isActive ? 'active__link' : ''} onClick={() => toggle(false)}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* menu end */} 

                        <div className="nav__right d-flex align-items-center gap-4">
                            <div className="nav__btns d-flex align-items-center gap-4">
                                {
                                   
                                    user ? (
                                        <>
                                        {user.role==='admin'? 
                                         <div className="nav__item">
                                            <NavLink   className={navClass =>
                                            navClass.isActive ? 'active__link' : ''} to='/admin/dashboard' onClick={() => toggle(true)}>{user.username}</NavLink>
                                         </div>
                                        :
                                        <p className="m-2" >{user.username}</p>
                                        }
                                            

                                            <Button className="btn btn-dark m-2" onClick={Logout} >
                                                Logout
                                            </Button>
                                        </> 
                                    ) : (
                                        <>
                                            <Button className="btn secondary__btn">
                                                <Link to='/login' >Login</Link>
                                            </Button>
                                            <Button className="btn primary__btn">
                                                <Link to='/register' >Register</Link>
                                            </Button>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i class='ri-menu-line'></i>
                        </span>
                    </div>
                </Row>
            </Container>
        </header >
    )
}

export default Header