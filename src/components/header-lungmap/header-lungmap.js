/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * LungMAP Portal header component.
 */

// Core dependencies
import { Link } from "gatsby";
import React from "react";

// App dependencies
import ClickHandler from "../clickHandler/clickHandler";
import SiteSearchBar from "../siteSearch/siteSearchBar/siteSearchBar";
import SiteSearchButton from "../siteSearch/siteSearchButton/siteSearchButton";

// Images
import headerLogo from "../../../images/lungmap/logo/logo-lungmap.png";

// Class name helper
import classNames from "classnames";

// Styles
import * as compStyles from "./header-lungmap.module.css";
import * as fontStyles from "../../styles/fontsize.module.css";
import * as globalStyles from "../../styles/global.module.css";

class HeaderLungMAP extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuNav: false, openNav: false, searchBarOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
  }

  componentDidMount() {
    // Set up header menu style
    this.setNavStyle();

    window.addEventListener("resize", this.setNavStyle);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setNavStyle);
  }

  shouldComponentUpdate(_, nextState) {
    return this.state !== nextState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchBarOpen && this.state.openNav) {
      this.setState({ openNav: false });
    }
  }

  setNavStyle = () => {
    const { openNav } = this.state;
    const useMenuNav = document.body.getBoundingClientRect().width < 840;
    const closeMenuNav = !useMenuNav;

    this.setState({ menuNav: useMenuNav });

    if (closeMenuNav && openNav) {
      // Close the menu if resize occurs when menu is open and screen width is > 840
      this.setState({ openNav: false });
    }
  };

  toggleMenu = () => {
    const { menuNav, openNav } = this.state;

    if (menuNav) {
      this.setState({ openNav: !openNav });
      this.props.onHandleSiteScroll(openNav);
    }
  };

  toggleSearchBar = (open) => {
    this.setState({ searchBarOpen: open });
  };

  render() {
    const { homePage, links } = this.props,
      { menuNav, openNav } = this.state,
      browserLink = process.env.GATSBY_EXPLORE_URL,
      exploreDescription = "Search for data in LungMAP",
      exploreLabel = "Explore",
      hideLinks = menuNav && !openNav;

    const Description = (props) => {
      const { children } = props;

      return (
        <span className={classNames(fontStyles.xxs, compStyles.xxs)}>
          {children}
        </span>
      );
    };

    const ExternalLink = (props) => {
      const { children, className, linkTo } = props;

      return (
        <li className={className}>
          <a href={linkTo} onClick={this.toggleMenu}>
            {children}
          </a>
        </li>
      );
    };

    const HeaderNavDisplay = (props) => {
      const { description, label } = props,
        { menuNav } = this.state;

      return (
        <>
          <span className={classNames(fontStyles.xs, compStyles.xs)}>
            {label}
          </span>
          {menuNav ? <Description>{description}</Description> : null}
        </>
      );
    };

    const InternalLink = (props) => {
      const { children, className, path } = props;

      return (
        <li className={className}>
          <Link
            activeClassName={compStyles.active}
            partiallyActive={true}
            to={path}
            onClick={this.toggleMenu}
          >
            {children}
          </Link>
        </li>
      );
    };

    const Nav = (props) => {
      const { nav } = props,
        { description, headerName, name, path } = nav || {},
        label = headerName ? headerName : name;

      return (
        <InternalLink path={path}>
          <HeaderNavDisplay description={description} label={label} />
        </InternalLink>
      );
    };

    const NavExplore = () => {
      return (
        <ExternalLink linkTo={browserLink}>
          <HeaderNavDisplay
            description={exploreDescription}
            label={exploreLabel}
          />
        </ExternalLink>
      );
    };

    return (
      <div
        className={classNames(compStyles.navBar, {
          [compStyles.hcaHeader]: homePage,
        })}
      >
        <div
          className={classNames(globalStyles.wrapper, compStyles.headerWrapper)}
        >
          <a href="https://lungmap.net/" className={compStyles.logo}>
            <img src={headerLogo} alt="LungMAP" />
          </a>
          <div
            className={classNames(
              compStyles.links,
              { [compStyles.small]: menuNav },
              { [compStyles.hide]: hideLinks }
            )}
          >
            <NavExplore />
            {links.map((l, i) => (
              <Nav key={i} nav={l} />
            ))}
          </div>
          <SiteSearchButton lungmap toggleSearchBar={this.toggleSearchBar} />
          <SiteSearchBar
            lungmap
            searchBarOpen={this.state.searchBarOpen}
            toggleSearchBar={this.toggleSearchBar}
          />
          <ClickHandler
            className={classNames(compStyles.menuDropDown, fontStyles.s, {
              [compStyles.hide]: !menuNav,
            })}
            clickAction={this.toggleMenu}
            tag={"div"}
          >
            Menu
          </ClickHandler>
          <ClickHandler
            className={classNames(compStyles.overlay, {
              [compStyles.hide]: !openNav,
            })}
            clickAction={this.toggleMenu}
            tag={"div"}
          />
        </div>
      </div>
    );
  }
}

export default (props) => {
  const links = [
    {
      description: "Fields used to describe datasets in LungMAP",
      headerName: null,
      name: "Metadata",
      path: "/metadata",
      position: {
        location: "h",
        order: 0,
      },
    },
    {
      description: "APIs",
      headerName: null,
      name: "APIs",
      path: "/apis",
      position: {
        location: "h",
        order: 2,
      },
    },
  ];
  return <HeaderLungMAP links={links} {...props} />;
};
