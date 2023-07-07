import React from 'react';

export default class DashboardHome extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a
                        href="javascript: void(0);"
                        onClick={() => this.props.history.push('/')}
                      >
                        MixDice
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
                <h4 className="page-title">Dashboard</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="card-box">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-sm bg-blue rounded">
                      <i className="fe-aperture avatar-title font-22 text-white"></i>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-right">
                      <h3 className="my-1">
                        $<span data-plugin="counterup">12,145</span>
                      </h3>
                      <p className="text-muted mb-1 text-truncate">
                        Income status
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h6 className="text-uppercase">
                    Target <span className="float-right">60%</span>
                  </h6>
                  <div className="progress progress-sm m-0">
                    <div
                      className="progress-bar bg-blue"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '60%' }}
                    >
                      <span className="sr-only">60% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="card-box">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-sm bg-success rounded">
                      <i className="fe-shopping-cart avatar-title font-22 text-white"></i>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-right">
                      <h3 className="my-1">
                        <span data-plugin="counterup">1576</span>
                      </h3>
                      <p className="text-muted mb-1 text-truncate">
                        January's Sales
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h6 className="text-uppercase">
                    Target <span className="float-right">49%</span>
                  </h6>
                  <div className="progress progress-sm m-0">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="49"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '49%' }}
                    >
                      <span className="sr-only">49% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="card-box">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-sm bg-warning rounded">
                      <i className="fe-bar-chart-2 avatar-title font-22 text-white"></i>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-right">
                      <h3 className="my-1">
                        $<span data-plugin="counterup">8947</span>
                      </h3>
                      <p className="text-muted mb-1 text-truncate">Payouts</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h6 className="text-uppercase">
                    Target <span className="float-right">18%</span>
                  </h6>
                  <div className="progress progress-sm m-0">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow="18"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '18%' }}
                    >
                      <span className="sr-only">18% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="card-box">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-sm bg-info rounded">
                      <i className="fe-cpu avatar-title font-22 text-white"></i>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-right">
                      <h3 className="my-1">
                        <span data-plugin="counterup">178</span>
                      </h3>
                      <p className="text-muted mb-1 text-truncate">
                        Available Stores
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h6 className="text-uppercase">
                    Target <span className="float-right">74%</span>
                  </h6>
                  <div className="progress progress-sm m-0">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="74"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '74%' }}
                    >
                      <span className="sr-only">74% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-widgets">
                    <a href="javascript: void(0);" data-toggle="reload">
                      <i className="mdi mdi-refresh"></i>
                    </a>
                    <a
                      data-toggle="collapse"
                      href="#cardCollpase1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="cardCollpase1"
                    >
                      <i className="mdi mdi-minus"></i>
                    </a>
                    <a href="javascript: void(0);" data-toggle="remove">
                      <i className="mdi mdi-close"></i>
                    </a>
                  </div>
                  <h4 className="header-title mb-0">Lifetime Sales</h4>

                  <div id="cardCollpase1" className="collapse pt-3 show">
                    <div className="text-center">
                      <div id="sparkline1"></div>

                      <div className="row mt-3">
                        <div className="col-4">
                          <p className="text-muted font-15 mb-1 text-truncate">
                            Target
                          </p>
                          <h4>
                            <i className="fe-arrow-down text-danger mr-1"></i>
                            $7.8k
                          </h4>
                        </div>
                        <div className="col-4">
                          <p className="text-muted font-15 mb-1 text-truncate">
                            Last week
                          </p>
                          <h4>
                            <i className="fe-arrow-up text-success mr-1"></i>
                            $1.4k
                          </h4>
                        </div>
                        <div className="col-4">
                          <p className="text-muted font-15 mb-1 text-truncate">
                            Last Month
                          </p>
                          <h4>
                            <i className="fe-arrow-down text-danger mr-1"></i>
                            $9.8k
                          </h4>
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
                  <div className="card-widgets">
                    <a href="javascript: void(0);" data-toggle="reload">
                      <i className="mdi mdi-refresh"></i>
                    </a>
                    <a
                      data-toggle="collapse"
                      href="#cardCollpase2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="cardCollpase2"
                    >
                      <i className="mdi mdi-minus"></i>
                    </a>
                    <a href="javascript: void(0);" data-toggle="remove">
                      <i className="mdi mdi-close"></i>
                    </a>
                  </div>
                  <h4 className="header-title mb-0">Income Amounts</h4>

                  <div id="cardCollpase2" className="collapse pt-3 show">
                    <div className="text-center">
                      <div id="sparkline2"></div>
                      <div className="row mt-3">
                        <div className="col-4">
                          <p className="text-muted font-15 mb-1 text-truncate">
                            Target
                          </p>
                          <h4>
                            <i className="fe-arrow-up text-success mr-1"></i>
                            641
                          </h4>
                        </div>
                        <div className="col-4">
                          <p className="text-muted font-15 mb-1 text-truncate">
                            Last week
                          </p>
                          <h4>
                            <i className="fe-arrow-down text-danger mr-1"></i>
                            234
                          </h4>
                        </div>
                        <div className="col-4">
                          <p className="text-muted font-15 mb-1 text-truncate">
                            Last Month
                          </p>
                          <h4>
                            <i className="fe-arrow-up text-success mr-1"></i>
                            3201
                          </h4>
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
                  <div className="card-widgets">
                    <a href="javascript: void(0);" data-toggle="reload">
                      <i className="mdi mdi-refresh"></i>
                    </a>
                    <a
                      data-toggle="collapse"
                      href="#cardCollpase3"
                      role="button"
                      aria-expanded="false"
                      aria-controls="cardCollpase3"
                    >
                      <i className="mdi mdi-minus"></i>
                    </a>
                    <a href="javascript: void(0);" data-toggle="remove">
                      <i className="mdi mdi-close"></i>
                    </a>
                  </div>
                  <h4 className="header-title mb-0">Total Users</h4>

                  <div id="cardCollpase3" className="collapse pt-3 show">
                    <div className="text-center">
                      <div id="sparkline3"></div>
                      <div className="row mt-3">
                        <div className="col-4">
                          <p className="text-muted font-15 mb-1 text-truncate">
                            Target
                          </p>
                          <h4>
                            <i className="fe-arrow-down text-danger mr-1"></i>
                            18k
                          </h4>
                        </div>
                        <div className="col-4">
                          <p className="text-muted font-15 mb-1 text-truncate">
                            Last week
                          </p>
                          <h4>
                            <i className="fe-arrow-up text-success mr-1"></i>
                            3.25k
                          </h4>
                        </div>
                        <div className="col-4">
                          <p className="text-muted font-15 mb-1 text-truncate">
                            Last Month
                          </p>
                          <h4>
                            <i className="fe-arrow-up text-success mr-1"></i>
                            28k
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-widgets">
                    <a href="javascript: void(0);" data-toggle="reload">
                      <i className="mdi mdi-refresh"></i>
                    </a>
                    <a
                      data-toggle="collapse"
                      href="#cardCollpase4"
                      role="button"
                      aria-expanded="false"
                      aria-controls="cardCollpase4"
                    >
                      <i className="mdi mdi-minus"></i>
                    </a>
                    <a href="javascript: void(0);" data-toggle="remove">
                      <i className="mdi mdi-close"></i>
                    </a>
                  </div>
                  <h4 className="header-title mb-0">Revenue By Location</h4>

                  <div id="cardCollpase4" className="collapse pt-3 show">
                    <div id="world-map-markers" style={{ height: 433 }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-widgets">
                    <a href="javascript: void(0);" data-toggle="reload">
                      <i className="mdi mdi-refresh"></i>
                    </a>
                    <a
                      data-toggle="collapse"
                      href="#cardCollpase5"
                      role="button"
                      aria-expanded="false"
                      aria-controls="cardCollpase5"
                    >
                      <i className="mdi mdi-minus"></i>
                    </a>
                    <a href="javascript: void(0);" data-toggle="remove">
                      <i className="mdi mdi-close"></i>
                    </a>
                  </div>
                  <h4 className="header-title mb-0">Top Selling Products</h4>

                  <div id="cardCollpase5" className="collapse pt-3 show">
                    <div className="table-responsive">
                      <table className="table table-hover table-centered mb-0">
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>ASOS Ridley High Waist</td>
                            <td>$79.49</td>
                            <td>82</td>
                            <td>$6,518.18</td>
                          </tr>
                          <tr>
                            <td>Marco Lightweight Shirt</td>
                            <td>$128.50</td>
                            <td>37</td>
                            <td>$4,754.50</td>
                          </tr>
                          <tr>
                            <td>Half Sleeve Shirt</td>
                            <td>$39.99</td>
                            <td>64</td>
                            <td>$2,559.36</td>
                          </tr>
                          <tr>
                            <td>Lightweight Jacket</td>
                            <td>$20.00</td>
                            <td>184</td>
                            <td>$3,680.00</td>
                          </tr>
                          <tr>
                            <td>Marco Shoes</td>
                            <td>$28.49</td>
                            <td>69</td>
                            <td>$1,965.81</td>
                          </tr>
                          <tr>
                            <td>ASOS Ridley High Waist</td>
                            <td>$79.49</td>
                            <td>82</td>
                            <td>$6,518.18</td>
                          </tr>
                          <tr>
                            <td>Half Sleeve Shirt</td>
                            <td>$39.99</td>
                            <td>64</td>
                            <td>$2,559.36</td>
                          </tr>
                          <tr>
                            <td>Lightweight Jacket</td>
                            <td>$20.00</td>
                            <td>184</td>
                            <td>$3,680.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
