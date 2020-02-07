<style lang="scss" type="text/scss">
  .btnlogin {
    display: flex;
    padding: 10px 15px;
    border: none;
    width: 200px;
    max-width: 200px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;

    &:hover {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    }

    img,
    p {
      margin: auto;
    }

    img {
      width: 20px;
    }
  }
</style>

<div>
  <button class="btnlogin">
    <img src="/img/google.png" alt="google-logo" />
    <p>Log in with Google</p>
  </button>
</div>
