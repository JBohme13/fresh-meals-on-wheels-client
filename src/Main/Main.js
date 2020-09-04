import React from 'react'
import { Route } from 'react-router-dom'
import MainError from './MainError'
import PropTypes from 'prop-types'

export default function Main(props) {
    return(
        <MainError>
            <section className='main-container'>
                {
                    props.routes.map((route, i) => {
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
};

Main.propTypes = {
    routes: PropTypes.array,
};

Main.defaultProps = {
    routes: [],
};