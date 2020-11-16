<template>
  <v-container fluid>
    <Search
      v-bind:search="search"
      :categories="categories"
      v-on:updated="setSearch($event)"
    />
    <SpeedDial />
    <v-row id="vendor-header">
      <VendorStoreHeader />
    </v-row>

    <v-divider />
    <v-data-iterator
      :items="products"
      :items-per-page.sync="products.length"
      hide-default-footer
      v-bind:page="1"
      :search="search"
    >
      <template v-slot:default="props">
        <v-row align="center">
          <v-col
            v-for="item in props.items"
            cols="12"
            lg="3"
            md="6"
            sm="12"
            v-bind:key="item.id"
          >
            <ProductCard :product="item" />
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script lang="ts">
import _ from 'lodash'
import Vue from 'vue'
import { Category, Product } from '~/domain/models'
export default Vue.extend({
  created: function () {
    this.search = this.$route.query.q?.toString() || ''
  },
  mounted() {
    let arr: string[] = []
    this.products.forEach(
      (p: Product) => (arr = _.uniq([...arr, ...p.categories]))
    )
    this.categories = arr.map((c) => {
      return { name: c, selected: false }
    })
  },
  methods: {
    setSearch(e: Category | string): void {
      this.search = (e as Category)?.name || e || ''
      console.log('this is data')
      console.log(e)
      console.log('this is search' + this.search)
    },
  },
  data(): any {
    return {
      search: '',
      categories: [],
      products: [
        {
          id: '1',
          name: 'product_1',
          price: 1.11,
          categories: ['cat1', 'cat2', 'cat3', 'cat4'],
          shortDescription: 'this is the short description',
          fullDescription: 'Product_1 this is the full description',
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
          name: 'product_2',
          price: 1.22,
          categories: ['cat1', 'cat4'],
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
          name: 'product_3',
          price: 1.22,
          categories: ['cat3', 'cat4'],
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
          name: 'product_4',
          price: 1.22,
          categories: ['cat1'],
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
          name: 'product_5',
          price: 1.22,
          categories: ['cat4'],
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
          id: 'hjkoiuj',
          name: 'product_6',
          price: 1.22,
          categories: ['cat4'],
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
    }
  },
})
</script>
