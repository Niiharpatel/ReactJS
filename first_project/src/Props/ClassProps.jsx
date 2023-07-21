import React, { Component } from 'react';

class ClassProps extends Component {
    constructor(props) {
        super(props);       //if u create constructor then super keyword is compulsory...
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default ClassProps;