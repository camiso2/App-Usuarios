import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";

export const Navbar = () => {

    const { login, handlerLogout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              
                <NavLink className="nav-link users-title" to="/users">
                <i className="fa fa-users"></i><b >USUARIOS</b>
                            </NavLink>
                   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                       
                        {/*!login.isAdmin ||
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users/register">
                                |   <i className="fa fa-user"></i>Registrar Nuevo Usuario
                                </NavLink>
                            </li>
    */ }
                    </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                    <span className="nav-item nav-link text-primary mx-3">
                    <i className="fa fa-user"></i>{login.user?.username}
                    </span>
                    <button
                        onClick={handlerLogout}
                        className="btn btn-outline-success">
                        Cerrar Sesión <i className="fa fa-sign-out"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}