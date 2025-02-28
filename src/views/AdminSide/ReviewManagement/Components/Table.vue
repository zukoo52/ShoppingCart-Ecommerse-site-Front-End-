<template>
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
        { title: "Action", value: "action" },
      ],
    };
  },
  async created() {
    await this.getAllReviews();
  },
  methods: {
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
