export default await function ProductPage({ params }) {
  return <h1 className="text-2xl text-white">Product ID: {params.id}</h1>;
}