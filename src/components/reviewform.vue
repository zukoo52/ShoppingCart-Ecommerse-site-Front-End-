<template>
  <div class="review-form">
    <v-container>
      <v-card class="pa-5" elevation="3">
        <!-- Review Form -->
        <v-form ref="reviewForm" v-model="formValid">
          <v-textarea
            v-model="reviewText"
            label="Write a Review"
            required
            :rules="[v => !!v || 'Review is required']"
            rows="4"
          ></v-textarea>

          <v-select
            v-model="reviewRating"
            :items="ratings"
            label="Select Rating"
            required
            :rules="[v => !!v || 'Rating is required']"
          ></v-select>

          <v-btn
            color="primary"
            @click="submitReview"
            :disabled="!formValid"
          >Submit</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import reviewApi from "@/Api/Modules/reviews";

export default {
  data() {
    return {
      formValid: false,
      reviewText: "",
      reviewRating: null,
      ratings: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    async submitReview() {
      // Validate form
      if (!this.$refs.reviewForm.validate()) {
        return;
      }

      const payload = {
        reviews: this.reviewText,
        ratings: this.reviewRating,
      };

      try {
        // Send review data to the backend
        await reviewApi.storeReview(payload);
        // Reset
        this.$refs.reviewForm.reset();
        this.formValid = false;

        this.$emit('reviewAdded');
      } catch (error) {

        if (error.response && error.response.data) {
          console.error("Validation failed:", error.response.data.errors);
          //display errors
        } else {
          console.error("Failed to submit review", error);

        }
      }
    },
  },
};
</script>

<style scoped>
.review-form {
  max-width: 600px;
  margin: auto;
}
</style>
