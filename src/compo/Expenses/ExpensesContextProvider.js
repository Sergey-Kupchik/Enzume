import React, { createContext, useState, useEffect } from 'react';

export const expenseContext = createContext({});

export default function ExpensesContextProvider({ children }) {
    const [expenses, setExpenses] = useState([]);

    return (
        <expenseContext.Provider value={{ expenses, setExpenses }}>
            {children}
        </expenseContext.Provider>
    );
}