import {FC} from "react";
import Item from "./item";
import Pagination from "./pagination";

const Dashboard: FC = (props) => {
  return (
    <div>
        <div className="flex flex-wrap gap-6">
            <Item 
            title={'Чебурашка'} 
            img={"https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/c893c845-0e2b-405c-919a-4ed737fad0f3/200x300"} 
            adult={false} 
            backdrop_path={""} 
            genre_ids={[]} 
            id={0} 
            original_language={""} 
            original_title={""} 
            overview={""} 
            popularity={0} 
            poster_path={""} 
            release_date={""} 
            video={false} 
            vote_average={0} 
            vote_count={0}/>
        </div>
        <div >
            <Pagination/>
        </div>
    </div>
    )
}

export default Dashboard