import {FC} from "react";
import Item from "./item";
import Pagination from "./pagination";

const Dashboard: FC = (props) => {
  return (
    <div>
        <div className="flex flex-wrap gap-6">
            <Item/>
            <Item isFav={true} isRate={true}/>
            <Item img={'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/94208da4-e497-41a8-a3d2-dbaebaa1e121/1920x'}/>
            <Item isFav={true}/>
            <Item title={'Чебурашка'} img={"https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/d59f5ce5-d179-4e7e-80ee-e9ae724a63e6/1920x"}/>
            <Item isRate={true}/>
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