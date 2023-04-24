export async function createOrders(customer: string, foodId: number, drinkId: number, sideId: number) {
  const data = await fetch('/api/orders', {
    method: 'POST',
    body: JSON.stringify({customer, foodId: foodId, drinkId: drinkId, sidesId: sideId}),
  });
}