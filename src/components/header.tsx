import { Link } from "react-router-dom"
import {FC} from "react";


const Header:FC = () => {
    return (
        <header className={' bg-violet-500 p-4 flex justify-center'}>
          <div className={'flex container container-lg text-white font-bold text-lg items-center justify-between '}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/login'}><div className="bg-green-500 py-2 px-4 rounded">Войти</div></Link>
          </div>
        </header>
    )
}

export default Header
