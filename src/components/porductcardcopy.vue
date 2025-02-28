<template>
    <v-sheet color="D9D9D8" class="pa-4">
      <center>
        <v-img   width="200"
                  height="180"
                  src="@/assets/images/nexus.jpg" ></v-img>
      </center>
      <p class="pl-2 pt-4 pb-4">
  Hello
      </p>
  >
    </v-sheet>
  </template>
    
    <script>
  export default {
    components: {
      QuantitySelector,
    },
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
    