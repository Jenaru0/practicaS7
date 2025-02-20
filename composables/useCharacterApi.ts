// composables/useCharacterApi.ts

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: { name: string };
}

// Función para crear un personaje (POST)
export async function createCharacter(newCharacter: Character) {
  const { data, error } = await useFetch("/api/characters", {
    method: "POST",
    body: JSON.stringify(newCharacter),
    headers: { "Content-Type": "application/json" },
  });
  if (error.value) {
    console.error("Error al crear personaje:", error.value);
    return null;
  }
  return data.value;
}

// Función para actualizar un personaje (PUT)
export async function updateCharacter(
  id: number,
  updatedData: Partial<Character>
) {
  const { data, error } = await useFetch(`/api/characters/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedData),
    headers: { "Content-Type": "application/json" },
  });
  if (error.value) {
    console.error("Error al actualizar personaje:", error.value);
    return null;
  }
  return data.value;
}

// Función para eliminar un personaje (DELETE)
export async function deleteCharacter(id: number) {
  const { data, error } = await useFetch(`/api/characters/${id}`, {
    method: "DELETE",
  });
  if (error.value) {
    console.error("Error al eliminar personaje:", error.value);
    return null;
  }
  return data.value;
}
