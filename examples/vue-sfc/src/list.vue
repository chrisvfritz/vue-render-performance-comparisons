<template>
  <div id="root">
     <ul>
        <list-item v-for="item, index in items" />
      </ul>
  </div>

</template>
<script>
import ListItem from './list-item.vue'
export default {
   name: 'list',
   props: {
      items: Array
   },
   // functional: true,
   components: {
     ListItem
   }
}
</script>
 
