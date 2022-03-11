<template>
  <b-row>
    <b-col cols="6" class="text-white">
      <b-button class="w-100 rounded-1 menu-btn"  @click="menuShow">
        랜덤<br/>
        선택
      </b-button>
    </b-col>
    <b-col cols="6" class="text-white">
      <b-button class="w-100 rounded-1 menu-btn"  @click="menuShowSet(true)">
        수동<br/>
        선택
      </b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MenuButton extends Vue {

  menuShowSet(menuShow: boolean) {
    this.$emit('menuShowSet',menuShow)
  }

  menuShow(){
    this.$emit('menuShow')
  }

}
</script>
<style>
.menu-btn {
  background: #F68989 !important;
  border:none !important;
}
</style>
