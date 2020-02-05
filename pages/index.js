import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  homeContainer: {
    paddingTop: 10
  },
  gridItemAdvertise: {
    textAlign: "center"
  },
  gridItemAdvertiseCard: {
    height: "100%"
  },
  itemPhotos: {
    margin: "0 auto",
    textAlign: "center",
    height: 150,
    width: "90%"
  },
  offerTitle: {
    textAlign: "center",
    padding: "10px 0 20px 0"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.homeContainer}>
      <div className={classes.offerTitle}>
        <Typography color="primary" variant="h4">
          Today
        </Typography>
      </div>
      <Grid container direction="row" justify="space-around">
        <Grid sm={5} xs={12} item className={classes.gridItemAdvertise}>
          <Card>
            <CardHeader title="Earbuds" subheader="US$ 50.00"></CardHeader>
            <CardMedia className={classes.itemPhotos} image="/earphones.jpg" />
            <CardContent>
              Take your morning walk with these Insignia Bluetooth earbuds, and
              enjoy comfortable wear from two included sizes. Compatible with a
              range of Bluetooth-enabled Apple devices, these earbuds let you
              share your playlist right from your phone. An inline microphone
              and controls lets you take and make calls at a touch on these
              Insignia Bluetooth earbuds.
            </CardContent>
          </Card>
        </Grid>
        <Grid sm={5} xs={12} item className={classes.gridItemAdvertise}>
          <Card className={classes.gridItemAdvertiseCard}>
            <CardHeader title="Rollerblades" subheader="US$ 50.00"></CardHeader>
            <CardMedia className={classes.itemPhotos} image="/roller.jpg" />
            <CardContent>
              Roller with 4 wheels. Perfect to have fun with family and kids!
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
