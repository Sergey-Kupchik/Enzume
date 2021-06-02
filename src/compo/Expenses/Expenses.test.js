import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

// import useExpenses from "./useExpenses";
// import {expenseContext} from "./useExpenses";
//
//
// const ExpensesContextProvider = ({ children }) => (
//     <expenseContext.Provider>{children}</expenseContext.Provider>
// );
//
// const wrapper = ({ children }) => (
//     <ExpensesContextProvider>{children}</ExpensesContextProvider>
// );
//
// let resultExpense = [];
//
// const mockSetExpenses = jest.fn().mockImplementation(expense => {
//     resultExpense = [...expense];
//
//     return resultExpense;
// });
//
// const mockUseContext = jest.fn().mockImplementation(() => ({
//     expenses: [],
//     setExpenses: mockSetExpenses,
// }));
//
// React.useContext = mockUseContext;
//
//
// describe('useExpenses', () => {
//     it('should add expense', () => {
//         const { result } = renderHook(() => useExpenses(), { wrapper });
//
//         expect(resultExpense).toHaveLength(0);
//
//         result.current.addExpense({
//             id: '1',
//             item: 'p',
//             price: '2',
//         });
//
//         expect(mockSetExpenses).toHaveBeenCalled();
//         expect(resultExpense).toHaveLength(1);
//     });
// });
