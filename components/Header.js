import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  searchContainer: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  navigationContainer: {
    textAlign: "center",
    paddingTop: 70
  },
  leftBarContainer: {
    height: "100%",
    border: "1px solid black"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar color="primary">
          <Typography className={classes.title}>My Ecommerce</Typography>
          <div className={classes.searchContainer}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Container fluid className={classes.navigationContainer}>
        <Button>Electronics</Button>
        <Button>Fashion</Button>
        <Button>Appliances</Button>
        <Button>Home and Garden</Button>
        <Button>Sporting Goods</Button>
        <Button>Deals</Button>
      </Container>
      <Divider />
    </>
  );
};

export default Header;
