import { useDispatch, useSelector } from 'react-redux';
import { addCastomerAction, deleteCustomerAction } from './store/castomerReduser';
import { putCashAction, getCashAction } from './store/cashReduser';
import { addCastomers } from './asyncCustomers/customers';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const putMoney = (money) => {
    dispatch(putCashAction(money));
  };

  const getMoney = (money) => {
    dispatch(getCashAction(money));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };

    dispatch(addCastomerAction(customer));
  };

  const deleteCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id));
  };

  const handleNewCustomer = () => {
    let newCustomer = prompt();

    while (newCustomer.length === 0) {
      newCustomer = prompt();
    }

    return newCustomer;
  }

  return (
    <div className="App">
      <div className='App__cash'>
        <div className='App__cash-screen'>
          {cash}
        </div>

        <button className='App__btn' onClick={() => putMoney(Number(prompt()))}>
          Put money
        </button>

        <button 
          className='App__btn' 
          onClick={() => getMoney(Number(prompt()))}
        >
          Get money
        </button>
      </div>

      <hr/>

      <div className='App__customers'>
        <button className='App__btn' onClick={() => dispatch(addCastomers())}>
          Get customers
        </button>

        <button className='App__btn' onClick={() => addCustomer(handleNewCustomer())}>
          Add customer
        </button>

        {customers.length > 0
        ?
        <ul className='App__customers-list'>
          {customers.map(customer => (
            <li 
              key={customer.id} 
              onClick={() => deleteCustomer(customer)}  
              className='App__customers-item'
            >
              {customer.name}
            </li>
          ))}
        </ul>
        :
        <div className='App__customers-item App__customers-item--no-items'>
          Customers didn't found...
        </div>
        }
      </div>
    </div>
  );
}

export default App;
