import ProductRating from "./productRating";
import ProductSizes from "./productSizes";

const ProductTemplate = ({ category, data, isLoading, error }: any) => {
  return (
    <main className="p-10 mt-10">
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error</p>}
      {data && (
        <section
          className="relative flex flex-col break-words rounded-md"
          key={data?.id}
        >
          <div className="flex flex-wrap">
            <img
              className="flex-grow rounded-3xl shadow-2xl max-h-[35rem] object-cover "
              src={data?.image}
              alt={data?.name}
            />
            <div className="lg:ps-12 lg:flex-[0_0_auto] lg:w-1/2">
              <h2 className="font-bold text-4xl mt-6 mb-2">{data?.name}</h2>
              <p className="text-gray-500 mb-20">{data?.description}</p>
              <form className="flex flex-col p-5">
                <div className="flex">
                  <h3 className="text-3xl mb-2">${data?.price?.toFixed(2)}</h3>
                  <input className="opacity-0" defaultValue={data?.price} />
                </div>
                {/* reviews */}
                <div className="flex mb-5">
                  <ProductRating />
                  <span className="ms-4">603 reviews</span>
                </div>
                {/* sizes */}
                {category === "sneakers" ? <ProductSizes /> : null}

                <button
                  className="mb-4 py-3 px-20 rounded-lg shadow-sm bg-purple-600 text-white"
                  type="submit"
                >
                  Add to cart
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductTemplate;
