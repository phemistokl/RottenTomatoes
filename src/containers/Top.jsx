import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchTop } from '../actions';

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
    { fetchTop }
)
export default class Top extends Component {
    componentWillMount() {
        const { fetchTop } = this.props;
        fetchTop();
    }

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <Loader loading={this.props.loading}>
                        <MovieGrid movies={this.props.top} />
                    </Loader>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        top: state.top.items,
        loading: state.top.isFetching,
    };
}
