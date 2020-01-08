<script>
  let show = false,
    type = "password";
  function toggle() {
    show = !show;
    type = show ? "text" : "password";
  }
</script>

<style lang="scss" type="text/scss">
  @import "./globals.scss";
  .loginform {
    margin-left: 100px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    .loginform__title {
      color: $white;
    }
    .loginform__form {
      .loginform__form--username,
      .loginform__form--password {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        label {
          color: $white;
          margin-bottom: 5px;
        }
        input {
          color: $white;
          border: none;
          padding: 10px 10px;
          border-radius: 15px;
          width: 200px;
          background-color: $dark_green;
        }
        button {
          border: none;
          background: none;
          text-align: left;
        }
      }
      .loginform__form--forgot {
        text-align: right;
        margin: 15px 0px;
        a {
          text-decoration: lightgreen underline !important;
          color: lightgreen;
        }
      }

      .loginform__form--submit {
        margin: 20px 0px;
        input {
          margin: auto;
          background: $light_green2;
          border: none;
          padding: 10px 5px;
          align-items: center;
          width: -webkit-fill-available;
          border-radius: 20px;
          color: $white;
        }
      }
    }
    .loginform__register {
      text-align: center;
      margin: 20px 0px;
      p {
        text-align: center;
        color: $white;
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: line $light_green2;
        color: $light_green2;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>

<div class="loginform">
  <h1 class="loginform__title">Login</h1>
  <form class="loginform__form" action="">
    <div class="loginform__form--username">
      <label for="username">Username</label>
      <input name="username" type="text" placeholder="Enter your username" />
    </div>
    <div class="loginform__form--password">
      <label for="password">Password</label>
      <input name="password" {type} placeholder="Enter your username" />
      <button on:click={toggle} type="button" >
        {#if show}🐵{:else}🙈{/if}
      </button>
    </div>
    <div class="loginform__form--forgot">
      <a href="#">forgot password?</a>
    </div>
    <div class="loginform__form--submit">
      <input type="submit" value="Login to Wifi" />
    </div>
  </form>
  <div class="loginform__register">
    <p>Don't have an account?</p>
    <a href="#">Register Now</a>
  </div>
</div>
