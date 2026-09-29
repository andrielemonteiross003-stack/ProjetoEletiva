import { Link, useLocation} from "react-router-dom";

function NavBar(){
    const local = useLocation();
     return(
            
            <> <style >
{`
          .navbar {
            width: 100%;
            height: 185px;
            background-color: #5da36e;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 0 40px;
          }
          .navbar-links {
            display: flex;
            align-items: center;
            gap: 100px;
          }

          .navbar-links a {
            color: black;
            text-decoration: none;

            font-size: 40px;
          }

          .navbar-links a:hover {
            color: #444;
          }

          .navbar-perfil {
            background-color: #ffd65a;

            padding: 10px 45px;

            border-radius: 30px;

            color: black;
            text-decoration: none;

            font-size: 28px;
          }
        `}


            </style>


<nav className="navbar">

<Link to="/"
          className={location.pathname === "/" ? "funciona!" : "erro de rota!"}
        ></Link>
        
<Link to="/user"
          className={location.pathname === "/user" ? "funciona!" : "erro de rota!"}
        ></Link>
        </nav> 

        </>
     );

}

export default NavBar;