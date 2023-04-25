export async function fetchSides() {
  const res = await fetch('/api/sides', {
    method: 'GET',
  });
  const data = await res.json();
  return data;
}

export async function createSides(name: string, desc: string, price: number, checked: boolean) {
  const data = await fetch('/api/sides', {
    method: 'POST',
    body: JSON.stringify({name, desc, price, isVegan: checked}),
  });
}

export async function deleteSides(id: number) {
  const data = await fetch('/api/sides?id=' + id, {
    method: 'DELETE',
  });
}

export async function updateSides(id: number, desc: string, price: number, checked: boolean) {
  const data = await fetch('/api/sides?id=' + id, {
    method: 'PUT',
    body: JSON.stringify({name, desc, price, isVegan: checked}),
  });
}