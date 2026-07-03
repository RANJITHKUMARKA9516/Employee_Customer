function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-lg bg-gray-200 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`rounded-lg px-4 py-2 ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-lg bg-gray-200 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;