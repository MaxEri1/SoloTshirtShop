<template>
  <div class="OtherShirts">
  </div>
</template>


<script>
export default {
  data() {
    return {
      otherShirts: {
        viewOthers: ''
      },

      setViewOtherShirts(view) {
        this.otherShirts.viewOthers = view;
      }

    };
  }
}
</script>
