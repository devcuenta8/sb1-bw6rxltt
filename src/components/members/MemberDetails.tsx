import React from 'react';
import { X, Mail, Phone, Calendar, BookOpen, Network, Church } from 'lucide-react';
import { Member } from '../../types';

interface MemberDetailsProps {
  member: Member;
  onClose: () => void;
}

export function MemberDetails({ member, onClose }: MemberDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              {member.avatar ? (
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
              ) : (
                <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-2xl text-indigo-600 font-medium">
                    {member.name[0]}
                  </span>
                </div>
              )}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{member.name}</h2>
                <span className="px-3 py-1 text-sm font-medium bg-indigo-50 text-indigo-700 rounded-full">
                  {member.role}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Información de Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>Miembro desde {member.joinDate}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Participación</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Church className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Ministerios</p>
                    <p className="font-medium">Ministerio de Alabanza</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Network className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Redes</p>
                    <p className="font-medium">Red Norte</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Formación</p>
                    <p className="font-medium">Fundamentos de la Fe (Nivel 1)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium text-gray-900 mb-4">Asistencia</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Asistencia General</span>
                <span className="font-medium">{member.attendance}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${member.attendance}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}