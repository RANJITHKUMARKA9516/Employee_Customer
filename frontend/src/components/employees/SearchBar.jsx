function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name, email or department..."
      value={value}
      onChange={onChange}
      className="w-full max-w-md rounded-lg border border-gray-300 bg-white p-3 outline-none transition focus:border-blue-600"
    />
  );
}

export default SearchBar;