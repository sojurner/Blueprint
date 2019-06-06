/* eslint-disable indent */
import React from 'react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-unresolved
import LystForm from '@molecules/Form';
import { text } from '@storybook/addon-knobs/react';

const styles = `
  margin: 1rem;
`;

storiesOf('Molecules', module)
  .addWithJSX('Form(W/StartAdorment)', () => (
    <LystForm
      formProps={{
        handleChange: () => {},
        values: {},
        label: 'Label',
        inputList: [
          {
            inputProps: {
              // https://material-ui.com/api/input/
              label: 'Search Icons',
              name: 'search',
              styles: text('input styles', styles, 'Props'),
              variant: 'standard',
              margin: 'dense'
            },
            iconDetails: {
              root: 'startAdornment',
              position: 'start',
              name: 'Search',
              Icon: React.lazy(() => import('@material-ui/icons/SearchRounded'))
            }
          },
          {
            inputProps: {
              label: 'Password',
              name: 'password',
              styles: text('input styles', styles, 'Props'),

              variant: 'outlined'
            },
            iconDetails: {
              root: 'startAdornment',
              position: 'start',
              name: 'Lock',
              Icon: React.lazy(() => import('@material-ui/icons/LockRounded'))
            }
          },
          {
            inputProps: {
              label: 'Username',
              name: 'username',
              styles: text('input styles', styles, 'Props'),

              variant: 'filled'
            },
            iconDetails: {
              root: 'startAdornment',
              position: 'start',
              name: 'Wifi',
              Icon: React.lazy(() => import('@material-ui/icons/WifiRounded'))
            }
          }
        ],
        styles: text(
          'styles',
          `
        width: 20rem
      `,
          'Props'
        )
      }}
    />
  ))
  .addWithJSX('Form(W/EndAdornment)', () => (
    <LystForm
      formProps={{
        handleChange: () => {},
        values: {},
        label: 'Label',
        inputList: [
          {
            inputProps: {
              // https://material-ui.com/api/input/
              label: 'Search Icons',
              name: 'search',
              styles: text('input styles', styles, 'Props'),
              variant: 'standard',
              margin: 'dense'
            },
            iconDetails: {
              root: 'endAdornment',
              position: 'start',
              name: 'Search',
              Icon: React.lazy(() => import('@material-ui/icons/SearchRounded'))
            }
          },
          {
            inputProps: {
              label: 'Password',
              name: 'password',
              styles: text('input styles', styles, 'Props'),

              variant: 'outlined'
            },
            iconDetails: {
              root: 'endAdornment',
              position: 'start',
              name: 'Lock',
              Icon: React.lazy(() => import('@material-ui/icons/LockRounded'))
            }
          },
          {
            inputProps: {
              label: 'Username',
              name: 'username',
              styles: text('input styles', styles, 'Props'),

              variant: 'filled'
            },
            iconDetails: {
              root: 'endAdornment',
              position: 'start',
              name: 'Wifi',
              Icon: React.lazy(() => import('@material-ui/icons/WifiRounded'))
            }
          }
        ],
        styles: text(
          'styles',
          `
        width: 20rem
      `,
          'Props'
        )
      }}
    />
  ));
