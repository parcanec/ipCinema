import React, {FC} from 'react';
import {IGenre} from "../types";
import {genres} from '../data';

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
        {
          genres.map(genre=>(
            <label key={genre.id}><input type="checkbox"/> {genre.name}</label>
          ))
        }
        <label><input type="checkbox" name="Боевик" value="Боевик"/> Боевик</label>
      </div>

    </div>
  );
};

export default Filters;