<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card class="mx-auto" max-width="344">
        <v-row>
          <v-col cols="3">
            <v-avatar class="profile" color="grey" size="100">
              <v-img src="https://bad.src/not/valid">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="black"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-avatar>
          </v-col>
          <v-col>
            <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn color="green lighten-2" text block @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            <v-spacer></v-spacer>
            Explore
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-img
              src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg"
              height="200px"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="black"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="344">
        <v-row>
          <v-col cols="3">
            <v-avatar class="profile" color="grey" size="100">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row> </template
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col>
            <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn color="green lighten-2" text block @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            <v-spacer></v-spacer>
            Explore
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-img
              src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg"
              height="200px"
            ></v-img>
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="344">
        <v-row>
          <v-col cols="3">
            <v-avatar class="profile" color="grey" size="100">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row> </template
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col>
            <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn color="green lighten-2" text block @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            <v-spacer></v-spacer>
            Explore
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-img
              src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg"
              height="200px"
            ></v-img>
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="344">
        <v-row>
          <v-col cols="3">
            <v-avatar class="profile" color="grey" size="100">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row> </template
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col>
            <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn color="green lighten-2" text block @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            <v-spacer></v-spacer>
            Explore
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-img
              src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg"
              height="200px"
            ></v-img>
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" max-width="344">
        <v-row>
          <v-col cols="3">
            <v-avatar class="profile" color="grey" size="100">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row> </template
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col>
            <v-card-title> Top western road trips </v-card-title>
            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn color="green lighten-2" text block @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            <v-spacer></v-spacer>
            Explore
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-img
              src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg"
              height="200px"
            ></v-img>
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>
