<script>
  export const width = "200";
</script>

<style type="text/scss" lang="scss">
  .loader {
    display: flex;
    height: -webkit-fill-available;
    height: -moz-available;
    .loader__image {
      margin: auto;
    }
  }
</style>

<div class="loader">
  <img src="/img/loader.svg" {width} class="loader__image" alt="loader-image" />
</div>
