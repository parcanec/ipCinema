import {FC} from "react";
import Item from "./item";
import Pagination from "./pagination";

const Dashboard: FC = (props) => {
  return (
    <div>
        <div className="flex flex-wrap gap-6">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        <div >
            <Pagination/>
        </div>
    </div>
    )
}

export default Dashboard