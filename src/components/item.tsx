import {FC} from "react";
import {Link} from "react-router-dom";
import {IGenre, IItem} from "../types";

const Item: FC<{ item:IItem }> = ({
                                    item: {
                                      title,
                                      poster_path,
                                    }
                                  }) => {
  const isRate = false
  const isFav = false

  return (
    <div className="flex justify-between overflow-hidden w-96 h-60 shadow-lg border rounded-lg ">
      <div>
        <img className="h-full w-full aspect-[4/3]"
             src={poster_path} alt={title}/>
      </div>
      <div className=" w-full flex flex-col justify-between">
        <div className='p-3'>
          <div className='flex justify-between items-center'>
            <div className='w-full'>Рейтинг: {'8.4'}</div>
            <div className='w-20 flex justify-between text-2xl'>
              <button title="оценка">
                <img src={isRate ? '/img/star-point.png' : '/img/star.png'}
                     alt="оценка" width={22} height={22}/>
              </button>
              <button title={isFav ? "удалить из избранного" : "добавить в избранное"}>
                <img src={isFav ? '/img/bookmark.png' : '/img/bookmark_contur.png'}
                     alt={isFav ? "удалить из избранного" : "добавить в избранное"} width={20} height={20}/>
              </button>
            </div>

          </div>
          <h3 className={'text-xl font-bold mt-3 '}>{title}</h3>
        </div>
        <Link to={'/login'}
              className='border-t flex justify-center p-3 hover:bg-violet-300 transition duration-150 ease-out hover:ease-in'>
          Подробнее
        </Link>
      </div>
    </div>
  )
}

export default Item