import { ReactNode } from "react"


interface HomeLayoutProps{
    children:ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({children}) => {
    
  return (
    <>
        <div className="custom-layout-container">
        {/* Navbar */}
            <div className="navbar">
                {/* Contenido del Navbar */}
                <ul className="nav-links">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
                </ul>
            </div>

            {/* Contenedor de contenido */}
            <div className="content-container">
                {/* Sidebar */}
                <div className="sidebar">
                {/* Contenido del Sidebar */}
                    <ul className="sidebar-links">
                        <li>Enlace 1</li>
                        <li>Enlace 2</li>
                        <li>Enlace 3</li>
                    </ul>
                </div>

                {/* Contenido principal */}
                <div className="main-content">
                {/* Aquí colocamos el contenido principal */}
                    { children }
                </div>
            </div>
        </div>

    </>
  )
}
