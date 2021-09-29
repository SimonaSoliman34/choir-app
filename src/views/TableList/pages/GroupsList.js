import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// core components
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function GroupsList(props) {
  const classes = useStyles();
  const [openGroupsList, setOpenGroupsList] = React.useState(null);

  const handleClickGroupSelector = (event) => {
    if (openGroupsList && openGroupsList.contains(event.target)) {
      setOpenGroupsList(null);
    } else {
      setOpenGroupsList(event.currentTarget);
    }
  };
  const handleCloseGroupSelector = (group = "") => () => {
    props.setSelectedGroup(group);
    setOpenGroupsList(null);
  };
  return (
    <div>
      <div className={classes.manager}>
        <Button
          color={"transparent"}
          simple={!(window.innerWidth > 959)}
          aria-owns={openGroupsList ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickGroupSelector}
          className={classes.buttonLink}
        >
          <h4 className={classes.cardTitleWhite}>Select Group</h4>
        </Button>
        <Poppers
          open={Boolean(openGroupsList)}
          anchorEl={openGroupsList}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openGroupsList }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseGroupSelector()}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseGroupSelector("Wednesday")}
                      className={classes.dropdownItem}
                    >
                      Wednesday
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseGroupSelector("Saterday")}
                      className={classes.dropdownItem}
                    >
                      Saterday
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={handleCloseGroupSelector("Sunday")}
                      className={classes.dropdownItem}
                    >
                      Sunday
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  );
}

GroupsList.defaultProps = {};

GroupsList.propTypes = {
  setSelectedGroup: PropTypes.func.isRequired,
};