function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className={`rounded-xl p-6 shadow-md text-white ${color}`}
    >
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="mt-4 text-4xl font-bold">
        {value}
      </p>
    </div>
  );
}

export default StatCard;