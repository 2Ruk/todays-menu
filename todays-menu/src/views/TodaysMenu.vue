<template>
  <div class="main-wrapper flex-column p-3">
    <div class="h-50">
      <menu-header/>
      <hr>
      <div ref="selectBtn">
        <menu-button
            @menuShowSet="menuShowSet"
            @menuShow="menuShow"
        />
        <menu-category v-if="isShow"/>
      </div>
      <div>

      </div>

    </div>
    <div class="h-50 border">
      {{selected}}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
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
  menuExample: string[] = [];
  selected: string = '';
  $refs!:{
    selectBtn:HTMLElement
  }


  constructor() {
    super();
  }

  created() {
    const menuNames: string[] = [
      '라면', '치킨', '떡볶이', '와플', '김치찜', '삼겹살',
      '계란말이','김치볶음밥','냉면'
    ]

    this.menuExample = menuNames.map((item)=> item);
  }

  menuShowSet(menuShow: boolean) {
    this.isShow = menuShow
  }

  menuShow() {
    const randomNumber =  Math.floor( Math.random() * this.menuExample.length ) ;
    this.selected = this.menuExample[randomNumber];
    this.$refs.selectBtn.hidden = true;
    console.dir(this.$refs.selectBtn)

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
