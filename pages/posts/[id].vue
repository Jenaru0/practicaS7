<template>
  <div class="pa-4">
    <h1>Detalle del Post {{ id }}</h1>
    <p>Aquí se puede mostrar el contenido del post con el id: {{ id }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

// Capturamos el parámetro "id" de la URL
const route = useRoute();
// Nota: route.params.id es de tipo string | string[] | undefined.
// Para este ejemplo, lo asumimos como string:
const id = route.params.id as string;
console.log("Post id:", id);
</script>
