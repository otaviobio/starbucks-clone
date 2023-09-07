import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const orderItemQuantity = orders.length;

  const addOrder = (order) => {
    setOrders([...orders, order]);
    console.log(orders);
  };

  const duplicateOrderItem = (index) => {
    const orderToDuplicate = orders[index];
    const newOrder = { ...orderToDuplicate };
    setOrders([
      ...orders.slice(0, index + 1),
      newOrder,
      ...orders.slice(index + 1),
    ]);
  };

  const deleteOrderItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        orderItemQuantity,
        duplicateOrderItem,
        deleteOrderItem,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
