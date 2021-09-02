import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate, activeCases },
}) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container} data-testid='chart-bar'>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          //className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color='textSecondary' variant='h5' gutterBottom>
              Positive Cases
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {' '}
              {new Date(lastUpdate).toDateString()}{' '}
            </Typography>
            <Typography variant='body2'>
              Number of active cases of COVID-19{' '}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          //className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom variant='h5'>
              Deaths
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={3.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {' '}
              {new Date(lastUpdate).toDateString()}{' '}
            </Typography>
            <Typography vatiant='body2'>
              Number of deaths caused by COVID-19{' '}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={2}
          // className={cx(styles.card, styles.active)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom variant='h5'>
              Active Cases
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value - deaths.value}
                duration={3.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {' '}
              {new Date(lastUpdate).toDateString()}{' '}
            </Typography>
            <Typography vatiant='body2'>
              Number of active cases by COVID-19{' '}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;