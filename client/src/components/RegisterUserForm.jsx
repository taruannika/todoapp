export default function RegisterUserForm() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-2 md:p-0">
      <form className="flex flex-col gap-2 w-full max-w-md  p-4 rounded-lg shadow-lg bg-slate-50 ">
        <h1 className="text-center mb-4 font-semibold text-xl text-gray-700">
          Register new user
        </h1>
        <div className="flex flex-col ">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name..."
            autoComplete="off"
            className="w-full p-2 border border-gray-500 rounded-lg focus:border-gray-600"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email..."
            autoComplete="new-user"
            className="w-full p-2 border border-gray-500 rounded-lg focus:border-gray-600"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password..."
            autoComplete="new-user"
            className="w-full p-2 border border-gray-500 rounded-lg focus:border-gray-600"
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="confirm password..."
            autoComplete="new-user"
            className="w-full p-2 border border-gray-500 rounded-lg focus:border-gray-600"
          />
        </div>

        <button className="bg-slate-500 p-2 rounded-lg text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
