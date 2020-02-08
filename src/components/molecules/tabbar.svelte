<script>
  export const active = 1;
  export const tabs = ["one", "two", "three", "four"];
</script>

<style type="text/scss" lang="scss">
  $base_color1: #4058f2;
  $base_color2: #eef1fe;
  $base_color3: #6175fa;

  .tabbar {
    width: inherit;
    background: $base_color2;
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    border-radius: 10px;

    .tab {
      padding: 10px 50px;
      color: black;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      &.active {
        background: $base_color1;
        border-radius: 10px;
      }

      &:hover {
        background-color: $base_color3;
        cursor: pointer;
      }
    }
  }
</style>

<div class="tabbar">
  {#each tabs as tab, i}
    {#if i === active}
      <div class="tab active">{tab}</div>
    {:else}
      <div class="tab">{tab}</div>
    {/if}
  {/each}
</div>
