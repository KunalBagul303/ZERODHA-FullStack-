import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p className="mt-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/images/zerodhaFundhouse.png" style={{width: "50%"}} />
          <p className="text-small text-muted mt-3" style={{fontSize: "0.9rem"}}>
            Our asset management venture<br/> that is creating simple and transparent
            index<br/> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5  text-center">
          <img src="media/images/sensibullLogo.svg" style={{width: "55%"}} />
          <p className="text-small text-muted mt-3" style={{fontSize: "0.9rem"}}> 
            Options trading platform that lets you<br/> create strategies, analyze
            positions, and examine<br/> data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/images/goldenpiLogo.png" style={{width: "45%"}}/>
          <p className="text-small text-muted mt-3" style={{fontSize: "0.9rem"}}>
            Bonds trading platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/images/streakLogo.png" style={{width: "45%"}}/>
          <p className="text-small text-muted mt-3" style={{fontSize: "0.9rem"}}>
            Systematic trading platform<br/> that allows you to create and backtest,<br/>
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/images/smallcaseLogo.png" style={{width: "50%"}}/>
          <p className="text-small text-muted mt-3" style={{fontSize: "0.9rem"}}>
            Thematic investing platform<br/> that helps you invest in diversified<br/>
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/images/dittoLogo.png" style={{width: "30%"}}/>
          <p className="text-small text-muted mt-3" style={{fontSize: "0.9rem"}}>
            Personalized advice on life<br/> and health insurance. No spam<br/> and no
            mis-selling.
          </p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mt-3" style={{width: "15%" , margin: "0 auto"}}>Sign up Now</button>
      </div>
    </div>
  );
}

export default Universe;