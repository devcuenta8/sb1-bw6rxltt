import React from 'react';
import { Search, DollarSign, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { FinancialTransaction } from '../types';

export function Finance() {
  const transactions: FinancialTransaction[] = [
    {
      id: '1',
      date: '2024-03-20',
      description: 'Diezmos y Ofrendas',
      amount: 5000,
      type: 'income',
      category: 'Ofrendas',
      status: 'completed',
    },
    {
      id: '2',
      date: '2024-03-19',
      description: 'Mantenimiento Edificio',
      amount: 1200,
      type: 'expense',
      category: 'Mantenimiento',
      status: 'completed',
    },
    {
      id: '3',
      date: '2024-03-18',
      description: 'Donación Especial',
      amount: 3000,
      type: 'income',
      category: 'Donaciones',
      status: 'completed',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Finanzas</h1>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar transacciones..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Balance Total</p>
              <h3 className="text-2xl font-semibold">$25,400</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Ingresos (Este Mes)</p>
              <h3 className="text-2xl font-semibold">$12,500</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
              <TrendingDown className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Gastos (Este Mes)</p>
              <h3 className="text-2xl font-semibold">$8,300</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Transacciones Recientes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">FECHA</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">DESCRIPCIÓN</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">CATEGORÍA</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">MONTO</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-600">ESTADO</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">{transaction.date}</td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                        {transaction.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-medium ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-sm font-medium bg-green-50 text-green-700 rounded-full">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}