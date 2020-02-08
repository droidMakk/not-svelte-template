<style lang="scss" type="text/scss">
  $base_color1: #4058f2;
  $base_color2: #eef1fe;
  $base_color3: #6175fa;

  .comment {
    background: $base_color3;
    max-width: 320px;
    display: flex;
    padding: 10px 15px;
    .comment__field {
      background: $base_color3;
      border: none;
      flex: 1;
      &::placeholder {
        color: grey;
      }
    }
    .comment__button {
      border: none;
      background-color: $base_color1;
      color: $base_color2;
      padding: 10px;
    }
  }
</style>

<form action="javascript:void(0)" class="comment">
  <input
    type="text"
    class="comment__field"
    placeholder="Your Comment..."
    required />
  <input type="submit" class="comment__button" value="comment" />
</form>
