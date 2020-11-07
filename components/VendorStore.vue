<template>
  <v-container fluid>
    <!-- <v-speed-dial direction="right" bottom left fixed v-model="fab"> -->
    <SpeedDial />
    <v-data-iterator
      :items="products"
      :items-per-page.sync="products.length"
      hide-default-footer
      :search="search"
      :custom-filter="filter"
    >
      <template v-slot:header>
        <v-row>
          <v-card dense style="position: fixed; width: 95%; z-index: 1">
            <v-banner sticky>
              <v-btn
                class="ml-3"
                v-for="cb in extractCategories()"
                :key="cb.name"
                rounded
                @click="toggleSearch(cb)"
              >
                {{ cb.name }}
                <v-icon v-if="cb.selected" class="mr-1">mdi-close</v-icon>
              </v-btn>
            </v-banner>
          </v-card>
        </v-row>
        <v-row>
          <v-banner sticky class="mt-10">
            <v-toolbar
              style="position: fixed; width: 95%; z-index: 1"
              :collapse="collapse"
              @click="collapse = !collapse"
              tile
            >
              <v-text-field
                dense
                placeholder="חיפוש..."
                v-model="search"
                clearable
                flat
                hide-details
                prepend-inner-icon="mdi-magnify"
              ></v-text-field>
            </v-toolbar>
          </v-banner>
        </v-row>
      </template>

      <VendorStoreHeader />
      <v-divider />
      <v-row  align="center">
        <v-col
          cols="12"
          lg="3"
          md="6"
          sm="12"
          v-for="product in products"
          v-bind:key="product.id"
        >
          <ProductCard :product="product" />
        </v-col>
      </v-row>
    </v-data-iterator>
  </v-container>
</template>
<script>
import VendorStoreHeader from './VendorStoreHeader'
import ProductCard from './ProductCard'
import _ from 'lodash'

export default {
  created: function () {
    this.search = this.$route.query.q?.toString() || ''
  },
  methods: {
    clearSearch() {
      this.search = ''
    },
    toggleSearch(selectedCategory) {
      selectedCategory.selected = !selectedCategory.selected
      this.collapse = !selectedCategory.selected
      if (selectedCategory.selected) {
        this.search = selectedCategory.name
      } else {
        this.search = this.search?.replace(selectedCategory.name, '') || ''
      }
      this.$vuetify.goTo('#logo')
    },
    filter(items, s) {
      s = s?.trim()
      if (s?.length === 0) return items
      console.log(s)
      return items.filter(
        (p) => p.name.includes(s) || p.categories.some((c) => c.includes(c))
      )
    },
    extractCategories() {
      let arr = []
      this.products.forEach((p) => (arr = _.uniq([...arr, ...p.categories])))
      return arr
    },
  },
  data() {
    return {
      search: '',
      fab: false,
      collapse: false,
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
      ],
    }
  },
}
</script>
