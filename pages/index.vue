<template>
  <div class="pa-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Bienvenido a la App</h1>
          <p>Contador: {{ count }}</p>
          <v-btn color="primary" @click="increment">Incrementar</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>
            <NuxtLink to="/characters">
              Ver Personajes de Rick and Morty
            </NuxtLink>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Variable reactiva para el contador
const count = ref(0);

// Función para incrementar el contador
function increment() {
  count.value++;
}
</script>
