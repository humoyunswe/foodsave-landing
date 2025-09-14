import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  className?: string;
  responsive?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({
    children,
    className = '',
    responsive = true,
    striped = true,
    hoverable = true,
    compact = false,
    ...props
  }, ref) => {
    const table = (
      <table
        ref={ref}
        className={cn(
          'min-w-full divide-y divide-gray-200 dark:divide-gray-700',
          { 'text-sm': compact, 'text-base': !compact },
          className
        )}
        {...props}
      >
        {children}
      </table>
    );

    if (!responsive) return table;

    return (
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle px-4 sm:px-0">
          {table}
        </div>
      </div>
    );
  }
);

Table.displayName = 'Table';

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
  sticky?: boolean;
}

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ children, className = '', sticky = false, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn(
        'bg-gray-50 dark:bg-gray-800',
        { 'sticky top-0 z-10': sticky },
        className
      )}
      {...props}
    >
      {children}
    </thead>
  )
);

TableHeader.displayName = 'TableHeader';

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({
    children,
    className = '',
    striped = true,
    hoverable = true,
    ...props
  }, ref) => (
    <tbody
      ref={ref}
      className={cn(
        'divide-y divide-gray-200 dark:divide-gray-700',
        { 'divide-y divide-gray-200 dark:divide-gray-700': striped },
        { 'bg-white dark:bg-gray-900': striped },
        { 'hover:bg-gray-50 dark:hover:bg-gray-800': hoverable },
        className
      )}
      {...props}
    >
      {children}
    </tbody>
  )
);

TableBody.displayName = 'TableBody';

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
  active?: boolean;
  hoverable?: boolean;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({
    children,
    className = '',
    active = false,
    hoverable = true,
    ...props
  }, ref) => (
    <tr
      ref={ref}
      className={cn(
        { 'bg-gray-50 dark:bg-gray-800': active },
        { 'hover:bg-gray-50 dark:hover:bg-gray-800': hoverable && !active },
        className
      )}
      {...props}
    >
      {children}
    </tr>
  )
);

TableRow.displayName = 'TableRow';

interface TableHeadCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: () => void;
}

export const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  ({
    children,
    className = '',
    align = 'left',
    sortable = false,
    sortDirection = null,
    onSort,
    ...props
  }, ref) => {
    const alignment = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    }[align];

    const handleClick = () => {
      if (sortable && onSort) {
        onSort();
      }
    };

    return (
      <th
        ref={ref}
        scope="col"
        className={cn(
          'px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider',
          alignment,
          { 'cursor-pointer select-none': sortable },
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <div className={cn('flex items-center', {
          'justify-start': align === 'left',
          'justify-center': align === 'center',
          'justify-end': align === 'right',
        })}>
          {children}
          {sortable && (
            <span className="ml-2 flex flex-col">
              <span className={`h-2 w-2 ${sortDirection === 'asc' ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
                ↑
              </span>
              <span className={`h-2 w-2 ${sortDirection === 'desc' ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
                ↓
              </span>
            </span>
          )}
        </div>
      </th>
    );
  }
);

TableHeadCell.displayName = 'TableHeadCell';

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
  nowrap?: boolean;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({
    children,
    className = '',
    align = 'left',
    truncate = false,
    nowrap = false,
    ...props
  }, ref) => {
    const alignment = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    }[align];

    return (
      <td
        ref={ref}
        className={cn(
          'px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100',
          alignment,
          { 'truncate': truncate },
          { 'whitespace-nowrap': nowrap },
          className
        )}
        {...props}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'TableCell';

interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
  sticky?: boolean;
}

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, className = '', sticky = false, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn(
        'bg-gray-50 dark:bg-gray-800',
        { 'sticky bottom-0 z-10': sticky },
        className
      )}
      {...props}
    >
      {children}
    </tfoot>
  )
);

TableFooter.displayName = 'TableFooter';

// Responsive table component that transforms to cards on mobile
export function ResponsiveTable<T extends Record<string, any>>({
  columns,
  data,
  keyField,
  className = '',
  rowClassName = '',
  emptyState = 'No data available',
  onRowClick,
}: {
  columns: Array<{
    key: string;
    header: string;
    cell?: (row: T) => React.ReactNode;
    align?: 'left' | 'center' | 'right';
    className?: string;
    hideOnMobile?: boolean;
  }>;
  data: T[];
  keyField: string;
  className?: string;
  rowClassName?: string;
  emptyState?: React.ReactNode;
  onRowClick?: (row: T) => void;
}) {
  if (data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        {emptyState}
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Desktop Table */}
      <div className="hidden sm:block">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHeadCell 
                  key={column.key} 
                  align={column.align}
                  className={column.className}
                >
                  {column.header}
                </TableHeadCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow 
                key={String(row[keyField])}
                className={cn(
                  { 'cursor-pointer': onRowClick },
                  rowClassName
                )}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <TableCell 
                    key={column.key} 
                    align={column.align}
                    className={column.className}
                  >
                    {column.cell ? column.cell(row) : row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-3">
        {data.map((row) => (
          <div 
            key={String(row[keyField])}
            className={cn(
              'bg-white dark:bg-gray-800 rounded-lg shadow p-4',
              { 'cursor-pointer': onRowClick }
            )}
            onClick={() => onRowClick?.(row)}
          >
            {columns
              .filter(column => !column.hideOnMobile)
              .map((column) => (
                <div 
                  key={column.key} 
                  className="py-2 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0 first:pt-0"
                >
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {column.header}
                  </div>
                  <div className="text-sm text-gray-900 dark:text-gray-100">
                    {column.cell ? column.cell(row) : row[column.key]}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
