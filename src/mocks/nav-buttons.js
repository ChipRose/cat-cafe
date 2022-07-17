import { AppRoute } from './const.js';
import Button from '../components/ui/button/button.jsx';
import { NavButton } from '../components/styled/index.js';

const navButtons = [
  {
    to: AppRoute.MAIN,
    button: (
      <NavButton $minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </NavButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button $minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить билет
      </Button>
    )
  }
];

export {navButtons};