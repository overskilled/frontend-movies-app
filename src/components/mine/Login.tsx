import { Button } from "../ui/button";

interface is {
  isForSign: boolean;
  onToggleSignMode: () => void;
}

export default function Login({ isForSign, onToggleSignMode }: is) {
  return (
    <div className="flex flex-col items-center justify-around w-full h-full">
      <div className="flex flex-col -mt-5">
        <h1 className="text-4xl w-full text-center uppercase">
          {isForSign == true ? "connection" : "inscription"}
        </h1>
        <p>
          {isForSign == true
            ? "entrer vos donnees pour que l'on puisse vous reconnaitre"
            : "entrer vos donnees pour que l'on puisse vous enregistrer"}
        </p>
      </div>
      <div className="flex flex-col w-full">
        {isForSign == true ? (
          <>
            <div className="flex flex-col w-full gap-2 mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="h-10 w-full pl-2 outline-none bg-slate-900/50 rounded-sm"
              />
            </div>
            <div className="flex flex-col w-full gap-2 mb-2">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                className="h-10 w-full pl-2 outline-none bg-slate-900/50 rounded-sm"
              />
            </div>
          </>
        ) : (
          ""
        )}
        <div className="flex flex-col w-full gap-2 mb-2">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            className="h-10 w-full pl-2 outline-none bg-slate-900/50 rounded-sm"
          />
        </div>
        <div className="flex flex-col w-full gap-2 mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="h-10 w-full pl-2 outline-none bg-slate-900/50 rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full items-center">
        <Button
          type="submit"
          className="w-60 cursor-pointer hover:bg-white text-md hover:text-red-800 duration-500"
        >
          {" "}
          submit
        </Button>
        <p className="w-full text-center">
          souhetez vous vous{" "}
          {isForSign == true ? "connecter ?" : "enregistrer ?"}
          <span
            className="hover:text-red-400 cursor-pointer duration-500 hover:underline"
            onClick={onToggleSignMode}
          >
            cliquez ici
          </span>
        </p>
      </div>
    </div>
  );
}
