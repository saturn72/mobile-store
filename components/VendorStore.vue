<template>
  <v-row justify="center" align="center">
    <v-col
      cols="12"
      v-for="product in catalog.products"
      v-bind:key="product.id"
    >
      <v-card class="mx-auto" max-width="344">
        <v-row>
          <v-col cols="3">
            <v-avatar class="profile" color="grey" size="100">
              <v-img :src="getPrimaryMediaItem(product.media.images)">
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
            <v-card-title> {{ product.name }} </v-card-title>
            <v-card-subtitle> {{ product.shortDescription }} </v-card-subtitle>
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
            <v-carousel hide-delimiters>
              <v-carousel-item
                ripple
                v-for="(item, i) in toCarouselData(product.media)"
                :key="i"
                :src="item.src"
                :title="item.description"
              >
              </v-carousel-item>
            </v-carousel>
            <v-divider />

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
  </v-row>
</template>
<script>
const imageTypes = {
  image: 'img',
  video: 'video',
}
export default {
  methods: {
    getPrimaryMediaItem: function (items) {
      return items.find((i) => i.isPrimary) ?? items[0]
    },
    toCarouselData: function (media) {
      const imgs = media.images.map((i) => {
        return {
          type: imageTypes.image,
          src: i.src,
          description: i.description,
          displayOrder: i.displayOrder,
          isPrimary: i.isPrimary,
        }
      })
      let cm = [...imgs]

      const videos = media.videos.map((i) => {
        return {
          type: imageTypes.video,
          src: i.src,
          description: i.description,
          displayOrder: i.displayOrder,
          isPrimary: i.isPrimary,
        }
      })
      cm = [...videos]
      return cm
    },
  },
  data() {
    return {
      show: false,
      catalog: {
        products: [
          {
            id: '1',
            name: 'product_1',
            shortDescription: 'this is the short description',
            fullDescription:
              'this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, ',
            media: {
              images: [
                {
                  src:
                    'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg',
                  isPrimary: false,
                  description: 'this is description',
                },
                {
                  src:
                    'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
                  isPrimary: true,
                },
                {
                  src:
                    'https://assets.newatlas.com/dims4/default/d9321ef/2147483647/strip/true/crop/2000x1333+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2Fb6%2F80a7b0ef4034bce73f3263e90488%2Fdepositphotos-27276047-l-2015.jpg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4',
                  isPrimary: false,
                },
              ],
              videos: [
                {
                  src:
                    '<iframe src="https://www.youtube.com/embed/xrhh5bnS9Rk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                  isPrimary: false,
                },
              ],
            },
          },
          {
            id: '234',
            name: 'product_1',
            shortDescription: 'this is the short description',
            fullDescription:
              'this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, ',
            media: {
              images: [
                {
                  src:
                    'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
                  isPrimary: false,
                },
                {
                  src:
                    'https://assets.newatlas.com/dims4/default/d9321ef/2147483647/strip/true/crop/2000x1333+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2Fb6%2F80a7b0ef4034bce73f3263e90488%2Fdepositphotos-27276047-l-2015.jpg',
                  isPrimary: true,
                },
                {
                  src:
                    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4',
                  isPrimary: false,
                },
              ],
              videos: [
                {
                  src: 'https://youtu.be/hn3wJ1_1Zsg',
                  isPrimary: false,
                },
              ],
            },
          },
          {
            id: '2',
            name: 'product_1',
            shortDescription: 'this is the short description',
            fullDescription:
              'this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, ',
            media: {
              images: [
                {
                  src:
                    'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
                  isPrimary: false,
                },
                {
                  src:
                    'https://assets.newatlas.com/dims4/default/d9321ef/2147483647/strip/true/crop/2000x1333+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2Fb6%2F80a7b0ef4034bce73f3263e90488%2Fdepositphotos-27276047-l-2015.jpg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4',
                  isPrimary: false,
                },
              ],
              videos: [
                {
                  src: 'https://youtu.be/hn3wJ1_1Zsg',
                  isPrimary: false,
                },
              ],
            },
          },
          {
            id: 'dfg654dsf',
            name: 'product_1',
            shortDescription: 'this is the short description',
            fullDescription:
              'this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, ',
            media: {
              images: [
                {
                  src:
                    'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
                  isPrimary: false,
                },
                {
                  src:
                    'https://assets.newatlas.com/dims4/default/d9321ef/2147483647/strip/true/crop/2000x1333+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2Fb6%2F80a7b0ef4034bce73f3263e90488%2Fdepositphotos-27276047-l-2015.jpg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4',
                  isPrimary: false,
                },
              ],
              videos: [
                {
                  src: 'https://youtu.be/hn3wJ1_1Zsg',
                  isPrimary: false,
                },
              ],
            },
          },
          {
            id: 'sdgsdfb',
            name: 'product_1',
            shortDescription: 'this is the short description',
            fullDescription:
              'this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, ',
            media: {
              images: [
                {
                  src:
                    'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
                  isPrimary: false,
                },
                {
                  src:
                    'https://assets.newatlas.com/dims4/default/d9321ef/2147483647/strip/true/crop/2000x1333+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2Fb6%2F80a7b0ef4034bce73f3263e90488%2Fdepositphotos-27276047-l-2015.jpg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4',
                  isPrimary: false,
                },
              ],
              videos: [
                {
                  src: 'https://youtu.be/hn3wJ1_1Zsg',
                  isPrimary: false,
                },
              ],
            },
          },
          {
            id: '3',
            name: 'product_1',
            shortDescription: 'this is the short description',
            fullDescription:
              'this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, ',
            media: {
              images: [
                {
                  src:
                    'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
                  isPrimary: false,
                },
                {
                  src:
                    'https://assets.newatlas.com/dims4/default/d9321ef/2147483647/strip/true/crop/2000x1333+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2Fb6%2F80a7b0ef4034bce73f3263e90488%2Fdepositphotos-27276047-l-2015.jpg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4',
                  isPrimary: false,
                },
              ],
              videos: [
                {
                  src: 'https://youtu.be/hn3wJ1_1Zsg',
                  isPrimary: false,
                },
              ],
            },
          },
          {
            id: 'gsdfg',
            name: 'product_1',
            shortDescription: 'this is the short description',
            fullDescription:
              'this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, ',
            media: {
              images: [
                {
                  src:
                    'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
                  isPrimary: false,
                },
                {
                  src:
                    'https://assets.newatlas.com/dims4/default/d9321ef/2147483647/strip/true/crop/2000x1333+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2Fb6%2F80a7b0ef4034bce73f3263e90488%2Fdepositphotos-27276047-l-2015.jpg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4',
                  isPrimary: false,
                },
              ],
              videos: [
                {
                  src: 'https://youtu.be/hn3wJ1_1Zsg',
                  isPrimary: false,
                },
              ],
            },
          },
          {
            id: 'dfg',
            name: 'product_1',
            shortDescription: 'this is the short description',
            fullDescription:
              'this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, ',
            media: {
              images: [
                {
                  src:
                    'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
                  isPrimary: false,
                },
                {
                  src:
                    'https://assets.newatlas.com/dims4/default/d9321ef/2147483647/strip/true/crop/2000x1333+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2Fb6%2F80a7b0ef4034bce73f3263e90488%2Fdepositphotos-27276047-l-2015.jpg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4',
                  isPrimary: false,
                },
              ],
              videos: [
                {
                  src: 'https://youtu.be/hn3wJ1_1Zsg',
                  isPrimary: false,
                },
              ],
            },
          },
          {
            id: 'sdf',
            name: 'product_1',
            shortDescription: 'this is the short description',
            fullDescription:
              'this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, this is the full description, ',
            media: {
              images: [
                {
                  src:
                    'https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-768x512.jpeg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
                  isPrimary: false,
                },
                {
                  src:
                    'https://assets.newatlas.com/dims4/default/d9321ef/2147483647/strip/true/crop/2000x1333+0+0/resize/1440x960!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F3a%2Fb6%2F80a7b0ef4034bce73f3263e90488%2Fdepositphotos-27276047-l-2015.jpg',
                  isPrimary: false,
                },
                {
                  src:
                    'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4',
                  isPrimary: false,
                },
              ],
              videos: [
                {
                  src: 'https://youtu.be/hn3wJ1_1Zsg',
                  isPrimary: false,
                },
              ],
            },
          },
        ],
      },
    }
  },
}
</script>
