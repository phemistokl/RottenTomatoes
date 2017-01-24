import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchPlaying } from '../actions';

import Loader from '../components/Loader.jsx';
import MovieGrid from '../components/MovieGrid.jsx';

const styles = {
    container: {
        height: '100%',
        maxWidth: 800,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        margin: '0 auto'
    }
};

@withRouter
@connect(
    mapStateToProps,
    { fetchPlaying }
)
export default class Playing extends Component {
    componentWillMount() {
        const { fetchPlaying } = this.props;
        fetchPlaying();
    }

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <Loader loading={this.props.loading}>
                        <MovieGrid movies={this.props.playing} />
                    </Loader>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        playing: state.playing.items,
        loading: state.playing.isFetching,
    };
}
