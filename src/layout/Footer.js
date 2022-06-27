import React, { Component } from 'react'

export default class Footer extends Component {
    props
  render() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <nav className="pull-left">
                    <ul>
                    <li>
                        <a href="/">
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="/">
                        Company
                        </a>
                    </li>
                    <li>
                        <a href="/">
                        Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="/">
                        Blog
                        </a>
                    </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
  }
}
