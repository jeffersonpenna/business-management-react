import React, { Component } from 'react';
import { Container } from './styles';

class Table extends Component {
  renderThread = (thead, theadsSize) => {
    const theadSize = theadsSize ? `${theadsSize}%` : '';
    return <th width={theadSize}>{thead}</th>;
  };

  render() {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              {this.props.theads.map((item, key) =>
                this.renderThread(item, this.props.theadsSizes[key])
              )}
            </tr>
          </thead>
        </table>
      </Container>
    );
  }
}

export default Table;
