<template>
  <v-img :width="imageWidth" :height="imageHeight" :src="imageSrc"></v-img>

  <p class="pl-2 pt-4 pb-4">
    {{ description }}
  </p>

  <QuantitySelector />
</template>
  
  <script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageWidth: {
      type: [String, Number],
      default: 200,
    },
    imageHeight: {
      type: [String, Number],
      default: 180,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
  