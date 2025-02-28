"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { userLogin } from "@/api/auth";
import { UserLoginType } from "@/models/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuLoaderCircle } from "react-icons/lu";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useUser from "@/context/UserContext";

const Login = () => {
  const { setAccessToken, setUserObject } = useUser();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const mutation = useMutation({
    mutationFn: (formData: UserLoginType) => userLogin(formData),
    onSuccess: (response) => {
      console.log("Login successful", response);
      setAccessToken(response.value.value.token);
      setUserObject(response.value.value.user.organizationId);
      if (typeof window !== "undefined") {
        localStorage.setItem("email", response.value.value.user.email);
        localStorage.setItem("logo", response.value.value.user.organization.logo);
        localStorage.setItem("fullName", response.value.value.user.name);
      }
      router.push("/properties");
      toast.success("Login Successful");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password, type: "DEVELOPER" });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFEDCB] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#335F32]">
          Login to Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-lg border p-3 focus:border-[#0A7E32] focus:ring-[#0A7E32]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-lg border p-3 focus:border-[#0A7E32] focus:ring-[#0A7E32]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full rounded-lg bg-[#0A7E32] py-3 font-bold text-white transition duration-300 hover:bg-[#335F32] disabled:opacity-50"
          >
            {mutation.isPending ? (
              <span className="flex items-center justify-center gap-2">
                Logging in <LuLoaderCircle className="animate-spin" size={20} />
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {mutation.isError && (
          <p className="mt-4 text-center text-sm text-red-600">
            {mutation.error.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Login;
