<template>
  <v-app-bar app color="primary" dark>
    <!-- Ícono para abrir/cerrar el sidebar -->
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-toolbar-title>Mi Proyecto</v-toolbar-title>
    <!-- Puedes agregar más elementos a la cabecera según requieras -->
  </v-app-bar>
</template>

<script setup>
const props = defineProps({
  toggleDrawer: {
    type: Function,
    required: true,
  },
});
</script>
