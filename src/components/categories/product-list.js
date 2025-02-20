import ProductCard from "./productCard";

const ProductList = ({ products }) => {
  return (
    <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                titleAr={product.titleAr}
                description={product.description}
                descriptionAr={product.descriptionAr}
                color={product.color}
                colorAr={product.colorAr}
                image={product.image}
                price={product.price}
                qty={product.qty}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
