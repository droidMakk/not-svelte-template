<style lang="scss" type="text/scss">
  .wrapper {
    display: flex;

    .wrapper__holder {
        margin: auto;
    }
  }
</style>

<div class="wrapper">
  <div class="wrapper__holder">
    <slot>
      <div>NO COMPONENT</div>
    </slot>
  </div>
</div>
