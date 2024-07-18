import Link from 'next/link';

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {currentPage > 1 && (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </Link>
      )}

      {currentPage !== totalPages && (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </Link>
      )}
    </div>
  );
}
