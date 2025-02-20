<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Acerca de</v-list-item-title>
        </v-list-item>
        <!-- Agrega más elementos según necesites -->
      </v-list>
    </v-navigation-drawer>

    <!-- Cabecera: se le pasa la función para alternar el sidebar -->
    <HeaderComponent :toggleDrawer="toggleDrawer" />

    <!-- Contenedor principal usando v-main para evitar superposiciones -->
    <v-main>
      <NuxtPage />
    </v-main>

    <!-- Pie de página -->
    <FooterComponent />
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

// Variable reactiva para controlar el estado del sidebar
const drawer = ref(false);

// Función para alternar la visibilidad del sidebar
function toggleDrawer() {
  drawer.value = !drawer.value;
}
</script>
