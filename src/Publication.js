import React, { Component } from 'react';
import { PerseidsHeader } from 'perseids-react-components';

import ArethusaWrapper from './lib/ArethusaWrapper';
import Treebank from './Treebank';

class Publication extends Component {
  constructor(props) {
    super(props);

    this.arethusa = new ArethusaWrapper();
  }

  renderRow(title, text) {
    return (
      <tr>
        <th scope="col">{title}</th>
        <td>{text}</td>
      </tr>
    );
  }

  renderLinkRow(title, link) {
    return (
      <tr>
        <th scope="col">{title}</th>
        <td>
          <a href={link}>{link}</a>
        </td>
      </tr>
    );
  }

  render() {
    const {
      author,
      work,
      editors,
      locus,
      link,
      notes,
      xml,
      chunks,
      match,
    } = this.props;

    return (
      <React.Fragment>
        <PerseidsHeader>
          <span>
            {author}
            <i> {work} </i>
            {locus}
          </span>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
        </PerseidsHeader>
        <div className="container pt-3">
          <h2>
            <span>
              {author},
              <i> {work} </i>
              {locus}
            </span>
          </h2>
          <table className="table">
            <tbody>
              {editors && this.renderRow("Editors", editors)}
              {link && this.renderLinkRow("Link", link)}
              {notes && this.renderRow("Notes", notes)}
            </tbody>
          </table>
          <div style={{ "minHeight": "350px" }}>
            <Treebank xml={xml} chunks={chunks} match={match} arethusa={this.arethusa} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Publication;