import React from 'react'
import { Link } from 'react-router-dom'
import logoGamers from "../assets/images/logo.png"

function SideBar() {
  return (
    <>
    {/* -- Sidebar -- */}
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* -- Sidebar - Brand -- */}
			<div className="sidebar-brand-icon">
				<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
					<img className="w-100 img-logo" src={logoGamers} alt="Digital House" />
				</Link>
			</div>

			{/* -- Nav Item - Dashboard -- */}
			<li className="nav-item active">
				<Link className="nav-link" to="/">	
					<i className="bi bi-wrench fas fa-fw"></i>
					<span> Dashboard Gamers </span>
				</Link>
			</li>

			{/* -- Divider -- */}
			<hr className="sidebar-divider"></hr>

			{/* -- Heading -- */}
			<span className="sidebar-heading">Actions</span>

			{/* -- Nav Item - Pages -- */}
			<li className="nav-item action-item">
				<a className="nav-link collapsed" href="/">
				<i className="bi bi-person-lines-fill fas fa-fw"></i>
					<span>Personajes</span>
				</a>
			</li>

			{/* -- Nav Item - Charts -- */}
			<li className="nav-item action-item">
				<a className="nav-link" href="/">
				<i className="bi bi-tags-fill fas fa-fw"></i>
					<span>Categorias</span>
				</a>
			</li>

			{/* -- Nav Item - Tables -- */}
			<li className="nav-item action-item">
				<a className="nav-link" href="/">
				<i className="bi bi-graph-up-arrow fas fa-fw"></i>
					<span>Ventas</span>
				</a>
			</li>

			{/* -- Divider -- */}
			<hr className="sidebar-divider d-none d-md-block"></hr>

        </ul>
        {/* -- End of Sidebar -- */}
    </>
  )
}

export default SideBar