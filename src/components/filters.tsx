import React from 'react';
import {genres} from '../data'

const Filters = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="font-bold">Фильтры:</div>
      <button className="bg-black text-white font-bold rounded py-2 px-4 items-center w-[100%] m">Сбросить все фильтры</button>
      <div className="font-light">Сортировать по:</div>
      <select className="w-[100%] text-lg p-2 pe-4 rounded-xl ">
        <option>Популярные по убыванию</option>
        <option>Популярные по возрастанию</option>
      </select>
      <div className="font-light">Год релиза:</div>
      <select className="w-[100%] text-lg p-2 pe-4 rounded-xl">
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </select>
      <div className={'flex flex-col gap-2'}>
        <div className="font-light mb-1">Жанры:</div>

        <label><input type="checkbox" name="Боевик" value="Боевик"/> Боевик</label>
      </div>

    </div>
  );
};

export default Filters;

//<label><input type="checkbox" name="Приключение" value="Приключение"/> Приключение</label>
//<label><input type="checkbox" name="Мультфильм" value="Мультфильм"/> Мультфильм</label>
//<label><input type="checkbox" name="Комедия" value="Комедия"/> Комедия</label>
//<label><input type="checkbox" name="Криминал" value="Криминал"/> Криминал</label>
//<label><input type="checkbox" name="Документальный" value="Документальный"/> Документальный</label>
//<label><input type="checkbox" name="Драма" value="Драма"/> Драма</label>
//<label><input type="checkbox" name="Семейный" value="Семейный"/> Семейный</label>
//<label><input type="checkbox" name="Боевик2" value="Боевик2"/> Боевик2</label>
//<label><input type="checkbox" name="Приключение2" value="Приключение2"/> Приключение2</label>
//<label><input type="checkbox" name="Мультфильм2" value="Мультфильм2"/> Мультфильм2</label>
//<label><input type="checkbox" name="Комедия2" value="Комедия2"/> Комедия2</label>
//<label><input type="checkbox" name="Криминал2" value="Криминал2"/> Криминал2</label>
//<label><input type="checkbox" name="Документальный2" value="Документальный2"/> Документальный2</label>
//<label><input type="checkbox" name="Драма2" value="Драма2"/> Драма2</label>
//<label><input type="checkbox" name="Семейный2" value="Семейный2"/> Семейный2</label>