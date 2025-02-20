<template>
  <v-hover v-slot="{ isHovering }">
    <v-card
      class="mx-auto my-4 modern-card"
      max-width="344"
      :elevation="isHovering ? 12 : 4"
    >
      <v-img
        :src="character.image"
        height="200px"
        class="rounded-t-lg"
        aspect-ratio="1.7"
      ></v-img>
      <v-card-title class="headline font-weight-bold">{{
        character.name
      }}</v-card-title>
      <v-card-subtitle class="text--primary">
        {{ character.status }} - {{ character.species }}
      </v-card-subtitle>
      <v-card-text class="text--secondary">
        Origen: <span class="font-italic">{{ character.origin.name }}</span>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" variant="elevated" @click="viewDetails">
          Ver detalles
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
const props = defineProps<{
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    origin: { name: string };
  };
}>();

function viewDetails() {
  console.log("Ver detalles del personaje:", props.character.name);
  // Aquí podrías, por ejemplo, usar useRouter() para navegar a una página de detalle.
}
</script>

<style scoped>
.modern-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.modern-card:hover {
  transform: translateY(-4px);
}
</style>
