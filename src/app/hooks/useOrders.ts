"use client";
import { useOrder, OrderItem, Shipping, Order } from "@/context/OrdersContext";
import { CartItem } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext"; // assuming you have this

export function useOrders() {
  const { orders, placeOrder } = useOrder();
  const { user } = useAuth();

  // only show orders belonging to the logged-in user
  const userOrders = user
    ? orders.filter((order) => order.userEmail === user.email)
    : [];

  const addOrder = (cart: CartItem[], totalPrice: number, shipping: Shipping) => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    const order: Order = {
      id: Date.now().toString(),
      items: cart.map(item => ({
        id: item.id.toString(),
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice,
      date: new Date().toISOString(),
      status: "Pending",
      userEmail: user.email,
      shipping,
    };

    placeOrder(order);
  };

  return {
    orders: userOrders,
    addOrder,
  };
}
