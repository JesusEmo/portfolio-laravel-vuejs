<template>
    <div class="flex">
      <div v-for="(page) in pages" class="flex justify-between px-2 items-center">
        
        <a :href='slugify(page)' class="md:text-sm text-xs font-bold">
          {{ page }}
        </a>
      </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { slugify } from '../composables/useSlugify';
// evitar el uso de la "ñ"
const pages = ref(["Inicio", "Sobre Mí", "Contacto", "Acerca de", "eñe"]);
</script>