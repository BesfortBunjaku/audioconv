import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = (theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
});

class FileList extends React.Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {}

  render() {
     
    return (
      <Grid item xs={12}>
        <List className={this.classes.root}>
          <ListItem>
            <ListItemAvatar>
              <CircularProgress
                variant="determinate"
                value="50"
                color="primary"
              />
            </ListItemAvatar>
            <ListItemText primary={this.props.file.name} secondary="Jan 10, 2014" />
          </ListItem>
          <Divider />
        
  
        </List>
      </Grid>
    );
 
  }
}
export default withStyles(useStyles)(FileList);
