import { FC } from "react";
import Item from "./item";
import Pagination from "./pagination";
import { items } from "../data";
import { useState } from "react";

const Dashboard: FC = (props) => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 9;
  const currentItems = items.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <div className="flex flex-wrap gap-6">
        {currentItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      <div>
        <Pagination pageCount={pageCount} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Dashboard;
