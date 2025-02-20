export default defineEventHandler((event) => {
  // Usamos "!" para asegurar que params no es undefined
  const { id } = event.context.params!;
  // Se simula la eliminación del recurso.
  return { success: true, id, message: "Recurso eliminado" };
});
