'use client';
import { useRouter, useSearchParams } from 'next/navigation';

import { useState } from 'react';

const Pagination = ({
  pageParam = 0,
  query = 'page',
  total,
  record = 5,
}: {
  pageParam: number;
  total: number;
  query: string;
  record: number;
}) => {
  const [page, setPage] = useState(pageParam);

  const router = useRouter();
  const searchParams = useSearchParams();

  const incrementPage = () => {
    setPage(page + 1);
    setPageURLParam(page + 1);
  };

  const decrementPage = () => {
    setPage(page - 1);
    setPageURLParam(page - 1);
  };

  const setPageURLParam = (value: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(query, String(value));
    router.push(`?${current.toString()}`);
    router.refresh();
  };

  return (
    <div id="pagination" className="py-2 h-20">
      <div className="flex justify-evenly items-center space-x-2 py-4">
        <button
          className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          onClick={decrementPage}
        >
          Previous
        </button>
        <span className="text-gray-300">
          Page {page + 1} of {Math.ceil(total / record)}
        </span>
        <button
          className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          onClick={incrementPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
