<script>
  import GoogleLoginBtn from "../../atoms/button/googlelogin.svelte";

  let username, password, checked;
</script>

<style type="text/scss" lang="scss">
  @import "./globals.scss";

  $base_color1: #1e1e6d;
  $base_color2: #cbe3fe;

  .loginform {
    @include includeGrid();
    p {
      font-family: sans-serif;
      text-align: center;
      font-size: small;
      margin: 0px;
    }
    .loginform__votetoday {
      @include gridLayout(1, 12, 1, 1);
      img {
        width: 60px;
        border-radius: 50%;
      }
      p {
        font-size: x-large !important;
      }
      margin: 10px auto;
    }
    .loginform__welcome {
      @include gridLayout(1, 12, 2, 2);
      p {
        font-size: xx-large !important;
        font-weight: 100;
      }
      margin: 10px auto;
    }
    .loginform__google {
      @include gridLayout(1, 12, 3, 3);
      display: flex;
      margin: 20px auto;
    }
    .loginform__email {
      @include gridLayout(1, 12, 4, 4);
      margin: 20px 0px;
      display: flex;
      justify-content: center;
      p {
        font-size: x-small;
        color: #9b9898;
        background-color: white;
      }
      hr {
        width: 30%;
        background-color: #cfcece;
        height: 1px;
        border: none;
      }
    }
    .loginform__fields {
      @include gridLayout(1, 12, 5, 5);
      form {
        display: flex;
        flex-direction: column;
        max-width: 60%;
        margin: auto;
      }
      .loginform__fields--email,
      .loginform__fields--password {
        border: 1px lightgrey solid;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 10px 0px;
        &::placeholder {
          color: $base_color1;
        }
      }
      .loginform__helpers {
        display: flex;
        margin: 20px 0px;
        justify-content: space-between;
        color: $base_color1;
        div {
          display: flex;
        }
      }
      .loginform__button {
        background: $base_color1;
        border: none;
        color: white;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        margin: 10px 0px;
      }
    }
    .loginform__forgot {
      @include gridLayout(1, 12, 6, 6);
      margin: 20px 0px;
    }
  }
</style>

<div class="loginform">
  <div class="loginform__votetoday">
    <img src="/img/test.svg" alt="test-logo" />
  </div>
  <div class="loginform__welcome">
    <p>Welcome Back</p>
  </div>
  <div class="loginform__google">
    <GoogleLoginBtn />
  </div>
  <div class="loginform__email ">
    <hr />
    <p>OR LOGIN WITH EMAIL</p>
    <hr />
  </div>
  <div class="loginform__fields">
    <form action="javascript:void(0)">
      <input
        class="loginform__fields--email"
        type="email"
        placeholder="Your Email"
        bind:value={username}
        required />
      <input
        class="loginform__fields--password"
        type="password"
        placeholder="Your Password"
        bind:value={password}
        required />
      <div class="loginform__helpers">
        <div>
          <input type="checkbox" bind:checked />
          <p>Keep me logged in</p>
        </div>
        <p class="loginform__helpers--forgotpassword">forgot password</p>
      </div>
      <button class="loginform__button">Log In</button>
    </form>
  </div>
  <div class="loginform__forgot">
    <p>
      Don't have an account yet?
      <span>
        <a href="">Sign Up</a>
      </span>
    </p>
  </div>
</div>
