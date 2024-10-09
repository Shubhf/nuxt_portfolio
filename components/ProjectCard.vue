<template>
  <div class="max-w-md mx-auto p-4 mt-8">
    <h1 class="text-2xl font-bold mb-4">{{ project.title }}</h1>
    <p>
      {{ project.description }}
    </p>
    <p>
      <a :href="project.link" target="_blank">View Project</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>