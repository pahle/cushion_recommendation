"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = ({ children }) => {
  if (!cookies().get("session")) {
    redirect("/login");
  }
  return (
    <div>
      <div className="flex justify-between my-4 mx-16">
        AHP TOPSIS
        <div className="flex justify-between gap-4">
          <a href="/dashboard/kriteria">Kriteria</a>
          <a href="/topsis">Alternatif</a>
          <a href="">Perhitungan</a>
          <a href="">Log Out</a>
          <p>User : Rayhan</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
