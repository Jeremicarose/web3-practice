import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";


import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
       <div>
       <section class="bg-dark">
      <nav class="navbar navbar-expand-md pt-3 pb-4">
        <div class="container align-items-center">
         
          <a class="navbar-brand text-white" href="#homepage">
            <h2><i class="bi bi-house-fill"></i></h2>
          </a>
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          
          <div
            class="collapse navbar-collapse justify-content-start align-center text-dark"
            id="main-nav"
          >
            <ul class="navbar-nav ps-4 text-white">
              <li class="nav-item">
                <a class="nav-link text-white" href="#pricing">Buy</a>
              </li>

              <li class="nav-item ps-4">
                <a class="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

    
    <section class="home-page vh-100">
      <div class="container-lg">
        <div class="row">
          <div class="col text-center text-white">
            <h1><i class="bi bi-house-fill"></i></h1>
            <h1 class="fw-bold pb-5">
             Purchase your dream House
            </h1>
            <h3>Blockchain makes it easy and secure to buy a house</h3>
            <p class="mb-5">
              Have any questions?<span class="fw-bold">Contact Us</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    

    <section id="pricing" class="bg-light">
      <div class="container-lg">
        <div class="row  text-center pt-5">
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="card" >
              <img src={require('./property1.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="fs-6 card-title h5">
                  A land measuring 1000 by 520 sqm, fenced. C of O and Survey
                  plan...
                </div>
              </div>
              <div class="card-footer">
                <div class="build">
                  <h6 class="mt-1">
                    Current Value : <span class="fw-bold">$22,000</span>
                  </h6>
                  <a
                    class="btn btn-primary px-5 btn-sm bg-dark text-white"
                    href="/five"
                    >Buy</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="card" >
              <img src={require('./property2.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="fs-6 card-title h5">
                  A land measuring 1000 by 520 sqm, fenced. C of O and Survey
                  plan...
                </div>
              </div>
              <div class="card-footer">
                <div class="build">
                  <h6 class="mt-1">
                    Current Value : <span class="fw-bold">$22,000</span>
                  </h6>
                  <a
                    class="btn btn-primary px-5 btn-sm bg-dark text-white"
                    href="/five"
                    >Buy</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 icon-box">
            <div class="card" >
              <img src={require('./property3.jpg')} class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="fs-6 card-title h5">
                  A land measuring 1000 by 520 sqm, fenced. C of O and Survey
                  plan...
                </div>
              </div>
              <div class="card-footer">
                <div class="build">
                  <h6 class="mt-1">
                    Current Value : <span class="fw-bold">$22,000</span>
                  </h6>
                  <a
                    class="btn btn-primary px-5 btn-sm bg-dark text-white"
                    href="/five"
                    >Buy</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row  text-center pt-5 pb-5">
            <div class="col-lg-4 col-md-6 icon-box">
              <div class="card" >
                <img src={require('./property4.jpg')} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="fs-6 card-title h5">
                    A land measuring 1000 by 520 sqm, fenced. C of O and Survey
                    plan...
                  </div>
                </div>
                <div class="card-footer">
                  <div class="build">
                    <h6 class="mt-1">
                      Current Value : <span class="fw-bold">$22,000</span>
                    </h6>
                    <a
                      class="btn btn-primary px-5 btn-sm bg-dark text-white"
                      href="/five"
                      >Buy</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 icon-box">
              <div class="card">
                <img src={require('./property5.jpg')} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="fs-6 card-title h5">
                    A land measuring 1000 by 520 sqm, fenced. C of O and Survey
                    plan...
                  </div>
                </div>
                <div class="card-footer">
                  <div class="build">
                    <h6 class="mt-1">
                      Current Value : <span class="fw-bold">$22,000</span>
                    </h6>
                    <a
                      class="btn btn-primary px-5 btn-sm bg-dark text-white"
                      href="/five"
                      >Buy</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 icon-box">
              <div class="card">
                <img src={require('./property6.jpg')} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="fs-6 card-title h5">
                    A land measuring 1000 by 520 sqm, fenced. C of O and Survey
                    plan...
                  </div>
                </div>
                <div class="card-footer">
                  <div class="build">
                    <h6 class="mt-1">
                      Current Value : <span class="fw-bold">$22,000</span>
                    </h6>
                    <a
                      class="btn btn-primary px-5 btn-sm bg-dark text-white"
                      href=""
                      >Buy</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

    
    <section id="register" class="bg-dark">
      <div class="container-lg">
        <div class="row g-4 justify-content-center align-items-center py-5">
          <div class="col text-center text-md-start pt-5">
            <h2 class="fw-bold text-white pb-4">Ready to start?</h2>
          </div>
          <div class="col text-center d-none d-md-block pt-5">
          
            <div class="input-group buttonIn mb-5">
              <input
                type="text"
                class="form-control rounded-pill"
                placeholder="Enter email address"
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="bg-dark">
      <nav class="navbar navbar-expand-md navbar-dark text-white pt-2 pb-2">
        <div class="container align-items-center">
          
          <a class="navbar-brand text-white" href="#homepage">
            <h2><i class="bi bi-house-fill"></i></h2>
          </a>

          
          <div
            class="collapse navbar-collapse justify-content-start align-center"
            id="main-nav"
          >
            <ul class="navbar-nav ps-4">
              <li class="nav-item">
                <a class="nav-link" href="#pricing">Buy</a>
              </li>
              <li class="nav-item ps-4">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item ps-4">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <ul class="navbar-nav">
            <li class="nav-item pe-3">
              <h3><i class="bi bi-facebook"></i></h3>
            </li>
            <li class="nav-item pe-3">
              <h3><i class="bi bi-twitter"></i></h3>
            </li>
            <li class="nav-item pe-3">
              <h3><i class="bi bi-linkedin"></i></h3>
            </li>
          </ul>
        </div>
      </nav>
    </section>

       </div>
        
      </div>
    );
  }
}

export default App;
