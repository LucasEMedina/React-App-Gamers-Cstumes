import React from "react"
import logoAdmin from "../assets/images/logo-admin.png"

function TopBar() {
  return (
    <>
    {/* -- Topbar -- */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            {/*-- Sidebar Toggle (Topbar) --*/}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            {/* -- Topbar Navbar -- */}
            <ul className="navbar-nav ml-auto nav-nueva">

                {/* -- Nav Item - Alerts -- */}
                <li className="nav-item-bell dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                    <i className="fas fa-bell fa-fw"></i>
                        {/* -- Counter - Alerts -- */}
                        <span className="badge badge-danger badge-counter">3</span>
                    </a>
                </li>

                {/* -- Nav Item - Messages -- */}
                <li className="nav-item-message dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                        <i className="fas fa-envelope fa-fw"></i>
                        {/* -- Counter - Messages -- */}
                        <span className="badge badge-danger badge-counter">1</span>
                    </a>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* -- Nav Item - User Information -- */}
                <li className="nav-item-user dropdown no-arrow">
                    <a className="nav-link-user dropdown-toggle" href="/" id="userDropdown">
                        <span className="name-user mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                        <div className="div-img-user">
                            <img className="img-profile rounded-circle" src={logoAdmin} alt="Foto de perfil del Admin" width="60" />
                        </div>
                    </a>
                </li>

            </ul>

        </nav>
    {/* -- End of Topbar -- */}
    </>
    )
}

export default TopBar