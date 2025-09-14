import { ReactNode, FormHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Form({ children, className = '', fullWidth = false, ...props }: FormProps) {
  return (
    <form 
      className={cn(
        'space-y-6',
        { 'w-full max-w-2xl mx-auto': !fullWidth },
        className
      )}
      {...props}
    >
      {children}
    </form>
  );
}

interface FormGroupProps {
  children: ReactNode;
  className?: string;
  label?: string;
  htmlFor?: string;
  error?: string;
  helpText?: string;
  required?: boolean;
}

export function FormGroup({ 
  children, 
  className = '', 
  label, 
  htmlFor, 
  error, 
  helpText,
  required = false 
}: FormGroupProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label 
          htmlFor={htmlFor} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="mt-1">
        {children}
      </div>
      
      {error ? (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      ) : helpText ? (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helpText}</p>
      ) : null}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Input({ 
  className = '', 
  label, 
  error,
  helpText,
  fullWidth = false,
  leftIcon,
  rightIcon,
  id,
  ...props 
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const input = (
    <div className="relative rounded-md shadow-sm">
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">{leftIcon}</span>
        </div>
      )}
      
      <input
        id={inputId}
        className={cn(
          'block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm',
          'dark:bg-gray-800 dark:border-gray-700 dark:text-white',
          { 
            'pl-10': leftIcon,
            'pr-10': rightIcon,
            'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500': error,
            'w-full': fullWidth
          },
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined}
        {...props}
      />
      
      {rightIcon && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <span className="text-gray-500 sm:text-sm">{rightIcon}</span>
        </div>
      )}
    </div>
  );

  if (label || helpText || error) {
    return (
      <FormGroup 
        label={label} 
        htmlFor={inputId} 
        error={error} 
        helpText={helpText}
        required={props.required}
      >
        {input}
      </FormGroup>
    );
  }

  return input;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
  rows?: number;
}

export function TextArea({ 
  className = '', 
  label, 
  error,
  helpText,
  fullWidth = false,
  rows = 3,
  id,
  ...props 
}: TextAreaProps) {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  const textarea = (
    <textarea
      id={textareaId}
      rows={rows}
      className={cn(
        'block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm',
        'dark:bg-gray-800 dark:border-gray-700 dark:text-white',
        { 
          'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500': error,
          'w-full': fullWidth
        },
        className
      )}
      aria-invalid={!!error}
      aria-describedby={error ? `${textareaId}-error` : helpText ? `${textareaId}-help` : undefined}
      {...props}
    />
  );

  if (label || helpText || error) {
    return (
      <FormGroup 
        label={label} 
        htmlFor={textareaId} 
        error={error} 
        helpText={helpText}
        required={props.required}
      >
        {textarea}
      </FormGroup>
    );
  }

  return textarea;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
  options: Array<{ value: string; label: string }>;
}

export function Select({ 
  className = '', 
  label, 
  error,
  helpText,
  fullWidth = false,
  options,
  id,
  ...props 
}: SelectProps) {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  const select = (
    <select
      id={selectId}
      className={cn(
        'block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm',
        'dark:bg-gray-800 dark:border-gray-700 dark:text-white',
        { 
          'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500': error,
          'w-full': fullWidth
        },
        className
      )}
      aria-invalid={!!error}
      aria-describedby={error ? `${selectId}-error` : helpText ? `${selectId}-help` : undefined}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  if (label || helpText || error) {
    return (
      <FormGroup 
        label={label} 
        htmlFor={selectId} 
        error={error} 
        helpText={helpText}
        required={props.required}
      >
        {select}
      </FormGroup>
    );
  }

  return select;
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
}

export function Checkbox({ 
  className = '', 
  label, 
  error,
  helpText,
  fullWidth = false,
  id,
  ...props 
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={cn('flex items-start', { 'w-full': fullWidth }, className)}>
      <div className="flex items-center h-5">
        <input
          id={checkboxId}
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500',
            'dark:bg-gray-800 dark:border-gray-700',
            { 'border-red-300 text-red-900 focus:ring-red-500': error }
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${checkboxId}-error` : helpText ? `${checkboxId}-help` : undefined}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        <label 
          htmlFor={checkboxId} 
          className="font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {error && (
          <p id={`${checkboxId}-error`} className="text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p id={`${checkboxId}-help`} className="text-gray-500 dark:text-gray-400">
            {helpText}
          </p>
        )}
      </div>
    </div>
  );
}

interface RadioGroupProps {
  label?: string;
  name: string;
  options: Array<{ value: string; label: string; helpText?: string }>;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  helpText?: string;
  className?: string;
  required?: boolean;
}

export function RadioGroup({ 
  label, 
  name, 
  options, 
  value, 
  onChange, 
  error, 
  helpText, 
  className = '',
  required = false
}: RadioGroupProps) {
  const groupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <fieldset className={className}>
      {label && (
        <legend className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </legend>
      )}
      
      <div className="space-y-3">
        {options.map((option) => (
          <div key={option.value} className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={`${groupId}-${option.value}`}
                name={name}
                type="radio"
                checked={value === option.value}
                onChange={() => onChange?.(option.value)}
                className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                aria-describedby={option.helpText ? `${groupId}-${option.value}-help` : undefined}
              />
            </div>
            <div className="ml-3 text-sm">
              <label 
                htmlFor={`${groupId}-${option.value}`} 
                className="font-medium text-gray-700 dark:text-gray-300"
              >
                {option.label}
              </label>
              {option.helpText && (
                <p 
                  id={`${groupId}-${option.value}-help`}
                  className="text-gray-500 dark:text-gray-400"
                >
                  {option.helpText}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      
      {helpText && !error && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{helpText}</p>
      )}
    </fieldset>
  );
}
