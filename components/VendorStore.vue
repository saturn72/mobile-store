<template>
  <v-container>
    <!-- <v-speed-dial direction="right" bottom left fixed v-model="fab"> -->
    <v-speed-dial direction="right" bottom left fixed class="mb-12">
      <template v-slot:activator>
        <v-btn
          color="green darken-1"
          elevation="24"
          dark
          fab
          out
          large
          @click="toCheckout"
        >
          <v-icon> mdi-cart-check </v-icon>
        </v-btn>
      </template>
      <!-- <template v-slot:activator>
        <v-btn v-model="fab" color="green darken-1" elevation="24" dark fab out>
          <v-icon v-if="fab"> mdi-close </v-icon>
          <v-icon v-else> mdi-dots-vertical </v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="primary">
        <v-icon>mdi-cart-check</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn> -->
    </v-speed-dial>
    <VendorStoreHeader />
    <v-divider />
    <v-row justify="center" align="center">
      <v-col
        cols="12"
        v-for="product in catalog.products"
        v-bind:key="product.id"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VendorStoreHeader from './VendorStoreHeader'
import ProductCard from './ProductCard'
export default {
  methods: {
    toCheckout: function () {
      this.$router.push('/checkout')
    },
  },
  data() {
    return {
      fab: false,
      catalog: {
        products: [
          {
            id: '1',
            name: 'product_1',
            price: 1.11,
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
            price: 1.22,
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
            price: 1.22,
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
            price: 1.22,
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
            price: 1.22,
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
            price: 1.22,
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
            price: 1.22,
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
            price: 1.22,
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
            price: 1.22,
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
