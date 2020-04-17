import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createMuiTheme } from "@material-ui/core/styles";
import muiShadows from "@material-ui/core/styles/shadows";

const shadows = [...muiShadows];
shadows[1] = `0px 1px 4px 0px #f1f1f1`;

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "capitalize"
    }
  },
  props: {
    MuiExpansionPanelSummary: {
      expandIcon: <ExpandMoreIcon />,
      IconButtonProps: { edge: false }
    }
  },
  palette: {
    primary: {
      main: "#556cd6"
    }
  },
  shadows,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 32
      },
      h2: {
        fontSize: 22
      }
    },
    MuiExpansionPanel: {
      root: {
        borderRadius: 4,
        "&:before": {
          content: "none"
        },
        "&$expanded": {
          margin: 0
        }
      }
    },
    MuiExpansionPanelSummary: {
      expandIcon: {
        order: -1,
        transform: "rotate(-90deg)",
        position: "relative",
        right: "auto",
        top: "auto",
        "&$expanded": {
          transform: "rotate(0deg)"
        }
      },
      root: {
        padding: 0,
        minHeight: 48,
        userSelect: "auto",
        "&$expanded": {
          minHeight: 48
        },
        "&$focused": {
          backgroundColor: "transparent",
          "& > $expandIcon": {
            // backgroundColor: color.secondaryHover
          }
        }
      },
      content: {
        margin: 0,
        "&$expanded": {
          margin: 0
        },
        "& > :last-child": {
          paddingRight: "inherit"
        }
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        flexDirection: "column",
        padding: "0px 16px 12px"
      }
    },
    MuiExpansionPanelActions: {
      root: {
        padding: "0px 16px 12px"
      }
    }
  }
});

export default theme;
