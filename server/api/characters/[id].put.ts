import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  // Usamos "!" para indicar que params no es undefined
  const { id } = event.context.params!;
  const body = await readBody(event);
  // Se simula la actualización del recurso identificado por id.
  return { success: true, id, updatedData: body };
});
