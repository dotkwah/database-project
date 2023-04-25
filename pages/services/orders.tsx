export async function createOrders(customer: string, foodId: number, drinkId: number, sideId: number) {
  const data = await fetch('/api/orders', {
    method: 'POST',
    body: JSON.stringify({customer, foodId: foodId, drinkId: drinkId, sidesId: sideId}),
  });
}

export async function fetchOrders() {
  const res = await fetch('/api/orders', {
    method: 'GET',
  });
  const data = await res.json();
  return data;
}