'use strict';

// https://jsonplaceholder.typicode.com/
import React from 'react';
import { Link } from 'react-router-dom';


export class Home extends React.Component {
    render() {
        return (
            <div className={'Home'}>
                <h1>Home</h1>
                <Link to={'/sync'}>Sync</Link>
                <button onClick={ev => { this.setState((state, props) => { return {color: 'gold'} } ); }}>Update</button>
            </div>
        );
    }
    constructor( props, context ) {
        super( props );
        this.state = {
            color: 'pink'
        }
    }
    // UNSAFE_componentWillMount() {
    componentWillMount() {
        return fetch( 'https://jsonplaceholder.typicode.com/posts/1' )
            .then( res => res.json() )
            .then( json => {
                console.log( '[json]', json );
            } )
    }
    static getDerivedStateFromProps( props, state ) {
        console.log( '[props, state]', props, state );
        return { backgroundColor: 'green' }
    }
    getSnapshotBeforeUpdate( prevProps, prevState ) {
        return {
            weather: 'sun'
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[snapshot]', snapshot);
    }
}


export default Home;
