// Form.js
import { useForm, Controller } from 'react-hook-form';

const useFormWrapper = ({ onSubmit, initialValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    getValues,
    watch
  } = useForm({ defaultValues: initialValues,});

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    reset,
    Controller,
    control,
    getValues,
    formState: { errors },
    watch,
  };
};

export default useFormWrapper;
