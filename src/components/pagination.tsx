import {FC} from "react";

const Pagination: FC = (props) => {
    return (
        <div>
            <div className={'flex gap-4 mb-4'}>
                <button className={'bg-violet-300 rounded-full py-2 px-4 text-white mt-12'}
                disabled={props.page===1} 
                onClick={() => props.setPage(props.page-1)} >Назад</button>
                <button className={'bg-violet-600 rounded-full py-2 px-4 text-white mt-12'}
                disabled={props.page===props.pageCount} 
                onClick={() => props.setPage(props.page+1)} >Вперед</button>
            </div>
            <div>
                {props.page} из {props.pageCount}
            </div>
        </div>
    )
}

export default Pagination