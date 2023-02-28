import {FC} from "react";

const Item: FC = (props) => {
  return (
    <div className="flex justify-between w-96 h-60 shadow-xl border rounded ">
        <div>
            <img className="h-full w-full" 
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/559d0309-aa32-4ce6-8446-252e375d2a80/600x900" alt="фильм" />
        </div>
        <div className="w-3/5 p-2">
            <h3>название</h3>
        </div>
    </div>
)
}

export default Item