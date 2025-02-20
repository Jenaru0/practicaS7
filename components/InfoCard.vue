<!-- components/InfoCard.vue -->
<template>
  <v-card class="ma-4 pa-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ content }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="handleClick">Ver Más</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
}>();

function handleClick() {
  console.log("Se hizo clic en la tarjeta:", props.title);
}
</script>
