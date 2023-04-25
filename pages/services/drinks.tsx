export async function fetchDrinks() {
  const res = await fetch('/api/drinks', {
    method: 'GET',
  });
  const data = await res.json();
  return data;
}

export async function createDrinks(name: string, desc: string, price: number, size: string) {
  const data = await fetch('/api/drinks', {
    method: 'POST',
    body: JSON.stringify({name, desc, price, size}),
  });
}

export async function deleteDrinks(id: number) {
  const data = await fetch('/api/drinks?id=' + id, {
    method: 'DELETE',
  });
}

export async function updateDrinks(id: number, name: string, desc: string, price: number, size: string) {
  const data = await fetch('/api/drinks?id=' + id, {
    method: 'PUT',
    body: JSON.stringify({name, desc, price, size}),
  });
}
