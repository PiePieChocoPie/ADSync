"use client"
import React from 'react';
import styles from "./style.module.css";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnResizeMode,
} from '@tanstack/react-table';
import { useState } from 'react';

type Employee = {
  id: number;
  fullName: string;
  department: string;
  position: string;
  status: string;
  createdAt: string;
};

interface Props {
  data: Employee[];
}



export default function EmployeeTable({ data }: Props) {
    function getStatusColor(status: string): string {
        switch (status.toLowerCase()) {
          case 'создано':
            return 'bg-green-100 text-green-700';
          case 'в ожидании':
            return 'bg-yellow-100 text-yellow-700';
          case 'ошибка':
            return 'bg-red-100 text-red-700';
          default:
            return 'bg-gray-100 text-gray-600';
        }
      }
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');

  const columns: ColumnDef<Employee>[] = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'ФИО',
      accessorKey: 'fullName',
    },
    {
      header: 'Отдел',
      accessorKey: 'department',
    },
    {
      header: 'Должность',
      accessorKey: 'position',
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
    {
      header: 'Дата создания',
      accessorKey: 'createdAt',
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode,
    debugTable: false,
  });

  return (
    <div className="overflow-x-auto">
      <table className={`${styles.table} min-w-full text-sm text-left table-fixed`}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={`${styles.tr}`}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`${styles.th} px-4 py-2 font-semibold relative select-none`}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ width: header.getSize() }}
                >
                  <div className="flex items-center justify-between">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: ' ▲',
                      desc: ' ▼',
                    }[header.column.getIsSorted() as string] ?? ''}
                  </div>

                  {/* Resizer */}
                  {header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className="absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none"
                    />
                  )}
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
