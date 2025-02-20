<template>
  <div class="pa-4">
    <h1>Personajes de Rick and Morty</h1>
    <div v-if="pending">Cargando personajes...</div>
    <div v-else-if="error">Ocurrió un error: {{ error.message }}</div>
    <!-- Se renderiza la lista usando la variable reactiva localCharacters -->
    <v-row v-else-if="localCharacters && localCharacters.length">
      <v-col
        v-for="character in localCharacters"
        :key="character.id"
        cols="12"
        sm="6"
        md="4"
      >
        <CharacterCard :character="character" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useFetch } from "#app";
import CharacterCard from "@/components/CharacterCard.vue";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: { name: string };
}

interface RickAndMortyResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

// Realizamos la petición GET a la API REST de Rick and Morty
const { data, pending, error } = useFetch<RickAndMortyResponse>(
  "https://rickandmortyapi.com/api/character"
);

// Variable reactiva local para almacenar los personajes recibidos
const localCharacters = ref<Character[]>([]);

// Actualizamos localCharacters cuando llegan los datos
watchEffect(() => {
  if (data.value && data.value.results) {
    localCharacters.value = [...data.value.results];
  }
});
</script>
