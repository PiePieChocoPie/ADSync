'use client';


import styles from "./style.module.css";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  SortingState,
  ColumnDef,
} from '@tanstack/react-table';
import { useState } from 'react';

type UserAccess = {
  name: string;
  role: string;
  systems: string[];
  description: string;
  status: string;
};

const data: UserAccess[] = [
    {
      name: 'Иван Иванов',
      role: 'HR',
      systems: ['AD', 'Bitrix24'],
      description: 'Управление сотрудниками, доступ к личным делам',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Пётр Петров',
      role: 'IT',
      systems: ['AD', 'GATE'],
      description: 'Управление доменом, пропусками',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Анна Смирнова',
      role: 'Student',
      systems: ['Educon'],
      description: 'Доступ к LMS, ограниченный доступ к AD',
      status: 'На испытательном сроке',
    },
    {
      name: 'Олег Орлов',
      role: 'Admin',
      systems: ['AD', 'Bitrix24', 'Educon', 'Exchange'],
      description: 'Полный административный доступ',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Юлия Белова',
      role: 'Finance',
      systems: ['1C'],
      description: 'Доступ к финансовой информации',
      status: 'Уволен',
    },
    {
      name: 'Максим Котов',
      role: 'HR',
      systems: ['AD', 'Exchange'],
      description: 'Работа с почтой и учетками новых сотрудников',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Никита Морозов',
      role: 'Security',
      systems: ['GATE'],
      description: 'Контроль доступа к объектам',
      status: 'Отпуск',
    },
    {
      name: 'Елена Сергеева',
      role: 'IT Support',
      systems: ['AD'],
      description: 'Создание и сопровождение учетных записей',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Кирилл Сидоров',
      role: 'Intern',
      systems: [],
      description: 'Ограниченные права',
      status: 'На испытательном сроке',
    },
    {
      name: 'Светлана Павлова',
      role: 'PR',
      systems: ['Bitrix24'],
      description: 'Коммуникации и управление новостями',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Дмитрий Кузнецов',
      role: 'IT',
      systems: ['AD', 'Exchange', 'GATE'],
      description: 'Обслуживание серверов и сетей',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Мария Шестакова',
      role: 'Legal',
      systems: ['1C', 'Bitrix24'],
      description: 'Юридическое сопровождение',
      status: 'Уволен',
    },
    {
      name: 'Василий Терентьев',
      role: 'Finance',
      systems: ['1C', 'Exchange'],
      description: 'Бухгалтерский учет и отчётность',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Оксана Федорова',
      role: 'Admin',
      systems: ['AD', 'Educon'],
      description: 'Резервный администратор',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Андрей Елисеев',
      role: 'Security',
      systems: ['GATE', 'AD'],
      description: 'Управление видеонаблюдением',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Татьяна Комарова',
      role: 'Teacher',
      systems: ['Educon'],
      description: 'Образовательная деятельность',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Артур Литвинов',
      role: 'DevOps',
      systems: ['AD', 'GitLab', 'Exchange'],
      description: 'CI/CD и инфраструктура',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Кристина Зверева',
      role: 'Marketing',
      systems: ['Bitrix24'],
      description: 'Маркетинговые кампании',
      status: 'На испытательном сроке',
    },
    {
      name: 'Егор Савельев',
      role: 'Student',
      systems: ['Educon'],
      description: 'Обычный пользователь системы обучения',
      status: 'Действующий сотрудник',
    },
    {
      name: 'Наталья Пронина',
      role: 'HR',
      systems: ['AD', 'Exchange', '1C'],
      description: 'Кадровый учёт и коммуникации',
      status: 'В декрете',
    },
  ];
  

function getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'действующий сотрудник':
        return 'bg-green-100 text-green-700';
      case 'на испытательном сроке':
        return 'bg-yellow-100 text-yellow-700';
      case 'уволен':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }

const columns: ColumnDef<UserAccess>[] = [
  {
    header: 'Имя пользователя',
    accessorKey: 'name',
  },
  {
    header: 'Роль',
    accessorKey: 'role',
  },
  {
    header: 'Системы доступа',
    accessorKey: 'systems',
    cell: ({ getValue }) => {
      const systems = getValue() as string[];
      return <>{systems.length ? systems.join(', ') : '—'}</>;
    },
  },
  {
    header: 'Описание прав',
    accessorKey: 'description',
  },
  {
    header: 'Статус',
    accessorKey: 'status',
    cell: ({ getValue }) => {
        const value = getValue() as string;
        const colorClass = getStatusColor(value);
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}
          >
            {value}
          </span>
        );
      },
  },
];

export default function AccessRightsTable() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className={`${styles.table} min-w-full text-sm text-left table-fixed`}>
        <thead className="bg-gray-100 text-gray-800">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={`${styles.tr}`}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className={`${styles.th} px-4 py-2 font-semibold relative select-none`}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' ▲',
                    desc: ' ▼',
                  }[header.column.getIsSorted() as string] ?? ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={`${styles.tr} border-t`}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 whitespace-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
