import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainError from './MainError'
import PropTypes from 'prop-types'

export default class Main extends Component {
    render() {
        return(
            <MainError>
                <section className='main-container'>
                    {
                        this.props.routes.map((route, i) => {
                            return(
                                <Route
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            )
                        })
                    }
                </section>
            </MainError>
        )
    }
};

Main.propTypes = {
    routes: PropTypes.array,
};

Main.defaultProps = {
    routes: [],
};