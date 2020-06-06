import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {
  //console.log(props.currentUser);
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser,
  });

  setValue('name', props.currentUser.name);
  setValue('Username', props.currentUser.Username);

  const onSubmit = (data, e) => {
    console.log(data);

    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input type="text" name="name" />
      {errors?.name?.message}
      <label>NickName</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: { value: true, message: 'Campo requerido' },
        })}
      />
      {errors?.username?.message}
      <button>Editar</button>
    </form>
  );
};

export default EditUserForm;
