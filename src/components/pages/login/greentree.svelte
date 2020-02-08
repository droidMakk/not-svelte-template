<script>
  import GreenTreeForm from "../../molecules/forms/greentreelogin.svelte";
</script>

<style lang="scss" type="text/scss">
  @import "./globals.scss";

  .greentree {
    @include includeGrid();
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    height: 100vh;

    .greentree__banner {
      @include gridLayout(1, 6, 1, 1);
      display: flex;
      flex-direction: column;
      .greentree__banner--logo {
        margin: auto;
        flex: 1;
        padding-top: 50px;
        img {
          width: 30rem;
        }
      }
      .greentree__banner--sitelogo {
        align-items: flex-start;
        width: 60px;
        padding: 10px;
        border-radius: 50%;
      }
    }

    .greentree__formholder {
      @include gridLayout(6, 12, 1, 1);
      background: url("/img/greentree_form.svg");
      display: flex;
      flex-direction: column;
      .greentree__formholder--form {
        margin: auto;
      }
      .greentree__formholder--contact {
        align-items: flex-end;
        text-align: right;
        color: $white;
        padding: 20px;
        a {
          color: $white;
          text-decoration: line $white;
          padding: 0px;
          margin: 0px;
        }
        p {
          padding: 0px;
          margin: 0px;
        }
      }
    }
  }
</style>

<div class="greentree">
  <div class="greentree__banner">
    <img
      class="greentree__banner--sitelogo"
      alt="site--logo"
      src="/img/logo.png" />
    <div class="greentree__banner--logo">
      <img alt="banner--logo" src="/img/bannerimg.png" />
    </div>
  </div>
  <div class="greentree__formholder">
    <div class="greentree__formholder--form">
      <GreenTreeForm />
    </div>
    <div class="greentree__formholder--contact">
      <p>Want this on your site ?</p>
      <a href="https://wa.me/918939717211">WhatsApp Us</a>
      <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  </div>
</div>
