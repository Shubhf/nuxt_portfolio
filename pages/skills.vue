<template>
    <div>
      <Header />
      <section class="container mx-auto p-4">
        <h1 class="text-3xl font-bold">Skills</h1>
        <ul class="mt-4 list-disc pl-5">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue'
  
  export default {
    components: {
      Header
    }
  }
  </script>
  
  <style scoped>
  /* Add your custom CSS here */
  </style>
  