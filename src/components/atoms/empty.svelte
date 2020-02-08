<script>
  export const width = "150";
  export const message = "Sorry, it was an empty repsonse";
</script>

<style type="text/scss" lang="scss">
  .empty {
    display: flex;
    height: -webkit-fill-available;
    height: -moz-available;
    .empty__container {
      margin: auto;
      display: flex;
      flex-direction: column;
      .empty__image {
        margin: auto;
      }
      .empty__message {
        font-family: sans-serif;
      }
    }
  }
</style>

<div class="empty">
  <div class="empty__container">
    <img src="/img/empty.svg" class="empty__image" {width} alt="empty-image" />
    <p class="empty__message">{message}</p>
  </div>
</div>
