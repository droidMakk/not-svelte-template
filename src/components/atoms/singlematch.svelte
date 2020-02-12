<script>
  export const team1 = "india";
  export const team2 = "australia";
  export const date = "19 Feb 2020";
  export const time = "20:42";
  export const scores = ["1.35", "0.75", "1.86"];
</script>

<style type="text/scss" lang="scss">
  @import "./globals.scss";
  $base_color: #eef1fe;

  .singlematch {
    @include includeGrid();
    background-color: $base_color;
    font-family: sans-serif;
    max-width: 90vw;
    .singlematch__flags,
    .singlematch__teams,
    .singlematch__datetime,
    .singlematch__scores {
      display: flex;
      flex-direction: row;
    }

    .singlematch__flags {
      @include gridLayout(1, 1, 1, 1);
      padding-left: 20px;
      img {
        width: 20px;
      }
    }
    .singlematch__teams {
      @include gridLayout(2, 5, 1, 1);
      text-transform: uppercase;
      margin: auto;
      span {
        margin: 0px 10px;
        color: darkgrey;
      }
    }

    .singlematch__datetime {
      @include gridLayout(6, 8, 1, 1);
      margin: auto;
    }

    .singlematch__scores {
      @include gridLayout(10, 12, 1, 1);

      p:nth-child(odd) {
        padding: 5px 10px;
        background-color: darkgrey;
        border-radius: 5px;
      }
    }
  }
</style>

<div class="singlematch">
  <div class="singlematch__flags">
    <img src={`/img/flags/${team1}.svg`} alt="country-flag" />
    <img src={`/img/flags/${team2}.svg`} alt="country-flag" />
  </div>
  <div class="singlematch__teams">
    {team1}
    <span>VS</span>
    {team2}
  </div>
  <div class="singlematch__datetime">
    <p>{date}</p>
    <p>&emsp;</p>
    <p>{time}</p>
  </div>
  <div class="singlematch__scores">
    {#each scores as score}
      <p>{score}</p>
      <p>&emsp;</p>
    {/each}
  </div>
</div>
