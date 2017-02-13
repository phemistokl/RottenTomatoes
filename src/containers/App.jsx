import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router';

const styles = {
      nav: {
        background: 'black',
        top: 0,
        width: '100%',
        transition: 'all 0.5s',
        position: 'relative',
        zIndex: 1,
      },
      linkLine: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
      },
      link: {
        textDecoration: 'none',
        padding: 10,
        display: 'inline-block',
        color: 'white',
        transition: 'all 0.2s',
        textTransform: 'uppercase',
      },
      box: {
        flex:1,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }
};

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <div>
                <div style={styles.nav}>
                  <div style={styles.linkLine}>
                    <div style={styles.box}>
                      <Link style={styles.link} to="/movies">Movies</Link>
                    </div>

                    <div style={styles.box}>
                      <Link style={styles.link} to="/popular">Popular</Link>
                    </div>

                    <div style={styles.box}>
                      <Link style={styles.link} to="/top">Top</Link>
                    </div>

                    <div style={styles.box}>
                      <Link style={styles.link} to="/playing">Playing</Link>
                    </div>
                  </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
            </MuiThemeProvider>
        )
    }
}
