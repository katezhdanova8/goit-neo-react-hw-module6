import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import css from './App.module.css';

function App() {
  return (
    <div className={css.App}>
      <h1>PhoneBook</h1>
      <div className={css.App__container}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  )
}

export default App
