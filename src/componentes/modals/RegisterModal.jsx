import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { submitHandler, useForm } from 'react-hook-form';
import Modals from './Modals';
import useRegisterModalStore from '@/hooks/useRegisterModal';
import Heading from '../Heading';
import Input from '../Input';
import { toast } from 'react-hot-toast';
import CustomButton from '../Button';
import { signIn } from 'next-auth/react';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
const RegisterModal = () => {
  const registerModal = useRegisterModalStore();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
});
const onSubmit = (data) => {
  setIsLoading(true);

  axios.post('/api/register', data)
  .then(() => {
    toast.success('Registered!');
    registerModal.onClose();
    loginModal.onOpen();
  })
  .catch((error) => {
    toast.error(error);
  })
  .finally(() => {
    setIsLoading(false);
  })
}

const bodyContent = (
  <div className="flex flex-col gap-4">
    <Heading
      title="Welcome to Airbnb"
      subtitle="Create an account!"
    />
    <Input
      id="email"
      label="Email"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
    />
    <Input
      id="name"
      label="Name"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
    />
    <Input
      id="password"
      label="Password"
      type="password"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
    />
  </div>
)
  const footerContent = (
    <div className='flex flex-col gap-3 mt-3'>
<hr/>
<CustomButton outline label="Continue with Google" icon={FcGoogle} 
onClick={()=>signIn(Google)}/>
<CustomButton outline label="Continue with Github" icon={AiFillGithub} 
onClick={()=>signIn('github')}/>
<div className='text-neutral-500 text-center mt-4 font-light'>
    <div className='justfiy-center flex flex-row items items-center gap-2'>
        <div>Already have an account ?</div>
        <div className='text-neutral-800 cursor-pointer hover:underline' onClick={registerModal.onClose}>Login</div>
        </div>
</div>
    </div>
  )
  return (
        <Modals disabled={isLoading} 
        isOpen={registerModal.isOpen} title= "Register" 
        actionLabel="Continue" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        />
  );
};

export default RegisterModal;
