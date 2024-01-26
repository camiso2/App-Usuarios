

export const Footer = ( {company, developer}) => {
    return (
        <>

            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-8 d-flex align-items-center">
                    <span className="text-muted">© Copyright 2024 | <span className="ilis"><a href="ilissolutions.cl" target="_blank">{company}</a></span> | Desarrollo {developer}, Todos Los Derechos Reservados.</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/jaiver-ocampo-96496695/" target="_blank"><i className="fa fa-linkedin" ></i></a></li>

                </ul>
            </footer>

        </>
    )
}


