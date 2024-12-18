import React, { useState } from 'react';
import { X, Plus, Search, UserMinus } from 'lucide-react';
import { Member } from '../../types';

interface GroupMembersProps {
  groupName: string;
  members: Member[];
  availableMembers: Member[];
  onClose: () => void;
  onAddMember: (memberId: string) => void;
  onRemoveMember: (memberId: string) => void;
}

export function GroupMembers({
  groupName,
  members,
  availableMembers,
  onClose,
  onAddMember,
  onRemoveMember,
}: GroupMembersProps) {
  const [showAddMembers, setShowAddMembers] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAvailableMembers = availableMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Miembros de {groupName}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar miembros..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              onClick={() => setShowAddMembers(!showAddMembers)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="h-5 w-5" />
              <span>Agregar Miembros</span>
            </button>
          </div>

          <div className="space-y-4">
            {showAddMembers && (
              <div className="border rounded-lg p-4 mb-4">
                <h3 className="font-medium text-gray-900 mb-3">Miembros Disponibles</h3>
                <div className="space-y-2">
                  {filteredAvailableMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-indigo-600 font-medium">
                              {member.name[0]}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.email}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => onAddMember(member.id)}
                        className="px-3 py-1 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg"
                      >
                        Agregar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Miembros Actuales</h3>
              <div className="space-y-2">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-600 font-medium">
                            {member.name[0]}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveMember(member.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <UserMinus className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}