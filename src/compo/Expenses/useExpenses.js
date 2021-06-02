import { useContext } from 'react';
import { expenseContext } from './ExpensesContextProvider';

const useExpenses = () => {
    const { expenses, setExpenses } = useContext(expenseContext);

    const addExpense = expense => {
        setExpenses([...expenses, expense]);
    };

    return { addExpense };
};

export default useExpenses;