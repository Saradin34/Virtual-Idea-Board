import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import IdeaList from './components/IdeaList';
import AddIdeaForm from './components/AddIdeaForm';

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <div>
          <h1>Виртуальная доска идей</h1>
          <AddIdeaForm />
          <IdeaList />
        </div>
      </Provider>
  );
};

export default App;