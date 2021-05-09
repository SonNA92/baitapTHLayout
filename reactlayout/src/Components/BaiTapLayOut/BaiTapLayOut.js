import React, { Component } from 'react'
import BTCarousel from './BTCarousel'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTProductsList from './BTProductsList'
import BTProducts from './BTProductsList'

export default class BaiTapLayOut extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTCarousel/>
                <BTProductsList/>
                <BTFooter/>
            </div>
        )
    }
}
