<script>
  // FAKE USERS
  import Comment from "../atoms/singlecomment.svelte";
  import CommentField from "../atoms/commentfield.svelte";

  const comments = [
    {
      id: "115354",
      firstName: "Roberts",
      lastName: "Vicky",
      photoUrl: "https://avatars.githubusercontent.com/u/115354",
      jobTitle: "Actor",
      comment: "Test Comment with data..."
    },
    {
      id: "484730",
      firstName: "Mcclure",
      lastName: "Sparks",
      photoUrl: "https://avatars.githubusercontent.com/u/484730",
      jobTitle: "Home Entertainment Equipment Installer",
      comment: "Test Comment with data..."
    },
    {
      id: "304032",
      firstName: "Warren",
      lastName: "Suzanne",
      photoUrl: "https://avatars.githubusercontent.com/u/304032",
      jobTitle: "Auditor",
      comment: "Test Comment with data..."
    },
    {
      id: "915831",
      firstName: "Burnett",
      lastName: "Arnold",
      photoUrl: "https://avatars.githubusercontent.com/u/915831",
      jobTitle: "Police Detective",
      comment: "Test Comment with data..."
    },
    {
      id: "661076",
      firstName: "Jeremy",
      lastName: "Johnathan",
      photoUrl: "https://avatars.githubusercontent.com/u/661076",
      jobTitle: "Biologist",
      comment: "Test Comment with data..."
    },
    {
      id: "115354",
      firstName: "Roberts",
      lastName: "Vicky",
      photoUrl: "https://avatars.githubusercontent.com/u/115354",
      jobTitle: "Actor",
      comment: "Test Comment with data..."
    },
    {
      id: "484730",
      firstName: "Mcclure",
      lastName: "Sparks",
      photoUrl: "https://avatars.githubusercontent.com/u/484730",
      jobTitle: "Home Entertainment Equipment Installer",
      comment: "Test Comment with data..."
    },
    {
      id: "304032",
      firstName: "Warren",
      lastName: "Suzanne",
      photoUrl: "https://avatars.githubusercontent.com/u/304032",
      jobTitle: "Auditor",
      comment: "Test Comment with data..."
    },
    {
      id: "915831",
      firstName: "Burnett",
      lastName: "Arnold",
      photoUrl: "https://avatars.githubusercontent.com/u/915831",
      jobTitle: "Police Detective",
      comment: "Test Comment with data..."
    },
    {
      id: "661076",
      firstName: "Jeremy",
      lastName: "Johnathan",
      photoUrl: "https://avatars.githubusercontent.com/u/661076",
      jobTitle: "Biologist",
      comment: "Test Comment with data..."
    }
  ];
</script>

<style type="text/scss" lang="scss">
  $base_color1: #4058f2;
  $base_color2: #eef1fe;
  .comments {
    .comments__container {
      height: inherit;
      max-height: 90vh;
      overflow: hidden scroll;
      border-left: solid 1px lightgrey;

      &::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #eef1fe;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: $base_color1;
        border-radius: 10px;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: $base_color1;
      }
    }

    .comments__field {
      position: sticky;
      bottom: 0;
    }
  }
</style>

<div class="comments">
  <div class="comments__container">
    {#each comments as comment}
      <Comment
        name={`${comment.firstName} ${comment.lastName}`}
        profilepic={comment.photoUrl}
        comment={comment.comment} />
    {/each}
  </div>
  <div class="comments__field">
    <CommentField />
  </div>
</div>
