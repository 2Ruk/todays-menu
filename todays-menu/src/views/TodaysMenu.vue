<template>
  <div class="main-wrapper flex-column p-3">
    <div class="h-50">
      <menu-header/>
      <menu-button
          @menuShowSet="menuShowSet"
      />

      <menu-category/>
    </div>
    <div class="h-50 border">
      결과물
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MenuHeader from "@/components/menu/header/menu-header.vue";
import MenuButton from "@/components/menu/content/menu-button.vue";
import MenuCategory from "@/components/menu/content/menu-category.vue";

@Component({
  components: {
    MenuCategory,
    MenuButton,
    MenuHeader
  },
})
export default class TodaysMenu extends Vue {
  isShow: boolean = false;
  constructor() {
    super();
  }
  menuShowSet(menuShow: boolean) {
    console.log(menuShow)
    // this.menuShow = menuShow;
  }


}
</script>
<style>
.main-wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
}
</style>
