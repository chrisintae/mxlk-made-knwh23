"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

type Props = {
  email: string;
  password: string;
};

export default function Account() {
  const { register, handleSubmit } = useForm<Props>({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-lg max-h-80 p-6 flex flex-col items-center justify-center border bg-white">
      <h1 className="text-2xl">Welcome back!</h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full flex flex-col gap-4"
      >
        <input type="email" placeholder="Email" {...register("email")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button className="bg-teal-500 text-white py-2 px-8">Login</button>
      </form>
    </div>
  );
}
