<script>
  import SingleMatch from "../atoms/singlematch.svelte";
  let matches = ["", "", "", "", "", "", "", "", "", "", "", ""];
</script>

<style type="text/scss" lang="scss">
  $base_color1: #4058f2;
  $base_color2: #eef1fe;
  $base_color3: #6175fa;
  
  .matchtable {
    margin: 20px;
    font-family: sans-serif;
    width: fit-content;
    .matchtable__label {
      margin-bottom: 20px;
    }
  }
</style>

<div class="matchtable">
  <div class="matchtable__label">Matches</div>
  <div class="matchtable__matches">
    {#each matches as match}
      <SingleMatch />
    {/each}
  </div>
</div>
