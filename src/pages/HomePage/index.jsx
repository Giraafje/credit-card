import './style.css';
import CreditCard from '../../components/CreditCard';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Credit card</h1>
      </header>
      <main>
        <CreditCard/>
      </main>
      <footer style={{textAlign: 'center'}}>
        <p>Czechitas, React 2</p>
      </footer>
    </div>
  );
};
