import { useI18n } from "@/locales/client";
import React from "react";
import { logout } from "../../login/action";
import { useAuthStore } from "@/lib/authStore";

function LogoutBackdrop() {
  const { setIsAuthOpen } = useAuthStore();
  const t = useI18n();

  async function logoutHandler() {
    setIsAuthOpen(false);
    await logout();
  }

  function BackDropClick() {
    setIsAuthOpen(false);
  }

  return (
    <>
      <div
        onClick={BackDropClick}
        className="flex fixed top-0 w-[100%] h-[100vh] z-10 bg-gray-500 bg-opacity-40"
      />
      <div className="flex fixed top-[30vh] sm:left-[25%] sm:w-[50%] mx-4 z-20 overflow-hidden rounded-2xl shadow-lg bg-white">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              {t("logout.title")}
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <button
                onClick={logoutHandler}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t("settings.logout")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoutBackdrop;
