import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div>
            {/* <!--Main Navigation--> */}
            <header>
                {/* <!-- Sidebar --> */}
                <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                    <div class="position-sticky">
                        <div class="list-group list-group-flush mx-3 mt-4">
                            <Link
                                to={"/"}
                                className="list-group-item list-group-item-action py-2 ripple"
                                aria-current="true"
                            >
                                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                                <span>Dashboard</span>
                            </Link>
                            <Link
                                to={"/patient"}
                                className="list-group-item list-group-item-action py-2 ripple"
                            >
                                <i className="fas fa-users fa-fw me-3"></i>
                                <span>Patient</span>
                            </Link>

                            <Link
                                to={"/reception"}
                                className="list-group-item list-group-item-action py-2 ripple"
                            >
                                <i className="fas fa-money-bill fa-fw me-3"></i>
                                <span>Reception</span>
                            </Link>

                        </div>
                    </div>
                </nav>
                {/* <!-- Sidebar --> */}

                {/* <!-- Navbar --> */}
                <nav id="main-navbar" class="navbar navbar-expand-lg bg-light fixed-top">
                    {/* <!-- Container wrapper --> */}
                    <div class="container-fluid">
                        {/* <!-- Toggle button --> */}
                        <button data-mdb-button-init
                            class="navbar-toggler"
                            type="button"
                            data-mdb-collapse-init
                            data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i class="fas fa-bars"></i>
                        </button>

                        {/* <!-- Brand --> */}
                        <a class="navbar-brand" href="#">

                        </a>
                        {/* <!-- Search form --> */}
                        <Link to="/Login" className="logout-link">
                            Logout
                        </Link>

                    </div>
                    {/* <!-- Container wrapper --> */}
                </nav>
                {/* <!-- Navbar --> */}
            </header>
            {/* <!--Main Navigation--> */}

            {/* <!--Main layout--> */}
            <main style={{ marginTop: "58px" }}>
                <div class="container pt-4"></div>
            </main>
            {/* <!--Main layout--> */}

        </div>
    )
}

export default SideBar;

