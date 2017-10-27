import React, { Component } from 'react';
import { Link } from 'react-router';

class Portfolio extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="page-header">Portfolio</h1>

                <div id="technologies-list">
                    <div className="col-xs-12 col-sm-6 col-md-2 gutter-margin-xs-sm gutter-margin-sm-md">
                        <ul>
                            <li>
                                <h4 className="list-heading">Languages</h4>
                            </li>
                            <li>JavaScript</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-2 gutter-margin-xs-sm gutter-margin-sm-md">
                        <ul>
                            <li>
                                <h4 className="list-heading">Front End</h4>
                            </li>
                            <li>React/Redux</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-2 gutter-margin-xs-sm gutter-margin-sm-md">
                        <ul>
                            <li>
                                <h4 className="list-heading">Database</h4>
                            </li>
                            <li>Sequelize</li>
                            <li>SQLAlchemy</li>
                            <li>PostgreSQL</li>
                            <li>sqlite</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-sm-2 gutter-margin-xs-sm gutter-margin-sm-md">
                        <ul>
                            <li>
                                <h4 className="list-heading">Backend</h4>
                            </li>
                            <li>API</li>
                            <li>ExpressJS</li>
                            <li>Webpack</li>
                            <li>Flask</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-sm-2 gutter-margin-xs-sm gutter-margin-sm-md">
                        <ul>
                            <li>
                                <h4 className="list-heading">More</h4>
                            </li>
                            <li>AWS</li>
                            <li>Express JS</li>
                            <li>OAuth</li>
                            <li>Heroku</li>
                            <li>Bluebird</li>
                            <li>Webhook</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;