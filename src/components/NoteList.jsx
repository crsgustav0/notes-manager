import React, { Component } from "react";

export default class NoteList extends Component {
  render() {
    return (
      <ul>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            <p>Escreva sua nota</p>
          </section>
        </li>
      </ul>
    );
  }
}

