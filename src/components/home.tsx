import {FC} from "react";
import Item from "./item";
import Dashboard from "./dashboard";

const Home: FC = () => {
  return (
    <div className="flex justify-center">
      <div className={'container flex py-8 gap-8'}>
        <div className="w-96 border rounded p-2">
          <div className="font-bold">Фильтры:</div>
          <button className="bg-black text-white font-bold rounded py-2 px-4 items-center w-[100%] m">Сбросить все фильтры</button>
          <div className="font-light">Сортировать по:</div>
          <select className="w-[100%]">
            <option>Популярные по убыванию</option>
            <option>Популярные по возрастанию</option>
          </select>
          <div className="font-light">Год релиза:</div>
          <select className="w-[100%]">
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </select>
        <div className="font-light">Жанры:</div>
          <p><input type="checkbox" name="Боевик" value="Боевик"/> Боевик</p>
          <p><input type="checkbox" name="Приключение" value="Приключение"/> Приключение</p>
          <p><input type="checkbox" name="Мультфильм" value="Мультфильм"/> Мультфильм</p>
          <p><input type="checkbox" name="Комедия" value="Комедия"/> Комедия</p>
          <p><input type="checkbox" name="Криминал" value="Криминал"/> Криминал</p>
          <p><input type="checkbox" name="Документальный" value="Документальный"/> Документальный</p>
          <p><input type="checkbox" name="Драма" value="Драма"/> Драма</p>
          <p><input type="checkbox" name="Семейный" value="Семейный"/> Семейный</p>
          <p><input type="checkbox" name="Боевик2" value="Боевик2"/> Боевик2</p>
          <p><input type="checkbox" name="Приключение2" value="Приключение2"/> Приключение2</p>
          <p><input type="checkbox" name="Мультфильм2" value="Мультфильм2"/> Мультфильм2</p>
          <p><input type="checkbox" name="Комедия2" value="Комедия2"/> Комедия2</p>
          <p><input type="checkbox" name="Криминал2" value="Криминал2"/> Криминал2</p>
          <p><input type="checkbox" name="Документальный2" value="Документальный2"/> Документальный2</p>
          <p><input type="checkbox" name="Драма2" value="Драма2"/> Драма2</p>
          <p><input type="checkbox" name="Семейный2" value="Семейный2"/> Семейный2</p>
        </div>
        <div className="flex  gap-6">
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}
export default Home