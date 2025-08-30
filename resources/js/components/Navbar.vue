
<template>
  <div class="flex justify-between px-8 py-6">
    <div>
      <img src="" alt="logo">
    </div>

    <div class="flex">
      <div v-for="(page) in pages" class="flex justify-between px-2">
        
        <a :href='slugify(page)' class="md:text-sm text-2xl font-bold">
          {{ page }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { slugify } from '../composables/useSlugify'
// evitar el uso de la "ñ"
const pages = ref(["Inicio", "Sobre Mí", "Contacto", "Acerca de", "eñe"]);

</script>