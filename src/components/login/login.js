import { LuLogIn } from "react-icons/lu";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  return (
    <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
      <div className="flex flex-shrink-0 items-center justify-items-start">
        <LuLogIn size={30} onClick={() => router.push("/login")} />
      </div>
    </div>
  );
}
