import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    //console.log(data);

    props.addUser(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, message: 'Campo requerido' },
        })}
      />
      {errors?.name?.message}
      <label>NickName</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: { value: true, message: 'CAmpo requerido' },
        })}
      />
      {errors?.username?.message}
      <button>Añadir pj</button>
    </form>
  );
};

export default AddUserForm;
