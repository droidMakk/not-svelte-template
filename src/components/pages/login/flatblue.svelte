<script>
  import { onMount } from "svelte";
  import typed from "typed.js";

  import BlueLogin from "../../molecules/forms/flatbluelogin.svelte";

  onMount(() => {
    new typed(".bluelogin__logo p", {
      strings: ["|VOTE...", "|SHARE...", "|RIGHT..."],
      typeSpeed: 30,
      shuffle: true,
      showCursor: true
    });
  });
</script>

<style lang="scss" type="text/scss">
  @import "./globals.scss";

  $base_color1: #1e1e6d;
  $base_color2: #cbe3fe;

  .bluelogin {
    display: flex;
    height: 97vh;
    width: 99vw;
    background: #2e2e74f7;

    .bluelogin__container {
      margin: auto;
      width: 70vw;
      padding: 20px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
      border-radius: 10px;
      background: white;

      @include includeGrid();
      .bluelogin__form {
        @include gridLayout(1, 6, 1, 1);
      }

      .bluelogin__logo {
        @include gridLayout(7, 12, 1, 1);
        background: #3263a8;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        img {
          margin: 50px auto 20px auto;
          width: 300px;
        }
        p {
          margin: auto auto auto 20%;
          font-size: x-large;
          font-family: "Courier New", Courier, monospace;
          font-weight: bolder;
          color: white;
        }
      }
    }
  }
</style>

<div class="bluelogin">
  <div class="bluelogin__container">
    <div class="bluelogin__form">
      <BlueLogin />
    </div>
    <div class="bluelogin__logo">
      <img src="/img/groupwork.svg" alt="team-work" />
      <p />
    </div>
  </div>
</div>
