function ResetFilter({ fungsi }) {
  return (
    <button
      className="text-green-600 text-sm font-semibold hover:underline w-18"
      onClick={() => fungsi()}
    >
      Reset Filter
    </button>
  );
}

export default ResetFilter;
