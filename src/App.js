import "./App.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { DropzoneArea } from "material-ui-dropzone";
import FileList from "./pages/filelist";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    width: "100%",
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
    this.onDrop = this.onDrop.bind(this);
    this.state = { files: null };
  }

  onDrop(list_of_files) {
    this.setState({ files: list_of_files });
  }

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Grid container>
            <DropzoneArea onChange={this.onDrop} />
          </Grid>
          <Grid container style={{ maxHeight: "250px", overflow: "auto" }}>
            {this.state.files
              ? this.state.files.map((file) => <FileList file={file} />)
              : ""}
          </Grid>
          <Grid container direction="row" justify="center" style={{ position: "absolute", bottom: "20px"  ,borderTop: '4px dashed whitesmoke'}}>
            <Grid item xs={12} style={{ padding: "10px" }}>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label=".mp3"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label=".mp4"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label=".wav"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label=".wma"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label=".mpeg"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label=".pcm"
                    labelPlacement="top"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary">
                Convert
              </Button>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}
export default withStyles(useStyles)(App);
