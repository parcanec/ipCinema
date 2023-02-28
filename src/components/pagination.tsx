import {FC} from "react";

const Pagination: FC = (props) => {
    return (
        <div>
            <div>
                <button className={'bg-violet-300 rounded-full py-2 px-4 text-white mt-12'}>Назад</button>
                <button className={'bg-violet-600 rounded-full py-2 px-4 text-white mt-12'}>Вперед</button>
            </div>
            <div>
                1 из 1000
            </div>
        </div>
    )
}

export default Pagination