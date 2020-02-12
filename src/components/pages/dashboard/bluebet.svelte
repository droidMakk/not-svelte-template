<script>
  import SideMenu from "../../organisms/sidemenu/bluebet.svelte";
  import TabBar from "../../molecules/tabbar.svelte";
  import MatchTable from "../../molecules/matchtable.svelte";
  import Comments from "../../molecules/comments.svelte";
</script>

<style type="text/scss" lang="scss">
  @import "./globals.scss";
  .bluebet {
    @include includeGrid();

    .bluebet__sidemenu {
      @include gridLayout(1, 3, 1, 1);
      height: 98vh;
      overflow: hidden scroll;
    }
    .bluebet__mainboard {
      padding: 10px;
      height: 98vh;
      overflow: hidden scroll;
      display: flex;
      flex-direction: column;
      img {
        margin: auto;
        width: 50vw;
      }
      @include gridLayout(3, 9, 1, 1);
    }
    .bluebet__comments {
      @include gridLayout(9, 12, 1, 1);
    }
  }
</style>

<div class="bluebet">
  <div class="bluebet__sidemenu">
    <SideMenu />
  </div>
  <div class="bluebet__mainboard">
    <img src="/img/bluebet/banner.png" alt="banner" />
    <TabBar />
    <TabBar />
    <MatchTable />
  </div>
  <div class="bluebet__comments">
    <Comments />
  </div>
</div>
