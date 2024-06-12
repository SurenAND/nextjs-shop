const sizes = {
  XS: 3,
  S: 0,
  M: 1,
  L: 1213,
  XL: 6,
};

export default function ProductSizes() {
  return (
    <div className="self-center">
      <div className="mt-6 ml-3 flex items-center justify-start gap-64">
        <h6 className="font-semibold">Size</h6>
        <span className="text-gray-400">Size guide</span>
      </div>
      <div className="flex justify-start flex-wrap text-center my-4">
        {Object.entries(sizes).map(([size, amount]) => (
          <div className="mb-4 me-4">
            <div className="relative flex items-center justify-center">
              {amount != 0 ? (
                <span className="w-16 h-16 border border-gray-400 flex items-center justify-center rounded-lg select-none cursor-pointer">
                  {size}
                </span>
              ) : (
                <span
                  className="w-16 h-16 border border-gray-400 flex items-center justify-center rounded-lg select-none cursor-pointer"
                  // disabled
                >
                  {size}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
