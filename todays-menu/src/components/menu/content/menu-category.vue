<template>
  <b-row class="p-3">
    <b-col  cols="4" class="p-0" v-for="(menuItem,menuIdx) in menuCategory" :key="menuItem+menuIdx">
      <b-card  class="shadow bg-warning text-white fw-bold m-1">
        {{menuItem.menuLabel}}
      </b-card>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {IMenu, IMenuList} from "@/interface/menu";

@Component({
  components: {},
})
export default class MenuCategory extends Vue {
  private menuCategory: IMenuList = [];

  constructor() {
    super();
  }

  created() {
    const sampleList = [
      '한식',
      '중식',
      '일식',
      '양식',
      '간편식',
      '비건',
    ]

    this.menuCategory = sampleList.map((menuLabel,menuIdx)=>{
      const cate: IMenu = {
        menuLabel,
        menuIdx
      }
      return cate;
    })

  }


}
</script>
