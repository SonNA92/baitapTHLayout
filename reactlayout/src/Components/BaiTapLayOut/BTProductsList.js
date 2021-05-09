import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class BTProductsList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <BTProduct/>
                    </div>
                </div>
                
            </div>
        )
    }
}
