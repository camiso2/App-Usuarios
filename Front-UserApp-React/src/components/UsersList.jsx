import { UserRow } from "./UserRow"
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

export const UsersList = () => {

    const { users } = useUsers();
    const { login } = useAuth();
    return (

        <>
            <br />
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        {/*<th>#</th>*/}
                        <th><i className="fa fa-users"></i>Usuarios</th>
                        <th><i className="fa fa-envelope"></i>Email</th>
                        <th><i className="fa fa-at"></i>Tipo</th>
                        {!login.isAdmin || <>
                            <th><i className="fa fa-edit"></i>Actualizar Datos de Usuario</th>
                            {/*<th>update route</th>*/}
                            <th><i className="fa fa-trash"></i>Eliminar Usuario</th>
                        </>}
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({ id, username, email, admin }) => (
                            <UserRow
                                key={id}
                                id={id}
                                username={username}
                                email={email}
                                admin={admin}
                            />
                        ))
                    }
                </tbody>
            </table>
            

            
        </>
    )
}