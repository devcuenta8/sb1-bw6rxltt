import React from 'react';
import { Search, Bell, LogOut } from 'lucide-react';

interface HeaderProps {
  churchName: string;
  user: {
    name: string;
    role: string;
    avatar?: string;
  };
}

export function Header({ churchName, user }: HeaderProps) {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-white border rounded-lg text-gray-700 hover:bg-gray-50">
            {churchName}
          </button>
          
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-2 w-80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>

          <div className="flex items-center gap-3">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">
                  {user.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="text-sm">
              <p className="font-medium text-gray-700">{user.name}</p>
              <p className="text-gray-500">{user.role}</p>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded">
              <LogOut className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}