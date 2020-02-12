<script>
  export let active = 1;
  export const label = "Kind of Sport";
  export const tabs = [
    "Football",
    "Hockey",
    "Basketball",
    "Rugby",
    "Tennis",
    "Blathlon",
    "F1"
  ];

  function toggleIndex(i) {
    active = i;
  }
</script>

<style type="text/scss" lang="scss">
  $base_color1: #4058f2;
  $base_color2: #eef1fe;
  $base_color3: #6175fa;

  .tabbar {
    font-family: sans-serif;

    .tabbar__label {
      padding: 10px 10px;
      font-size: small;
      font-weight: bold;
    }
    .tabbar__tabs {
      width: inherit;
      background: $base_color2;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;

      .tabbar__tab {
        padding: 10px 50px;
        color: black;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        &.active {
          background: $base_color1;
          border-radius: 10px;
          color: white;
        }

        &:hover {
          background-color: $base_color3;
          cursor: pointer;
        }
      }
    }
  }
</style>

<div class="tabbar">
  <div class="tabbar__label">{label}</div>
  <div class="tabbar__tabs">
    {#each tabs as tab, i}
      {#if i === active}
        <div class="tabbar__tab active">{tab}</div>
      {:else}
        <div class="tabbar__tab" on:click={() => toggleIndex(i)}>{tab}</div>
      {/if}
    {/each}
  </div>
</div>
