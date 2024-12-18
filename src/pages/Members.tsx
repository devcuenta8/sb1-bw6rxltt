import React from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';
import { MemberDetails } from '../components/members/MemberDetails';
import { sampleMembers } from '../data/sampleMembers';

export function Members() {
  const [selectedMember, setSelectedMember] = React.useState<Member | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredMembers = sampleMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Miembros</h1>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar miembros..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">MIEMBRO</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">CONTACTO</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">ROL</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">ASISTENCIA</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">ACCIONES</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-600 font-medium">{member.name[0]}</span>
                        </div>
                      )}
                      <div
                        className="cursor-pointer"
                        onClick={() => setSelectedMember(member)}
                      >
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">Desde {member.joinDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900">{member.email}</p>
                    <p className="text-sm text-gray-500">{member.phone}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-sm font-medium bg-indigo-50 text-indigo-700 rounded-full">
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{member.attendance}%</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${member.attendance}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="h-5 w-5 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {selectedMember && (
        <MemberDetails
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}