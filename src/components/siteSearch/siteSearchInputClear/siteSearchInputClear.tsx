/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search bar input clear component.
 */

// Core dependencies
import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";

// App dependencies
import Button from "../../button/button";
import Icon from "../../icon/icon";
import Color from "../../ui/color/color";

// Styles
import { searchClear } from "./siteSearchInputClear.module.css";
import {
  opacityEnter,
  opacityEnterActive,
  opacityExit,
  opacityExitActive,
} from "../../ui/transition/opacity.module.css";

interface Props {
  showClearButton: boolean;
}

const SiteSearchInputClear: FC<Props> = ({ showClearButton }): JSX.Element => {
  const classNamesTransition = {
    enter: opacityEnter,
    enterActive: opacityEnterActive,
    exit: opacityExit,
    exitActive: opacityExitActive,
  };

  return (
    <CSSTransition
      classNames={classNamesTransition}
      in={showClearButton}
      timeout={400}
      unmountOnExit
    >
      <span className={searchClear}>
        <Button color={Color.GRAY_LIGHT}>
          <Icon fontSize={20}>close</Icon>
        </Button>
      </span>
    </CSSTransition>
  );
};

export default React.memo(SiteSearchInputClear);
