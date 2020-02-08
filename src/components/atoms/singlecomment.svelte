<script>
  export const name = "Afroze Khan. M";
  export const profilepic = "https://avatars.githubusercontent.com/u/115354";
  export const comment = "posting some random comment asdfas asdfasd fasfasdfas as fasdfas asdf asdasas asd";
  export const time = "11:48";
</script>

<style type="text/scss" lang="scss">
  $base_color1: #4058f2;
  $base_color2: #eef1fe;

  .comment {
    max-width: 350px;
    padding: 10px 20px;
    border-bottom: solid lightgrey 1px;
    font-family: sans-serif;
    .comment__profile {
      display: flex;
      justify-content: flex-start;
      .comment__profile--image {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: auto 0px;
      }
      .comment__profile--name {
        margin: auto 20px;
        font-size: large;
        font-weight: bolder;
      }
    }

    .comment__message {
      margin-top: 15px;
      padding-left: 20px;
      .comment__message--message {
        margin: 0px;
      }
      .comment__message--time {
        margin: 0px;
        padding-top: 5px;
        color: grey;
      }
    }
  }
</style>

<div class="comment">
  <div class="comment__profile">
    <img src={profilepic} alt="profile-pic" class="comment__profile--image" />
    <p class="comment__profile--name">{name}</p>
  </div>
  <div class="comment__message">
    <p class="comment__message--message">{comment}</p>
    <p class="comment__message--time">{time}</p>
  </div>
</div>
