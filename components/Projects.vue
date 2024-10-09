
<template>
  <div class="max-w-md mx-auto p-4 mt-8">
    <h1 class="text-3xl font-bold mb-4">Projects</h1>
    <ProjectCard v-for="(project, index ) in projects" :key="index" :project="project" />
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          title: 'Lip Reader',
          description: 'Developed an AI system with TensorFlow and CUDA, achieving 95% accuracy using 3D convolutions and LSTM models, demonstrating expertise in machine learning and complex system analysis, aligning with computational neuroscience and brain-inspired AI.',
          link: 'https://github.com/ShubhGarg/LipReader',
        },
        {
          title: 'OCR System',
          description: 'Developed a CNN-based OCR system using GPU acceleration, achieving 90% accuracy and reducing processing time by 25%, showcasing expertise in machine learning, neural networks, and real-world problem-solving.',
          link: 'https://github.com/ShubhGarg/OCRSYSTEM',
        },
        {
          title: 'Monte Carlo Simulation for Option Pricing',
          description: 'Developed a Python-based Monte Carlo simulation to model 10,000+ asset price paths, demonstrating advanced data analysis and computational modeling skills applicable to complex systems and empirical dynamic modeling.',
          link: 'https://github.com/ShubhGarg/MonteCarloSimulation',
        },
        {
          title: 'Graph-Based Fraud Detection using GNNs',
          description: 'Developed a GNN model to detect fraudulent transactions in a financial network, demonstrating advanced skills in machine learning and graph theory applicable to complex system analysis.',
          link: 'https://github.com/ShubhGarg/GraphBasedFraudDetection',
        },
        {
          title: 'Plant-Disease Detection Using Computer Vision',
          description: 'Developed a robust computer vision model for plant disease detection, applying advanced machine learning techniques such as CNN, VGG16, ResNet50, and EfficientNetB0, which aligns with real-world problem-solving and complex system analysis in both brain-inspired AI and empirical dynamic modeling (EDM).',
          link: 'https://github.com/ShubhGarg/PlantDiseaseDetection',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>