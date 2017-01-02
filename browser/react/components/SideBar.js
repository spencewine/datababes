import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const parent = props.parent;

  return (
    <sidebar>
      <section>
        <h4 className="menu-item">
          <Link to={`/parent/${parent.id}`}>My Profile</Link>
        </h4>
      </section>
    </sidebar>
  );
}
