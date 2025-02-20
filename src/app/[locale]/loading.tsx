import { RxReload } from "react-icons/rx";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20 z-40">
      <RxReload className="animate-spin text-6xl text-blue-600 z-50" role="status" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
