import {FC} from "react";
import Item from "./item";
import Pagination from "./pagination";
import {items} from "../data";

const Dashboard: FC = (props) => {
  return (
    <div>
        <div className="flex flex-wrap gap-6">
          {items.map(item=><Item item={item} key={item.id}/>)}
        </div>
        <div >
            <Pagination/>
        </div>
    </div>
    )
}

export default Dashboard