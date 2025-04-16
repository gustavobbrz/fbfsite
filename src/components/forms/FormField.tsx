import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Select,
  InputProps,
  TextareaProps,
  SelectProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  children?: ReactNode;
  isRequired?: boolean;
}

type InputFieldProps = FormFieldProps & InputProps & {
  type?: string;
};

type TextareaFieldProps = FormFieldProps & TextareaProps;

type SelectFieldProps = FormFieldProps & SelectProps & {
  options: Array<{ value: string; label: string }>;
};

export function InputField({
  label,
  error,
  isRequired,
  ...props
}: InputFieldProps) {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

export function TextareaField({
  label,
  error,
  isRequired,
  ...props
}: TextareaFieldProps) {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Textarea {...props} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

export function SelectField({
  label,
  error,
  options,
  isRequired,
  ...props
}: SelectFieldProps) {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Select {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
} 