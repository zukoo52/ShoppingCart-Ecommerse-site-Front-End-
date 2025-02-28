<template>
  <br><br>
    <h1 style="color:white;">Product Category</h1>
  <div class="mobileview">
      <v-select label="Select" :items="items" v-model="selectedItem"></v-select>
  
      <div v-if="selectedItem === 'Personal'">
        <v-row>
          <v-col lg="3">
            <v-card variant="outlined">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img width="200" src="@/assets/images/hand_bags.jfif"></v-img>
              </center>
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
  
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="3" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
            </v-sheet>
          </v-card>
          </v-col>
  
          <v-col lg="3">
             <v-card variant="outlined">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img width="200" src="@/assets/images/shoes.jpg"></v-img>
              </center>
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
         
              <center>
                <diV class="mobileview">
                  <v-btn>+</v-btn>
  
                  <input class="narrow-input" type="text" value=" 0 " width="5" />
                  <v-btn>-</v-btn>
                  &nbsp;
                  <v-btn
                    class="add-to-cart-button button_styles"
                    @click="$router.push('/shoppingcart')"
                    >Add
                  </v-btn>
                </diV>
              </center>
            </v-sheet>
            </v-card>
          </v-col>
  
          <v-col lg="3">
            <v-card variant="outlined">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img width="200" src="@/assets/images/watches.jpg"></v-img>
              </center>
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
            
              <center>
                <diV class="mobileview">
                  <v-btn>+</v-btn>
  
                  <input class="narrow-input" type="text" value=" 0 " width="5" />
                  <v-btn>-</v-btn>
                  &nbsp;
                  <v-btn
                    class="add-to-cart-button button_styles"
                    @click="$router.push('/shoppingcart')"
                    >Add
                  </v-btn>
                </diV>
              </center>
            </v-sheet>
            </v-card>
          </v-col>
  
          <v-col lg="3">
            <v-card variant="outlined">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img width="200" src="@/assets/images/mugs.jfif"></v-img>
              </center>
  
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
           
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="5" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
            </v-sheet>
            </v-card>
          </v-col>
          
        </v-row>
      </div>
      <div v-if="selectedItem === 'Mobile'">
        <v-row>
          <v-col lg="3">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img
                  width="200"
                  height="180"
                  src="@/assets/images/samsung.jpg"
                ></v-img>
              </center>
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
          
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="5" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
            </v-sheet>
          </v-col>
  
          <v-col lg="3">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img
                  width="200"
                  height="180"
                  src="@/assets/images/apple.jfif"
                ></v-img>
              </center>
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
       
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="5" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
         
    
            </v-sheet>
          </v-col>
  
          <v-col lg="3">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img
                  width="200"
                  height="180"
                  src="@/assets/images/nexus.jpg"
                ></v-img>
              </center>
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="5" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
       
  
            </v-sheet>
          </v-col>
  
          <v-col lg="3">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img
                  width="200"
                  height="180"
                  src="@/assets/images/vivo.jpg"
                ></v-img>
              </center>
  
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="5" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
    
            </v-sheet>
          </v-col>
        </v-row>
      </div>
      <div v-if="selectedItem === 'Laptop'">
        <v-row>
          <v-col lg="3">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img
                  width="200"
                  height="180"
                  src="@/assets/images/pinkbook.jpg"
                ></v-img>
              </center>
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="5" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
           
            </v-sheet>
          </v-col>
  
          <v-col lg="3">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img
                  width="200"
                  height="180"
                  src="@/assets/images/asus.jpg"
                ></v-img>
              </center>
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="5" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
            
     
            </v-sheet>
          </v-col>
  
          <v-col lg="3">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img
                  width="200"
                  height="180"
                  src="@/assets/images/acer.jfif"
                ></v-img>
              </center>
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="5" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
            </v-sheet>
          </v-col>
  
          <v-col lg="3">
            <v-sheet color="D9D9D8" class="pa-4">
              <center>
                <v-img
                  width="200"
                  height="180"
                  src="@/assets/images/lap_1.jfif"
                ></v-img>
              </center>
  
              <p class="pl-2 pt-4 pb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et
              </p>
         
              <center>
                <v-btn>+</v-btn>
  
                <input class="narrow-input" type="text" value=" 0 " width="5" />
                <v-btn>-</v-btn>
                &nbsp;
                <v-btn
                  class="add-to-cart-button button_styles"
                  @click="$router.push('/shoppingcart')"
                  >Add
                </v-btn>
              </center>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
      <div v-if="selectedItem === 'Electronics'">
        <v-row>
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/television.jpg"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
            
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" height="180" src="@/assets/images/fridge.jfif"></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
              
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/home_theatre.jfif"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" height="180" src="@/assets/images/washine_machine.png"></v-img>
                    </center>
  
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
              </v-row>
     
      </div>
      <div v-if="selectedItem === 'Garden'">
        <v-row>
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/water_can.jpg"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
            
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" height="180" src="@/assets/images/spade.jfif"></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
              
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/boots.webp"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" height="180" src="@/assets/images/fork.jfif"></v-img>
                    </center>
  
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>

                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
              </v-row>
    
      </div>
    </div>
  <div class="webview">
  <div class="d-flex flex-row">
        <v-tabs v-model="tab" direction="vertical">
          <v-tab text="Personal" value="personal_items" style="color:white"></v-tab>
          <v-tab text="Mobile" value="mobile_phones" style="color:white"></v-tab>
          <v-tab text="Laptops" value="laptops" style="color:white"></v-tab>
          <v-tab text="Electronics" value="electronics" style="color:white"></v-tab>
          <v-tab text="Garden" value="garden" style="color:white"></v-tab>
        </v-tabs>
  
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="personal_items">
          
      
            <div class="pa-4">
              <v-row>
                <v-col lg="3">
                  <v-card variant="outlined">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        src="@/assets/images/hand_bags.jfif"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
            
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                  </v-card>
                </v-col>
  
                <v-col lg="3">
                  <v-card variant="outlined">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" src="@/assets/images/shoes.jpg"></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                  </v-card>
                </v-col>
  
                <v-col lg="3">
                  <v-card variant="outlined">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        src="@/assets/images/watches.jpg"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                  </v-card>
                </v-col>
  

                <v-col lg="3">
                  <v-card variant="outlined">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" src="@/assets/images/mugs.jfif"></v-img>
                    </center>
  
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                  </v-card>
                </v-col>
              </v-row>
            </div>
        
          </v-tabs-window-item>
  
          <v-tabs-window-item value="mobile_phones">
            <div class="products pa-4">
              <v-row>
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/samsung.jpg"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="3"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          size="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/apple.jfif"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/nexus.jpg"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/vivo.jpg"
                      ></v-img>
                    </center>
  
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </v-tabs-window-item>
  
          <v-tabs-window-item value="laptops">
            <div class="products pa-4">
              <v-row>
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/pinkbook.jpg"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="3"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          size="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/asus.jpg"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/acer.jfif"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/lap_1.jfif"
                      ></v-img>
                    </center>
  
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
         
              </v-row>
              
            </div>
          </v-tabs-window-item>
  
          <v-tabs-window-item value="electronics">
  
            <div class="pa-4">
              <v-row>
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/television.jpg"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
            
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" height="180" src="@/assets/images/fridge.jfif"></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
              
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/home_theatre.jfif"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" height="180" src="@/assets/images/washine_machine.png"></v-img>
                    </center>
  
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
       
          </v-tabs-window-item>
  
          <v-tabs-window-item value="garden">
            
            <div class="pa-4">
              <v-row>
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/water_can.jpg"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
            
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" height="180" src="@/assets/images/spade.jfif"></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
              
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img
                        width="200"
                        height="180"
                        src="@/assets/images/boots.webp"
                      ></v-img>
                    </center>
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>
                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
  
                <v-col lg="3">
                  <v-sheet color="D9D9D8" class="pa-4">
                    <center>
                      <v-img width="200" height="180" src="@/assets/images/fork.jfif"></v-img>
                    </center>
  
                    <p class="pl-2 pt-4 pb-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                    </p>

                    <!--Mobile View-->
                    <center>
                      <diV class="mobileview">
                        <v-btn size="x-small">+</v-btn>
  
                        <input
                          class="narrow-input"
                          type="text"
                          value=" 0 "
                          width="5"
                        />
                        <v-btn size="x-small">-</v-btn>
                        &nbsp;
                        <v-btn
                          siz="x-small"
                          class="add-to-cart-button button_styles"
                          @click="$router.push('/shoppingcart')"
                          >Add
                        </v-btn>
                      </diV>
                    </center>
                    <!--Web View-->
                    <diV class="webview">
                      <v-btn size="small">+</v-btn>
  
                      <input
                        class="narrow-input"
                        type="text"
                        value=" 0 "
                        width="5"
                      />
                      <v-btn size="small">-</v-btn> &nbsp; &nbsp; &nbsp;
  
                      <v-btn
                        size="small"
                        class="add-to-cart-button button_styles"
                        @click="$router.push('/shoppingcart')"
                        >Add to Cart</v-btn
                      >
                    </diV>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
     
          </v-tabs-window-item>
  
  
        </v-tabs-window>
      
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        items: ["Personal", "Mobile", "Laptop", "Electronics", "Garden"],
        selectedItem: null,
        tab: 'option-1',
     
      };
  
   
     
    },
  
   
  };
  
  </script>
  
  
  
  
    
  