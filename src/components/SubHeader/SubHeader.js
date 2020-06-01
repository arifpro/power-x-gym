import React from 'react';
import './SubHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const SubHeader = (props) => {
    return (
        <div>
            <section className="subHeaderSection d-flex align-items-center">
                <div className="container ">
                    <div className="cusSubHeader">
                        <h1>{props.header}</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SubHeader;
