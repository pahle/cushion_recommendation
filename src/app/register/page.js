import { register } from "@/utils/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Register = () => {
  if (cookies().get("session")) {
    redirect("/dashboard");
  }

  return (
    <div className="mx-20 flex justify-center items-center">
      <div className="bg-white border-2 text-center p-8 rounded-xl flex flex-col gap-4 min-w-96">
        <div className="font-bold text-3xl">
          <h1>Register</h1>
        </div>
        <form
          action={register}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-start"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border-2 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-start"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="HM" className="text-start">
              HM
            </label>
            <select name="HM" id="HM">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="HS" className="text-start">
              HS
            </label>
            <select name="HS" id="HS">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="HK" className="text-start">
              HK
            </label>
            <select name="HK" id="HK">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="HC" className="text-start">
              HC
            </label>
            <select name="HC" id="HC">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="HJ" className="text-start">
              HJ
            </label>
            <select name="HJ" id="HJ">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="MS" className="text-start">
              MS
            </label>
            <select name="MS" id="MS">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="MK" className="text-start">
              MK
            </label>
            <select name="MK" id="MK">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="MC" className="text-start">
              MC
            </label>
            <select name="MC" id="MC">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="MJ" className="text-start">
              MJ
            </label>
            <select name="MJ" id="MJ">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="SK" className="text-start">
              SK
            </label>
            <select name="SK" id="SK">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="SC" className="text-start">
              SC
            </label>
            <select name="SC" id="SC">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="SJ" className="text-start">
              SJ
            </label>
            <select name="SJ" id="SJ">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="KC" className="text-start">
              KC
            </label>
            <select name="KC" id="KC">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="KJ" className="text-start">
              KJ
            </label>
            <select name="KJ" id="KJ">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="CJ" className="text-start">
              CJ
            </label>
            <select name="CJ" id="CJ">
              <option value={1}>Equal Importance</option>
              <option value={3}>Moderate Importance</option>
              <option value={5}>Strong Importance</option>
              <option value={7}>
                Very Strong Importance
              </option>
              <option value={9}>Extreme Importance</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-full border border-[#4D6181] text-[#4D6181] mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
