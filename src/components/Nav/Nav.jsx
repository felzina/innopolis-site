import { Fragment } from "react";
import { Link } from "react-router-dom";
import { breadCrumbs } from "../../mocks/breadcrumbs";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        {breadCrumbs.map((item, index) => {
          return (
            <Fragment key={index}>
              <Link to={item.href}>{ item.text }</Link> 
              {(index !== breadCrumbs.length - 1) ? ' > ' : ''}
            </Fragment>);
        })}
      </div>
    </nav>
  );
};

export default Nav;