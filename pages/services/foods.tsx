export async function fetchFoods() {
  const res = await fetch('/api/foods', {
    method: 'GET',
  });
  const data = await res.json();
  return data;
}

export async function createFoods(name: string, desc: string, price: number, checked: boolean) {
  const data = await fetch('/api/foods', {
    method: 'POST',
    body: JSON.stringify({name, desc, price, isGluten: checked}),
  });
}

export async function deleteFoods(id: number) {
  const data = await fetch('/api/foods?id=' + id, {
    method: 'DELETE',
  });
}