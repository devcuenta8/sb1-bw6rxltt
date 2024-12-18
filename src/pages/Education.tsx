import React from 'react';
import { Search, GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';
import { Course } from '../types';

export function Education() {
  const courses: Course[] = [
    {
      id: '1',
      name: 'Fundamentos de la Fe',
      level: 1,
      description: 'Curso básico sobre los fundamentos de la fe cristiana',
      duration: '8 semanas',
      instructor: 'Pastor David González',
      enrolledStudents: 25,
      startDate: '2024-04-01',
      schedule: 'Martes 19:00 - 21:00',
    },
    {
      id: '2',
      name: 'Liderazgo Cristiano',
      level: 2,
      description: 'Principios de liderazgo basados en valores cristianos',
      duration: '12 semanas',
      instructor: 'María Rodríguez',
      enrolledStudents: 15,
      startDate: '2024-04-15',
      schedule: 'Jueves 19:00 - 21:00',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Escuela de Formación</h1>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar cursos..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Cursos Activos</p>
              <h3 className="text-2xl font-semibold">8</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Estudiantes</p>
              <h3 className="text-2xl font-semibold">156</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Graduados</p>
              <h3 className="text-2xl font-semibold">45</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Cursos Disponibles</h2>
          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.id} className="border rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{course.name}</h3>
                      <span className="px-2 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full">
                        Nivel {course.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{course.description}</p>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Inscribirse
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="font-medium">{course.instructor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duración</p>
                    <p className="font-medium">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Inicio</p>
                    <p className="font-medium">{course.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Horario</p>
                    <p className="font-medium">{course.schedule}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {course.enrolledStudents} estudiantes inscritos
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}