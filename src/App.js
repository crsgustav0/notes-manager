import React from 'react';
import NoteList from './components/NoteList'

function App() {
  return (
    /*
      form - Criação componente formulario
      */
    <section>
      <form>
        <h1>App React</h1>
        <input type='text' placeholder='Título'></input>
        <textarea placeholder='Escreva sua nota...' />
        <button> Criar Nota</button>

       
      </form>
      <NoteList/>
    </section>

  );
}

export default App;
