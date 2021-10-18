import React from "react";
import { Route, Link } from "react-router-dom";
import AboutCompany from "./AboutCompany";
import AboutTeam from "./AboutTeam";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <div className="row">
        <div className="col-3">
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none", color: "initial" }}
                to="/about/company"
              >
                About Company
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "initial" }}
                to="/about/team"
              >
                About Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Route path="/about/company" component={AboutCompany} />
          <Route path="/about/team" component={AboutTeam} />
        </div>
      </div>
    </>
  );
};

export default About;
