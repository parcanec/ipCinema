import {FC} from "react";

const Home: FC = () => {
  return (
    <div className="flex justify-center">
      <div className={'container flex py-8 gap-8'}>
        <div className="w-72 border rounded p-2">
          filter
        </div>
        <div className="border w-[100%] rounded p-2">
          dashboard
        </div>
      </div>
    </div>
  )
}
export default Home