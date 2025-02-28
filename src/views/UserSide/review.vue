<template>
  <div class="reviews-section">
    <v-container>
      <div class="reviews-header">
        <h2>Customers reviews</h2>
        <br>
        <v-btn color="primary" class="write-review-btn" @click="reviewform()"
          >write-in-review</v-btn
        >
      </div>
      <br />
      <v-row>
        <div class="reviews">
    <v-container>
      <v-card class="pa-5" elevation="3">
        <v-skeleton-loader
          class="mx-auto border"
          type="image, article"
          :loading="showLoader"
        >
          <!-- table -->
          <v-data-table :items="items" :headers="headers">
            <template
              v-for="header in headers"
              :key="header.value"
              v-slot:[`item.${header.value}`]="props"
            >
              <div v-if="header.value === 'reviews'">
                {{ props.item.reviews }}
              </div>
              <div v-if="header.value === 'ratings'">
                {{ props.item.ratings }}
              </div>
              <v-row>
                <v-col lg="2">
                  <div v-if="header.value === 'action'">
                    <v-btn
                      style="text-transform: "
                      color="red"
                      @click="deleteReview(props.item.id)"
                      >Delete</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </template>
          </v-data-table>
        </v-skeleton-loader>
      </v-card>
    </v-container>
  </div>

        <v-col cols="12" lg="4">
          <v-card class="pa-5 review-card" elevation="3">
            <div class="rating-summary">
              <h3>4.0 out of 5 stars</h3>
              <p>10 reviews</p>
              <div v-for="i in 5" :key="i" class="rating-bar">
                <v-rating
                  dense
                  size="20"
                  active-color="yellow-accent-4"
                  readonly
                  :model-value="5 - (i - 1)"
                ></v-rating>
                <v-progress-linear
                  :value="i === 5 ? 100 : 0"
                  color="yellow-accent-4"
                ></v-progress-linear>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import reviewApi from "@/Api/Modules/reviews";
export default {
  components: {},
  data() {
    return {
      showLoader: false,
      showForm: false,
      showEditForm: false,
      selectedItem: {},
      items: [],
      headers: [
      { title: "Review Text", value: "reviews" },
        { title: "Rating", value: "ratings" },

      ],
    };
  },
  async created() {
    await this.getAllReviews();
  },
  methods: {
    reviewform() {
      this.$router.push("/reviewform");
    },
    // get all reviews
    async getAllReviews() {
      this.showLoader = true;
      await reviewApi
        .getReviews()
        .then((res) => {
          this.items = res.data.data;
          this.showLoader = false;
        })
        .catch(() => {
          this.showLoader = false;
        });
    },

    // delete review
    async deleteReview(id) {
      await reviewApi.deleteReview(id);
      await this.getAllReviews();
    },
  },

};
</script>

<style scoped></style>
