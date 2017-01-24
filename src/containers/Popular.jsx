import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchPopular } from '../actions';

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
    { fetchPopular }
)
export default class Popular extends Component {
    componentWillMount() {
        const { fetchPopular } = this.props;
        fetchPopular();
    }

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <Loader loading={this.props.loading}>
                        <MovieGrid movies={this.props.popular} />
                    </Loader>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.popular.items,
        loading: state.popular.isFetching,
    };
}
