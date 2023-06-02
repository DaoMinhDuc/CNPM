import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, number, string, ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import './SignUp.css'
import Header from './Header';
import { Link } from 'react-router-dom';

interface Profile {
  name: string;
  age: number | undefined;
  gender: 'male' | 'female' | 'other' | null;
  username: string;
  password: string;
  address: string;
}

const schema: ObjectSchema<Profile> = object({
  name: string().required('Vui lòng nhập tên.'),
  age: number()
    .optional()
    .integer('Tuổi phải là số nguyên.')
    .positive('Tuổi phải là số dương.')
    .min(1, 'Tuổi phải lớn hơn hoặc bằng 1.')
    .max(100, 'Tuổi phải nhỏ hơn hoặc bằng 100.'),
  gender: string<'male' | 'female' | 'other'>()
    .nullable()
    .required('Vui lòng chọn giới tính.'),
  username: string()
    .required('Vui lòng nhập tên đăng nhập.')
    .min(10, 'Tên đăng nhập phải có ít nhất 10 ký tự.'),
  password: string()
    .required('Vui lòng nhập mật khẩu.')
    .min(10, 'Mật khẩu phải có ít nhất 10 ký tự.'),
  address: string().required('Vui lòng nhập địa chỉ.'),
});

const SignUp: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Profile>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Profile> = (data) => {
     axios.post('https://6477745a9233e82dd53bb1e7.mockapi.io/UserAccount', data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <>
    <Header />

    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Tên</p>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}

      <p>Tuổi</p>
      <input type="number" {...register('age')} />
      {errors.age && <p>{errors.age.message}</p>}

      <p>Giới tính</p>
      <select {...register('gender')}>
        <option value="female">Nữ</option>
        <option value="male">Nam</option>
        <option value="other">Khác</option>
      </select>
      {errors.gender && <p>{errors.gender.message}</p>}

      <p>Địa chỉ</p>
      <input {...register('address')} />
      {errors.address && <p>{errors.address.message}</p>}

      <p>Tên đăng nhập</p>
      <input {...register('username')} />
      {errors.username && <p>{errors.username.message}</p>}

      <p>Mật khẩu</p>
      <input {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}

      <Link to="/login">
  <button className="SignUp" type="submit">Đăng kí</button>
</Link>
    </form>
    </>
  );
};

export default SignUp;
