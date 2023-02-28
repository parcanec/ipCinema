import {FC} from "react";
import Item from "./item";
import Dashboard from "./dashboard";
import Filters from "./filters";

const Home: FC = () => {
  return (
    <div className="flex justify-center">
      <div className={'container flex py-8 gap-8'}>
        <div className="w-96 border rounded p-2">
          <Filters/>
        </div>
        <div className="flex w-full gap-6">
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}
export default Home