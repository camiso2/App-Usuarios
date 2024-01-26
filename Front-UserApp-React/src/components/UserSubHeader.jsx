import { NavLink } from "react-router-dom"
import { useUsers } from "../hooks/useUsers";


export const UserSubHeader = () => {

    const { users } = useUsers();

    let countUsersAdmin = 0;
    let countUsersComun = 0;
    users.map(o=>{ o.admin ? countUsersAdmin+=1:countUsersComun+=1});

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="card my-5 bg-secondary" >
                            <div className="card-body">
                                <h5 className="card-title title-color-users">Total Usuarios (<b>{Object.keys(users).length}</b>)</h5>
                                <hr className="hr-subHeader"/>
                                <p className="card-text">Usuarios distribuidos entre administradores y personal con credenciales limitadas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card my-5 bg-secondary" >
                            <div className="card-body">
                                <h5 className="card-title title-color-users">Total Administradores ({countUsersAdmin})
                                </h5>
                                <hr className="hr-subHeader"/>
                                <p className="card-text">Muestra el total de usuarios que son administradores del sistema.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card my-5 bg-secondary" >
                            <div className="card-body">
                                <h5 className="card-title title-color-users"> Total Sin Privilegios ({countUsersComun})</h5>
                                <hr className="hr-subHeader"/>
                                <p className="card-text">Muestra el total de usuarios que no cuentan con privilegios administrativos del sistema.</p>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

