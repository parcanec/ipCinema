import {createStore} from "redux";
import {items, genres} from "../data"
import {IFitler} from "../types";

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

const initialState = {
}

const reducer = (state = initialState, action) => {
  
}

const store = createStore(reducer);

export default store