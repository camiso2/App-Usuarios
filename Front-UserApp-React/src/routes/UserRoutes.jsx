import { NavLink, Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { UsersPage } from "../pages/UsersPage"
import { useSelector } from "react-redux"
import { useAuth } from "../auth/hooks/useAuth"
import { UserSubHeader } from "../components/UserSubHeader"


export const UserRoutes = () => {
    const { isAdmin } = useSelector(state => state.auth);
    const { login } = useAuth();
   
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <div className="img-ilis" >
                                <img src="https://ilissolutions.cl/wp-content/uploads/2022/12/logo-ilis-verde.png" alt="" />
                            </div>
                            <NavLink className="nav-link" to="/users">
                                <i className="fa fa-home"></i><b>Inicio</b>
                                <hr className="hr-sidebar" />
                            </NavLink>

                            {login.isAdmin ?
                                <>
                                    <NavLink to="/users/register" className="nav-link">
                                        <i className="fa fa-user"></i>Registrar Usuario
                                        <hr className="hr-sidebar" />
                                    </NavLink>
                                    <hr />
                                </> :
                                <>
                                    <NavLink className="nav-link" to="/users">
                                        <i className="fa fa-home"></i><b>NO tiene permisos</b>
                                        <hr className="hr-sidebar" />
                                    </NavLink>
                                </>
                            }
                        </div>
                    </div>
                    <div className="container-p" >
                        <UserSubHeader/>
                        <div className="container-fluid">
                        <Routes>
                            <Route path="users" element={<UsersPage />} />
                            {!isAdmin || <>
                                <Route path="users/register" element={<RegisterPage />} />
                                <Route path="users/edit/:id" element={<RegisterPage />} />
                            </>
                            }
                            <Route path="/" element={<Navigate to="/users" />} />
                        </Routes>
                    </div>
                    </div>
                </div>
            </div>





        </>
    )
}