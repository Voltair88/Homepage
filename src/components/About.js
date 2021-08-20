import React, { Component, Fragment } from 'react'
import Pdf from '../resume.pdf';


export default class About extends Component {
    render () {
        return (
            <Fragment>
                My about me page
                <a href={Pdf} without rel="noopener noreferrer" target="_blank">
      <button trailingIcon="picture_as_pdf" label="Resume">
        PDF
      </button>
   </a>
            </Fragment>
        )
    }
}
