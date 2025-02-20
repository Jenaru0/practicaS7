import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // Se simula la creación, retornando los datos recibidos.
  return { success: true, data: body };
});
