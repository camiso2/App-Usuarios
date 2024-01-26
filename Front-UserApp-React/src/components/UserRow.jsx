import { NavLink } from "react-router-dom"
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UserRow = ({ id, username, email, admin }) => {
    const { handlerUserSelectedForm, handlerRemoveUser } = useUsers();
    const { login } = useAuth();
    return (
        <tr>
            {/*<td>{id}</td>*/}
            <td className="mayus-td"><b><i className="fa fa-user"></i>{username}</b></td>
            <td><p>{email}</p></td>

            {!login.isAdmin ||
                <>
                   <td> <p>{admin?'admin':'sin privilegios'}</p></td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => handlerUserSelectedForm({
                                id,
                                username,
                                email,
                                admin
                            })}
                        >
                            <i className="fa fa-edit"></i> Editar Datos de Usuario
                        </button>
                    </td>

                    {/*
                        

                    <td>
                        <NavLink className={'btn btn-secondary btn-sm'}
                            to={'/users/edit/' + id} >
                            update route
                        </NavLink>
                    </td>*/
                    }
                    <td>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => handlerRemoveUser(id)}
                        >
                            <i className="fa fa-trash"></i>Eliminar Usuario
                        </button>
                    </td>
                </>
            }
        </tr>
    )
}