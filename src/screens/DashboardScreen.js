import React, { useEffect } from "react"; 
import { lineColumnChartOptions, donutChartOptions, radialBarChart1Options, radialBarChart2Options } from '../assets/js/pages/data_chart';
 import ApexCharts from "apexcharts";  
 

 
const Dashboard = () => {
  // Before line 6
 
    useEffect(() => {
        // Render Line-Column Chart
        const lineColumnChart = new ApexCharts(document.querySelector("#line-column-chart"), lineColumnChartOptions);
        lineColumnChart.render();
    
        // Render Donut Chart
        const donutChart = new ApexCharts(document.querySelector("#donut-chart"), donutChartOptions);
        donutChart.render();
    
        // Render Radial Bar Chart 1
        const radialBarChart1 = new ApexCharts(document.querySelector("#radialchart-1"), radialBarChart1Options);
        radialBarChart1.render();
    
        // Render Radial Bar Chart 2
        const radialBarChart2 = new ApexCharts(document.querySelector("#radialchart-2"), radialBarChart2Options);
        radialBarChart2.render();
    
        // Cleanup charts on unmount
        return () => {
          lineColumnChart.destroy();
          donutChart.destroy();
          radialBarChart1.destroy();
          radialBarChart2.destroy();
        };
      }, []);
      
 

  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    // Your custom action here
    console.log("Link clicked!");
  };

    return(
        <>
 
  <div id="layout-wrapper">
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
              <span className="logo-sm">
                <img
                  src="assets/images/logo-sm-dark.png"
                  alt="logo-sm-dark"
                  height={22}
                />
              </span>
              <span className="logo-lg">
                <img
                  src="assets/images/logo-dark.png"
                  alt="logo-dark"
                  height={20}
                />
              </span>
            </a>
            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img
                  src="assets/images/logo-sm-light.png"
                  alt="logo-sm-light"
                  height={22}
                />
              </span>
              <span className="logo-lg">
                <img
                  src="assets/images/logo-light.png"
                  alt="logo-light"
                  height={20}
                />
              </span>
            </a>
          </div>
          <button
            type="button"
            className="btn btn-sm px-3 font-size-24 header-item waves-effect"
            id="vertical-menu-btn"
          >
            <i className="ri-menu-2-line align-middle" />
          </button>
          {/* App Search*/}
          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <span className="ri-search-line" />
            </div>
          </form>
          <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
            <button
              type="button"
              className="btn header-item waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="false"
              aria-expanded="false"
            >
              Mega Menu
              <i className="mdi mdi-chevron-down" />
            </button>
            <div className="dropdown-menu dropdown-megamenu">
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="font-size-14">UI Components</h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Lightbox</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Range Slider</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Sweet Alert</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Rating</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Forms</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Tables</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Charts</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h5 className="font-size-14">Applications</h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Ecommerce</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Calendar</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Email</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Projects</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Tasks</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Contacts</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h5 className="font-size-14">Extra Pages</h5>
                      <ul className="list-unstyled megamenu-list">
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Light Sidebar</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Compact Sidebar</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Horizontal layout</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Maintenance</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Coming Soon</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>Timeline</a>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>FAQs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="font-size-14">UI Components</h5>
                      <ul className="list-unstyled megamenu-list">
  <li>
    <a href="#" onClick={(e) => e.preventDefault()}>Lightbox</a>
  </li>
  <li>
    <a href="#" onClick={(e) => e.preventDefault()}>Range Slider</a>
  </li>
  <li>
    <a href="#" onClick={(e) => e.preventDefault()}>Sweet Alert</a>
  </li>
  <li>
    <a href="#" onClick={(e) => e.preventDefault()}>Rating</a>
  </li>
  <li>
    <a href="#" onClick={(e) => e.preventDefault()}>Forms</a>
  </li>
  <li>
    <a href="#" onClick={(e) => e.preventDefault()}>Tables</a>
  </li>
  <li>
    <a href="#" onClick={(e) => e.preventDefault()}>Charts</a>
  </li>
</ul>

                    </div>
                    <div className="col-sm-5">
                      <div>
                        <img
                          src="assets/images/megamenu-img.png"
                          alt="megamenu-img"
                          className="img-fluid mx-auto d-block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block d-lg-none ms-2">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-search-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="ri-search-line" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-search-dropdown"
            >
              <form className="p-3">
                <div className="mb-3 m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="ri-search-line" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="dropdown d-none d-sm-inline-block">
            <button
              type="button"
              className="btn header-item waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className=""
                src="assets/images/flags/us.jpg"
                alt="Header Language"
                height={16}
              />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a
                href="#" onClick={(e) => e.preventDefault()}
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/spain.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">Spanish</span>
              </a>
              {/* item*/}
              <a
                href="#" onClick={(e) => e.preventDefault()}
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/germany.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">German</span>
              </a>
              {/* item*/}
              <a
                href="#" onClick={(e) => e.preventDefault()}
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/italy.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">Italian</span>
              </a>
              {/* item*/}
              <a
                href="#" onClick={(e) => e.preventDefault()}
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/russia.jpg"
                  alt="user-image"
                  className="me-1"
                  height={12}
                />{" "}
                <span className="align-middle">Russian</span>
              </a>
            </div>
          </div>
          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="ri-apps-2-line" />
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <div className="px-lg-2">
                <div className="row g-0">
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img src="assets/images/brands/github.png" alt="Github" />
                      <span>GitHub</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/bitbucket.png"
                        alt="bitbucket"
                      />
                      <span>Bitbucket</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/dribbble.png"
                        alt="dribbble"
                      />
                      <span>Dribbble</span>
                    </a>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/dropbox.png"
                        alt="dropbox"
                      />
                      <span>Dropbox</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/mail_chimp.png"
                        alt="mail_chimp"
                      />
                      <span>Mail Chimp</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img src="assets/images/brands/slack.png" alt="slack" />
                      <span>Slack</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              data-toggle="fullscreen"
            >
              <i className="ri-fullscreen-line" />
            </button>
          </div>
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-notifications-dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ri-notification-3-line" />
              <span className="noti-dot" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-notifications-dropdown"
            >
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-0"> Notifications </h6>
                  </div>
                  <div className="col-auto">
                    <a href="#!" className="small">
                      {" "}
                      View All
                    </a>
                  </div>
                </div>
              </div>
              <div data-simplebar="" style={{ maxHeight: 230 }}>
                <a href="#" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title bg-primary rounded-circle font-size-16">
                        <i className="ri-shopping-cart-line" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-1">Your order is placed</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 3 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="text-reset notification-item">
                  <div className="d-flex">
                    <img
                      src="assets/images/users/avatar-3.jpg"
                      className="me-3 rounded-circle avatar-xs"
                      alt="user-pic"
                    />
                    <div className="flex-1">
                      <h6 className="mb-1">James Lemire</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          It will seem like simplified English.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 1 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title bg-success rounded-circle font-size-16">
                        <i className="ri-checkbox-circle-line" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-1">Your item is shipped</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 3 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="text-reset notification-item">
                  <div className="d-flex">
                    <img
                      src="assets/images/users/avatar-4.jpg"
                      className="me-3 rounded-circle avatar-xs"
                      alt="user-pic"
                    />
                    <div className="flex-1">
                      <h6 className="mb-1">Salena Layfield</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          As a skeptical Cambridge friend of mine occidental.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 1 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-2 border-top">
                <div className="d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 text-center"
                    href="#" onClick={(e) => e.preventDefault()}
                  >
                    <i className="mdi mdi-arrow-right-circle me-1" /> View
                    More..
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown d-inline-block user-dropdown">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="assets/images/users/avatar-2.jpg"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-1">Kevin</span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a className="dropdown-item" href="#">
                <i className="ri-user-line align-middle me-1" /> Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="ri-wallet-2-line align-middle me-1" /> My Wallet
              </a>
              <a className="dropdown-item d-block" href="#">
                <span className="badge bg-success float-end mt-1">11</span>
                <i className="ri-settings-2-line align-middle me-1" /> Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="ri-lock-unlock-line align-middle me-1" /> Lock
                screen
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item text-danger" href="#">
                <i className="ri-shut-down-line align-middle me-1 text-danger" />{" "}
                Logout
              </a>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon right-bar-toggle waves-effect"
            >
              <i className="ri-settings-2-line" />
            </button>
          </div>
        </div>
      </div>
    </header>
    {/* ========== Left Sidebar Start ========== */}
    <div className="vertical-menu">
      <div data-simplebar="" className="h-100">
        {/*- Sidemenu */}
        <div id="sidebar-menu">
          {/* Left Menu Start */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu</li>
            <li>
              <a href="index.html" className="waves-effect">
                <i className="ri-dashboard-line" />
                <span className="badge rounded-pill bg-success float-end">
                  3
                </span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="calendar.html" className=" waves-effect">
                <i className="ri-calendar-2-line" />
                <span>Calendar</span>
              </a>
            </li>
            <li>
              <a href="apps-chat.html" className=" waves-effect">
                <i className="ri-chat-1-line" />
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-store-2-line" />
                <span>Ecommerce</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="ecommerce-products.html">Products</a>
                </li>
                <li>
                  <a href="ecommerce-product-detail.html">Product Detail</a>
                </li>
                <li>
                  <a href="ecommerce-orders.html">Orders</a>
                </li>
                <li>
                  <a href="ecommerce-customers.html">Customers</a>
                </li>
                <li>
                  <a href="ecommerce-cart.html">Cart</a>
                </li>
                <li>
                  <a href="ecommerce-checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="ecommerce-shops.html">Shops</a>
                </li>
                <li>
                  <a href="ecommerce-add-product.html">Add Product</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-mail-send-line" />
                <span>Email</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="email-inbox.html">Inbox</a>
                </li>
                <li>
                  <a href="email-read.html">Read Email</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="apps-kanban-board.html" className=" waves-effect">
                <i className="ri-artboard-2-line" />
                <span>Kanban Board</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-layout-3-line" />
                <span>Layouts</span>
              </a>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow">
                    Vertical
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="layouts-light-sidebar.html">Light Sidebar</a>
                    </li>
                    <li>
                      <a href="layouts-compact-sidebar.html">Compact Sidebar</a>
                    </li>
                    <li>
                      <a href="layouts-icon-sidebar.html">Icon Sidebar</a>
                    </li>
                    <li>
                      <a href="layouts-boxed.html">Boxed Layout</a>
                    </li>
                    <li>
                      <a href="layouts-preloader.html">Preloader</a>
                    </li>
                    <li>
                      <a href="layouts-colored-sidebar.html">Colored Sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow">
                    Horizontal
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="layouts-horizontal.html">Horizontal</a>
                    </li>
                    <li>
                      <a href="layouts-hori-topbar-light.html">Topbar light</a>
                    </li>
                    <li>
                      <a href="layouts-hori-boxed-width.html">Boxed width</a>
                    </li>
                    <li>
                      <a href="layouts-hori-preloader.html">Preloader</a>
                    </li>
                    <li>
                      <a href="layouts-hori-colored-header.html">
                        Colored Header
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-title">Pages</li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-account-circle-line" />
                <span>Authentication</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="auth-login.html">Login</a>
                </li>
                <li>
                  <a href="auth-register.html">Register</a>
                </li>
                <li>
                  <a href="auth-recoverpw.html">Recover Password</a>
                </li>
                <li>
                  <a href="auth-lock-screen.html">Lock Screen</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-profile-line" />
                <span>Utility</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="pages-starter.html">Starter Page</a>
                </li>
                <li>
                  <a href="pages-maintenance.html">Maintenance</a>
                </li>
                <li>
                  <a href="pages-comingsoon.html">Coming Soon</a>
                </li>
                <li>
                  <a href="pages-timeline.html">Timeline</a>
                </li>
                <li>
                  <a href="pages-faqs.html">FAQs</a>
                </li>
                <li>
                  <a href="pages-pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="pages-404.html">Error 404</a>
                </li>
                <li>
                  <a href="pages-500.html">Error 500</a>
                </li>
              </ul>
            </li>
            <li className="menu-title">Components</li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-pencil-ruler-2-line" />
                <span>UI Elements</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="ui-buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="ui-cards.html">Cards</a>
                </li>
                <li>
                  <a href="ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="ui-dropdowns.html">Dropdowns</a>
                </li>
                <li>
                  <a href="ui-grid.html">Grid</a>
                </li>
                <li>
                  <a href="ui-images.html">Images</a>
                </li>
                <li>
                  <a href="ui-lightbox.html">Lightbox</a>
                </li>
                <li>
                  <a href="ui-modals.html">Modals</a>
                </li>
                <li>
                  <a href="ui-offcanvas.html">Offcavas</a>
                </li>
                <li>
                  <a href="ui-rangeslider.html">Range Slider</a>
                </li>
                <li>
                  <a href="ui-roundslider.html">Round Slider</a>
                </li>
                <li>
                  <a href="ui-session-timeout.html">Session Timeout</a>
                </li>
                <li>
                  <a href="ui-progressbars.html">Progress Bars</a>
                </li>
                <li>
                  <a href="ui-sweet-alert.html">Sweetalert 2</a>
                </li>
                <li>
                  <a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
                </li>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui-video.html">Video</a>
                </li>
                <li>
                  <a href="ui-general.html">General</a>
                </li>
                <li>
                  <a href="ui-rating.html">Rating</a>
                </li>
                <li>
                  <a href="ui-notifications.html">Notifications</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="waves-effect">
                <i className="ri-eraser-fill" />
                <span className="badge rounded-pill bg-danger float-end">
                  6
                </span>
                <span>Forms</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="form-elements.html">Form Elements</a>
                </li>
                <li>
                  <a href="form-validation.html">Form Validation</a>
                </li>
                <li>
                  <a href="form-advanced.html">Form Advanced Plugins</a>
                </li>
                <li>
                  <a href="form-editors.html">Form Editors</a>
                </li>
                <li>
                  <a href="form-uploads.html">Form File Upload</a>
                </li>
                <li>
                  <a href="form-xeditable.html">Form X-editable</a>
                </li>
                <li>
                  <a href="form-wizard.html">Form Wizard</a>
                </li>
                <li>
                  <a href="form-mask.html">Form Mask</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-table-2" />
                <span>Tables</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="tables-basic.html">Basic Tables</a>
                </li>
                <li>
                  <a href="tables-datatable.html">Data Tables</a>
                </li>
                <li>
                  <a href="tables-responsive.html">Responsive Table</a>
                </li>
                <li>
                  <a href="tables-editable.html">Editable Table</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-bar-chart-line" />
                <span>Charts</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="charts-apex.html">Apex Charts</a>
                </li>
                <li>
                  <a href="charts-chartjs.html">Chartjs Charts</a>
                </li>
                <li>
                  <a href="charts-flot.html">Flot Charts</a>
                </li>
                <li>
                  <a href="charts-knob.html">Jquery Knob Charts</a>
                </li>
                <li>
                  <a href="charts-sparkline.html">Sparkline Charts</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-brush-line" />
                <span>Icons</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="icons-remix.html">Remix Icons</a>
                </li>
                <li>
                  <a href="icons-materialdesign.html">Material Design</a>
                </li>
                <li>
                  <a href="icons-dripicons.html">Dripicons</a>
                </li>
                <li>
                  <a href="icons-fontawesome.html">Font awesome 5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-map-pin-line" />
                <span>Maps</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="maps-google.html">Google Maps</a>
                </li>
                <li>
                  <a href="maps-vector.html">Vector Maps</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow waves-effect">
                <i className="ri-share-line" />
                <span>Multi Level</span>
              </a>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>Level 1.1</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()} className="has-arrow">
                    Level 1.2
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>Level 2.1</a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>Level 2.2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Sidebar */}
      </div>
    </div>
    {/* Left Sidebar End */}
    {/* ============================================================== */}
    {/* Start right Content here */}
    {/* ============================================================== */}
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Dashboard</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="#" onClick={(e) => e.preventDefault()}>Nazox</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row">
            <div className="col-xl-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-1 overflow-hidden">
                          <p className="text-truncate font-size-14 mb-2">
                            Number of Sales
                          </p>
                          <h4 className="mb-0">1452</h4>
                        </div>
                        <div className="text-primary ms-auto">
                          <i className="ri-stack-line font-size-24" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body border-top py-3">
                      <div className="text-truncate">
                        <span className="badge badge-soft-success font-size-11">
                          <i className="mdi mdi-menu-up"> </i> 2.4%{" "}
                        </span>
                        <span className="text-muted ms-2">
                          From previous period
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-1 overflow-hidden">
                          <p className="text-truncate font-size-14 mb-2">
                            Sales Revenue
                          </p>
                          <h4 className="mb-0">$ 38452</h4>
                        </div>
                        <div className="text-primary ms-auto">
                          <i className="ri-store-2-line font-size-24" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body border-top py-3">
                      <div className="text-truncate">
                        <span className="badge badge-soft-success font-size-11">
                          <i className="mdi mdi-menu-up"> </i> 2.4%{" "}
                        </span>
                        <span className="text-muted ms-2">
                          From previous period
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-1 overflow-hidden">
                          <p className="text-truncate font-size-14 mb-2">
                            Average Price
                          </p>
                          <h4 className="mb-0">$ 15.4</h4>
                        </div>
                        <div className="text-primary ms-auto">
                          <i className="ri-briefcase-4-line font-size-24" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body border-top py-3">
                      <div className="text-truncate">
                        <span className="badge badge-soft-success font-size-11">
                          <i className="mdi mdi-menu-up"> </i> 2.4%{" "}
                        </span>
                        <span className="text-muted ms-2">
                          From previous period
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
              <div className="card">
                <div className="card-body">
                  <div className="float-end d-none d-md-inline-block">
                    <div className="btn-group mb-2">
                      <button type="button" className="btn btn-sm btn-light">
                        Today
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-light active"
                      >
                        Weekly
                      </button>
                      <button type="button" className="btn btn-sm btn-light">
                        Monthly
                      </button>
                    </div>
                  </div>
                  <h4 className="card-title mb-4">Revenue Analytics</h4>
                  <div>
                    <div
                      id="line-column-chart"
                      className="apex-charts"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div className="card-body border-top text-center">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="d-inline-flex">
                        <h5 className="me-2">$12,253</h5>
                        <div className="text-success">
                          <i className="mdi mdi-menu-up font-size-14"> </i>2.2 %
                        </div>
                      </div>
                      <p className="text-muted text-truncate mb-0">
                        This month
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <div className="mt-4 mt-sm-0">
                        <p className="mb-2 text-muted text-truncate">
                          <i className="mdi mdi-circle text-primary font-size-10 me-1" />{" "}
                          This Year :
                        </p>
                        <div className="d-inline-flex">
                          <h5 className="mb-0 me-2">$ 34,254</h5>
                          <div className="text-success">
                            <i className="mdi mdi-menu-up font-size-14"> </i>2.1
                            %
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="mt-4 mt-sm-0">
                        <p className="mb-2 text-muted text-truncate">
                          <i className="mdi mdi-circle text-success font-size-10 me-1" />{" "}
                          Previous Year :
                        </p>
                        <div className="d-inline-flex">
                          <h5 className="mb-0">$ 32,695</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="float-end">
                    <select className="form-select form-select-sm">
                      <option selected="">Apr</option>
                      <option value={1}>Mar</option>
                      <option value={2}>Feb</option>
                      <option value={3}>Jan</option>
                    </select>
                  </div>
                  <h4 className="card-title mb-4">Sales Analytics</h4>
                  <div id="donut-chart" className="apex-charts" />
                  <div className="row">
                    <div className="col-4">
                      <div className="text-center mt-4">
                        <p className="mb-2 text-truncate">
                          <i className="mdi mdi-circle text-primary font-size-10 me-1" />{" "}
                          Product A
                        </p>
                        <h5>42 %</h5>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center mt-4">
                        <p className="mb-2 text-truncate">
                          <i className="mdi mdi-circle text-success font-size-10 me-1" />{" "}
                          Product B
                        </p>
                        <h5>26 %</h5>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center mt-4">
                        <p className="mb-2 text-truncate">
                          <i className="mdi mdi-circle text-warning font-size-10 me-1" />{" "}
                          Product C
                        </p>
                        <h5>42 %</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="dropdown float-end">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Sales Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Export Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Profit
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                  <h4 className="card-title mb-4">Earning Reports</h4>
                  <div className="text-center">
                    <div className="row">
                      <div className="col-sm-6">
                        <div>
                          <div className="mb-3">
                            <div id="radialchart-1" className="apex-charts" />
                          </div>
                          <p className="text-muted text-truncate mb-2">
                            Weekly Earnings
                          </p>
                          <h5 className="mb-0">$2,523</h5>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mt-5 mt-sm-0">
                          <div className="mb-3">
                            <div id="radialchart-2" className="apex-charts" />
                          </div>
                          <p className="text-muted text-truncate mb-2">
                            Monthly Earnings
                          </p>
                          <h5 className="mb-0">$11,235</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown float-end">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Sales Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Export Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Profit
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                  <h4 className="card-title mb-3">Sources</h4>
                  <div>
                    <div className="text-center">
                      <p className="mb-2">Total sources</p>
                      <h4>$ 7652</h4>
                      <div className="text-success">
                        <i className="mdi mdi-menu-up font-size-14"> </i>2.2 %
                      </div>
                    </div>
                    <div className="table-responsive mt-4">
                      <table className="table table-hover mb-0 table-centered table-nowrap">
                        <tbody>
                          <tr>
                            <td style={{ width: 60 }}>
                              <div className="avatar-xs">
                                <div className="avatar-title rounded-circle bg-light">
                                  <img
                                    src="assets/images/companies/img-1.png"
                                    alt="img-1"
                                    height={20}
                                  />
                                </div>
                              </div>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-0">Source 1</h5>
                            </td>
                            <td>
                              <div id="spak-chart1" />
                            </td>
                            <td>
                              <p className="text-muted mb-0">$ 2478</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="avatar-xs">
                                <div className="avatar-title rounded-circle bg-light">
                                  <img
                                    src="assets/images/companies/img-2.png"
                                    alt="img-2"
                                    height={20}
                                  />
                                </div>
                              </div>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-0">Source 2</h5>
                            </td>
                            <td>
                              <div id="spak-chart2" />
                            </td>
                            <td>
                              <p className="text-muted mb-0">$ 2625</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="avatar-xs">
                                <div className="avatar-title rounded-circle bg-light">
                                  <img
                                    src="assets/images/companies/img-3.png"
                                    alt="img-3"
                                    height={20}
                                  />
                                </div>
                              </div>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-0">Source 3</h5>
                            </td>
                            <td>
                              <div id="spak-chart3" />
                            </td>
                            <td>
                              <p className="text-muted mb-0">$ 2856</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-center mt-4">
                      <a href="#" className="btn btn-primary btn-sm">
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown float-end">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Sales Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Export Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Profit
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                  <h4 className="card-title mb-4">Recent Activity Feed</h4>
                  <div data-simplebar="" style={{ maxHeight: 330 }}>
                    <ul className="list-unstyled activity-wid">
                      <li className="activity-list">
                        <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ri-edit-2-fill" />
                          </span>
                        </div>
                        <div>
                          <div>
                            <h5 className="font-size-13">
                              28 Apr, 2020{" "}
                              <small className="text-muted">12:07 am</small>
                            </h5>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              Responded to need “Volunteer Activities”
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="activity-list">
                        <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ri-user-2-fill" />
                          </span>
                        </div>
                        <div>
                          <div>
                            <h5 className="font-size-13">
                              21 Apr, 2020{" "}
                              <small className="text-muted">08:01 pm</small>
                            </h5>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              Added an interest “Volunteer Activities”
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="activity-list">
                        <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ri-bar-chart-fill" />
                          </span>
                        </div>
                        <div>
                          <div>
                            <h5 className="font-size-13">
                              17 Apr, 2020{" "}
                              <small className="text-muted">09:23 am</small>
                            </h5>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              Joined the group “Boardsmanship Forum”
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="activity-list">
                        <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ri-mail-fill" />
                          </span>
                        </div>
                        <div>
                          <div>
                            <h5 className="font-size-13">
                              11 Apr, 2020{" "}
                              <small className="text-muted">05:10 pm</small>
                            </h5>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              Responded to need “In-Kind Opportunity”
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="activity-list">
                        <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ri-calendar-2-fill" />
                          </span>
                        </div>
                        <div>
                          <div>
                            <h5 className="font-size-13">
                              07 Apr, 2020{" "}
                              <small className="text-muted">12:47 pm</small>
                            </h5>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              Created need “Volunteer Activities”
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="activity-list">
                        <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ri-edit-2-fill" />
                          </span>
                        </div>
                        <div>
                          <div>
                            <h5 className="font-size-13">
                              05 Apr, 2020{" "}
                              <small className="text-muted">03:09 pm</small>
                            </h5>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              Attending the event “Some New Event”
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="activity-list">
                        <div className="activity-icon avatar-xs">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ri-user-2-fill" />
                          </span>
                        </div>
                        <div>
                          <div>
                            <h5 className="font-size-13">
                              02 Apr, 2020{" "}
                              <small className="text-muted">12:07 am</small>
                            </h5>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              Responded to need “In-Kind Opportunity”
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown float-end">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Sales Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Export Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Profit
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                  <h4 className="card-title mb-4">Revenue by Locations</h4>
                  <div id="usa-vectormap" style={{ height: 196 }} />
                  <div className="row justify-content-center">
                    <div className="col-xl-5 col-md-6">
                      <div className="mt-2">
                        <div className="clearfix py-2">
                          <h5 className="float-end font-size-16 m-0">$ 2542</h5>
                          <p className="text-muted mb-0 text-truncate">
                            California :
                          </p>
                        </div>
                        <div className="clearfix py-2">
                          <h5 className="float-end font-size-16 m-0">$ 2245</h5>
                          <p className="text-muted mb-0 text-truncate">
                            Nevada :
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-md-6">
                      <div className="mt-2">
                        <div className="clearfix py-2">
                          <h5 className="float-end font-size-16 m-0">$ 2156</h5>
                          <p className="text-muted mb-0 text-truncate">
                            Montana :
                          </p>
                        </div>
                        <div className="clearfix py-2">
                          <h5 className="float-end font-size-16 m-0">$ 1845</h5>
                          <p className="text-muted mb-0 text-truncate">
                            Texas :
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <a href="#" className="btn btn-primary btn-sm">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="user-chat-border">
                    <div className="row">
                      <div className="col-md-5 col-9">
                        <h5 className="font-size-15 mb-1">Frank Vickery</h5>
                        <p className="text-muted mb-0">
                          <i className="mdi mdi-circle text-success align-middle me-1" />{" "}
                          Active now
                        </p>
                      </div>
                      <div className="col-md-7 col-3">
                        <ul className="list-inline user-chat-nav text-end mb-0">
                          <li className="list-inline-item">
                            <div className="dropdown">
                              <button
                                className="btn nav-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-magnify" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-0">
                                <form className="p-2">
                                  <div className="search-box">
                                    <div className="position-relative">
                                      <input
                                        type="text"
                                        className="form-control rounded bg-light border-0"
                                        placeholder="Search..."
                                      />
                                      <i className="mdi mdi-magnify search-icon" />
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </li>
                          <li className="list-inline-item d-none d-sm-inline-block">
                            <div className="dropdown">
                              <button
                                className="btn nav-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-cog" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  View Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                  Clear chat
                                </a>
                                <a className="dropdown-item" href="#">
                                  Muted
                                </a>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="dropdown">
                              <button
                                className="btn nav-btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-horizontal" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Something else
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chat-widget">
                    <div
                      className="chat-conversation"
                      data-simplebar=""
                      style={{ maxHeight: 295 }}
                    >
                      <ul className="list-unstyled mb-0 pe-3">
                        <li>
                          <div className="conversation-list">
                            <div className="chat-avatar">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt="avatar-2"
                              />
                            </div>
                            <div className="ctext-wrap">
                              <div className="conversation-name">
                                Frank Vickery
                              </div>
                              <div className="ctext-wrap-content">
                                <p className="mb-0">Hey! I am available</p>
                              </div>
                              <p className="chat-time mb-0">
                                <i className="mdi mdi-clock-outline align-middle me-1" />{" "}
                                12:09
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="right">
                          <div className="conversation-list">
                            <div className="ctext-wrap">
                              <div className="conversation-name">
                                Ricky Clark
                              </div>
                              <div className="ctext-wrap-content">
                                <p className="mb-0">
                                  Hi, How are you? What about our next meeting?
                                </p>
                              </div>
                              <p className="chat-time mb-0">
                                <i className="bx bx-time-five align-middle me-1" />{" "}
                                10:02
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="chat-day-title">
                            <span className="title">Today</span>
                          </div>
                        </li>
                        <li>
                          <div className="conversation-list">
                            <div className="chat-avatar">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt="avatar-2"
                              />
                            </div>
                            <div className="ctext-wrap">
                              <div className="conversation-name">
                                Frank Vickery
                              </div>
                              <div className="ctext-wrap-content">
                                <p className="mb-0">Hello!</p>
                              </div>
                              <p className="chat-time mb-0">
                                <i className="mdi mdi-clock-outline align-middle me-1" />{" "}
                                10:00
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="right">
                          <div className="conversation-list">
                            <div className="ctext-wrap">
                              <div className="conversation-name">
                                Ricky Clark
                              </div>
                              <div className="ctext-wrap-content">
                                <p className="mb-0">
                                  Hi, How are you? What about our next meeting?
                                </p>
                              </div>
                              <p className="chat-time mb-0">
                                <i className="bx bx-time-five align-middle me-1" />{" "}
                                10:02
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="conversation-list">
                            <div className="chat-avatar">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt="avatar-2"
                              />
                            </div>
                            <div className="ctext-wrap">
                              <div className="conversation-name">
                                Frank Vickery
                              </div>
                              <div className="ctext-wrap-content">
                                <p className="mb-0">Yeah everything is fine</p>
                              </div>
                              <p className="chat-time mb-0">
                                <i className="bx bx-time-five align-middle me-1" />{" "}
                                10:06
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="conversation-list">
                            <div className="chat-avatar">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt="avatar-2"
                              />
                            </div>
                            <div className="ctext-wrap">
                              <div className="conversation-name">
                                Frank Vickery
                              </div>
                              <div className="ctext-wrap-content">
                                <p className="mb-0">
                                  &amp; Next meeting tomorrow 10.00AM
                                </p>
                              </div>
                              <p className="chat-time mb-0">
                                <i className="bx bx-time-five align-middle me-1" />{" "}
                                10:06
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="right">
                          <div className="conversation-list">
                            <div className="ctext-wrap">
                              <div className="conversation-name">
                                Ricky Clark
                              </div>
                              <div className="ctext-wrap-content">
                                <p className="mb-0">Wow that's great</p>
                              </div>
                              <p className="chat-time mb-0">
                                <i className="bx bx-time-five align-middle me-1" />{" "}
                                10:07
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-3 chat-input-section border-top">
                  <div className="row">
                    <div className="col">
                      <div>
                        <input
                          type="text"
                          className="form-control rounded chat-input ps-3"
                          placeholder="Enter Message..."
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <button
                        type="submit"
                        className="btn btn-primary chat-send w-md waves-effect waves-light"
                      >
                        <span className="d-none d-sm-inline-block me-2">
                          Send
                        </span>{" "}
                        <i className="mdi mdi-send" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown float-end">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Sales Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Export Report
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Profit
                      </a>
                      {/* item*/}
                      <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                  <h4 className="card-title mb-4">Latest Transactions</h4>
                  <div className="table-responsive">
                    <table
                      className="table table-centered datatable dt-responsive nowrap"
                      data-bs-page-length={5}
                      style={{
                        borderCollapse: "collapse",
                        borderSpacing: 0,
                        width: "100%"
                      }}
                    >
                      <thead className="table-light">
                        <tr>
                          <th style={{ width: 20 }}>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </th>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Billing Name</th>
                          <th>Total</th>
                          <th>Payment Status</th>
                          <th style={{ width: 120 }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck1"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1572
                            </a>{" "}
                          </td>
                          <td>04 Apr, 2020</td>
                          <td>Walter Brown</td>
                          <td>$172</td>
                          <td>
                            <div className="badge badge-soft-success font-size-12">
                              Paid
                            </div>
                          </td>
                          <td id="tooltip-container1">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck2"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck2"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1571
                            </a>{" "}
                          </td>
                          <td>03 Apr, 2020</td>
                          <td>Jimmy Barker</td>
                          <td>$165</td>
                          <td>
                            <div className="badge badge-soft-warning font-size-12">
                              unpaid
                            </div>
                          </td>
                          <td id="tooltip-container2">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck3"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck3"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1570
                            </a>{" "}
                          </td>
                          <td>03 Apr, 2020</td>
                          <td>Donald Bailey</td>
                          <td>$146</td>
                          <td>
                            <div className="badge badge-soft-success font-size-12">
                              Paid
                            </div>
                          </td>
                          <td id="tooltip-container3">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container3"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container3"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck4"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck4"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1569
                            </a>{" "}
                          </td>
                          <td>02 Apr, 2020</td>
                          <td>Paul Jones</td>
                          <td>$183</td>
                          <td>
                            <div className="badge badge-soft-success font-size-12">
                              Paid
                            </div>
                          </td>
                          <td id="tooltip-container41">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container41"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container41"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck5"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck5"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1568
                            </a>{" "}
                          </td>
                          <td>01 Apr, 2020</td>
                          <td>Jefferson Allen</td>
                          <td>$160</td>
                          <td>
                            <div className="badge badge-soft-danger font-size-12">
                              Chargeback
                            </div>
                          </td>
                          <td id="tooltip-container4">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container4"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container4"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck6"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck6"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1567
                            </a>{" "}
                          </td>
                          <td>31 Mar, 2020</td>
                          <td>Jeffrey Waltz</td>
                          <td>$105</td>
                          <td>
                            <div className="badge badge-soft-warning font-size-12">
                              unpaid
                            </div>
                          </td>
                          <td id="tooltip-container5">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container5"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container5"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck7"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck7"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1566
                            </a>{" "}
                          </td>
                          <td>30 Mar, 2020</td>
                          <td>Jewel Buckley</td>
                          <td>$112</td>
                          <td>
                            <div className="badge badge-soft-success font-size-12">
                              Paid
                            </div>
                          </td>
                          <td id="tooltip-container6">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container6"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container6"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck8"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck8"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1565
                            </a>{" "}
                          </td>
                          <td>29 Mar, 2020</td>
                          <td>Jamison Clark</td>
                          <td>$123</td>
                          <td>
                            <div className="badge badge-soft-success font-size-12">
                              Paid
                            </div>
                          </td>
                          <td id="tooltip-container7">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container7"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container7"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck9"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck9"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1564
                            </a>{" "}
                          </td>
                          <td>28 Mar, 2020</td>
                          <td>Eddy Torres</td>
                          <td>$141</td>
                          <td>
                            <div className="badge badge-soft-success font-size-12">
                              Paid
                            </div>
                          </td>
                          <td id="tooltip-container8">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container8"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container8"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="ordercheck10"
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="ordercheck10"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-dark fw-bold"
                            >
                              #NZ1563
                            </a>{" "}
                          </td>
                          <td>28 Mar, 2020</td>
                          <td>Frank Dean</td>
                          <td>$164</td>
                          <td>
                            <div className="badge badge-soft-warning font-size-12">
                              unpaid
                            </div>
                          </td>
                          <td id="tooltip-container9">
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="me-3 text-primary"
                              data-bs-container="#tooltip-container9"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil font-size-18" />
                            </a>
                            <a
                              href="#" onClick={(e) => e.preventDefault()}
                              className="text-danger"
                              data-bs-container="#tooltip-container9"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="mdi mdi-trash-can font-size-18" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
      {/* End Page-content */}
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">© Nazox.</div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Crafted with <i className="mdi mdi-heart text-danger" /> by{" "}
                <a href="https://1.envato.market/themesdesign" target="_blank">
                  Themesdesign
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    {/* end main content*/}
  </div>
  {/* END layout-wrapper */}
  {/* Right Sidebar */}
  <div className="right-bar">
    <div data-simplebar="" className="h-100">
      <div className="rightbar-title d-flex align-items-center px-3 py-4">
        <h5 className="m-0 me-2">Settings</h5>
        <a href="#" onClick={(e) => e.preventDefault()} className="right-bar-toggle ms-auto">
          <i className="mdi mdi-close noti-icon" />
        </a>
      </div>
      {/* Settings */}
      <hr className="mt-0" />
      <h6 className="text-center mb-0">Choose Layouts</h6>
      <div className="p-4">
        <div className="mb-2">
          <img
            src="assets/images/layouts/layout-1.jpg"
            className="img-fluid img-thumbnail"
            alt="layout-1"
          />
        </div>
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input theme-choice"
            type="checkbox"
            id="light-mode-switch"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="light-mode-switch">
            Light Mode
          </label>
        </div>
        <div className="mb-2">
          <img
            src="assets/images/layouts/layout-2.jpg"
            className="img-fluid img-thumbnail"
            alt="layout-2"
          />
        </div>
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input theme-choice"
            type="checkbox"
            id="dark-mode-switch"
            data-bsstyle="assets/css/bootstrap-dark.min.css"
            data-appstyle="assets/css/app-dark.min.css"
          />
          <label className="form-check-label" htmlFor="dark-mode-switch">
            Dark Mode
          </label>
        </div>
        <div className="mb-2">
          <img
            src="assets/images/layouts/layout-3.jpg"
            className="img-fluid img-thumbnail"
            alt="layout-3"
          />
        </div>
        <div className="form-check form-switch mb-5">
          <input
            className="form-check-input theme-choice"
            type="checkbox"
            id="rtl-mode-switch"
            data-appstyle="assets/css/app-rtl.min.css"
          />
          <label className="form-check-label" htmlFor="rtl-mode-switch">
            RTL Mode
          </label>
        </div>
      </div>
    </div>{" "}
    {/* end slimscroll-menu*/}
  </div>
  {/* /Right-bar */}
  {/* Right bar overlay*/}
  <div className="rightbar-overlay" />
  {/* JAVASCRIPT */}
  {/* apexcharts */}
  {/* jquery.vectormap map */}
  {/* Required datatable js */}
  {/* Responsive examples */}
  {/* App js */}
</>

      
    )
}
export default Dashboard