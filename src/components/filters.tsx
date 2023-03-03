import React, {FC, useEffect, useState} from 'react';
import {genres} from '../data';

const Filters = () => {
  const [year, setYear] = useState<number>(2020)
  console.log(`${year} is =>>> ${typeof year}`)
  const [sort, setSort] = useState<string>('Популярные по убыванию')
  console.log(`${sort} is =>>> ${typeof sort}`)
  
  useEffect(()=> {}, [])

  return (
    <div className='flex flex-col gap-4'>
      <div className="font-bold">Фильтры:</div>
      <button className="bg-black text-white font-bold rounded py-2 px-4 items-center w-[100%] m" onClick={() =>{
        setYear(2020)
        setSort('Популярные по убыванию')
      }
      }>Сбросить все фильтры</button>
      <div className="font-light">Сортировать по:</div>
      <select className="w-[100%] text-lg p-2 pe-4 rounded-xl" onChange={
        e => {setSort(String(e.target.value))}}>
        <option value={'Популярные по убыванию'}>Популярные по убыванию</option>
        <option value={'Популярные по возрастанию'}>Популярные по возрастанию</option>
        <option value={'Рейтинг по убыванию'}>Рейтинг по убыванию</option>
        <option value={'Рейтинг по возрастанию'}>Рейтинг по возрастанию</option>
      </select>
      <div className="font-light">Год релиза:</div>
      <select className="w-[100%] text-lg p-2 pe-4 rounded-xl" onChange={
        e => {setYear(Number(e.target.value))}}>
        <option value={2020}>2020</option>
        <option value={2019}>2019</option>
        <option value={2018}>2018</option>
        <option value={2017}>2017</option>
      </select>
      <div className={'flex flex-col gap-2'}>
        <div className="font-light mb-1">Жанры:</div>
        {
          genres.map(genre=>(
            <label key={genre.id}><input type="checkbox"/> {genre.name}</label>
          ))
        }
      </div>

    </div>
  );
};

export default Filters;