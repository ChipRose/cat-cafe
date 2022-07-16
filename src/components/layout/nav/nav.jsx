import React from 'react';

import { AppRoute } from '../../../mocks/const.js';

import Button from "../../ui/button/button.jsx";

function Nav() {
  return (
    <nav>
      <Button  link={AppRoute.BUY} $minWidth={260}>Купить билет</Button>
    </nav>
  );
}

export default Nav;
