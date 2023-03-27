import { Link } from "react-router-dom";
import { FC } from "react";

const LoginPage: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-10 border rounded m-5 w-96 flex flex-col justify-center items-center">
        <h2>Логин</h2>
        <p>
          <Link to="/">
            <button
              className={"rounded-full py-2 px-4 text-white bg-green-500 mt-12"}
            >
              Вернуться на главную
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
