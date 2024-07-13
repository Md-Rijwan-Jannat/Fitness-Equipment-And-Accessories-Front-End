const OrderSuccessPage = () => {
  return (
    <section className="container mx-auto p-4 h-[500px]">
      <h1 className="text-2xl font-semibold text-primaryColor mb-6">
        Order Success
      </h1>
      <div className="p-4 border border-gray-200 rounded">
        <p className="text-lg text-green-500">
          Thank you for your order! Your order has been placed successfully.
        </p>
      </div>
    </section>
  );
};

export default OrderSuccessPage;
