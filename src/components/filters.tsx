import {useState} from 'react';
import {genres} from '../data';

export interface IFitler {
  value: number
  label: string
}

const YEARS: number[] = [2020, 2019, 2018, 2017]
const FILTERS: IFitler[] = [
  {
    value: 0, label: "Популярные по убыванию"
  }, {
    value: 1, label: "Популярные по возрастанию"
  }, {
    value: 2, label: "Рейтинг по убыванию"
  }, {
    value: 3, label: "Рейтинг по возрастанию"
  }
]
const Filters = () => {
  const [year, setYear] = useState<number>(YEARS[0])
  const [sort, setSort] = useState<IFitler>(FILTERS[0])

  return (
    <div className='flex flex-col gap-4'>
      <div className="font-bold">Фильтры:</div>
      <button className="bg-black text-white font-bold rounded py-2 px-4 items-center w-[100%] m" onClick={() => {
        setYear(YEARS[0])
        setSort(FILTERS[0])
      }
      }>Сбросить все фильтры
      </button>
      <div className="font-light">Сортировать по:</div>
      <select className="w-[100%] text-lg p-2 pe-4 rounded-xl" onChange={
        e => setSort(FILTERS?.find(filter => filter.value === Number(e.target.value)) || FILTERS[0])
      }>
        {FILTERS.map(filter => (
          <option
            key={filter.value}
            value={filter.value}
            selected={filter.value === sort.value}>
            {filter.label}
          </option>
        ))}
      </select>
      <div className="font-light">Год релиза:</div>
      <select className="w-[100%] text-lg p-2 pe-4 rounded-xl" onChange={
        e => setYear(YEARS?.find(item => item === Number(e.target.value)) || YEARS[0])
      }>
        {YEARS.map(item => (
          <option
            key={item}
            value={item}
            selected={item === year}>
            {item}
          </option>
        ))}
      </select>
      <div className={'flex flex-col gap-2'}>
        <div className="font-light mb-1">Жанры:</div>
        {
          genres.map(genre => (
            <label key={genre.id}><input type="checkbox"/> {genre.name}</label>
          ))
        }
      </div>
    </div>
  );
};

export default Filters;