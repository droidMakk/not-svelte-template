<style lang="scss" type="text/scss">
  @import "./globals.scss";
  $base_color1: #4058f2;
  $base_color2: #eef1fe;
  $base_color3: #6175fa;
  $dark_color: #5e507d;

  .bluebet {
    font-family: sans-serif;
    max-width: 300px;
    background-color: $base_color2;
    color: $dark_color;
    @include includeGrid();
    .bluebet__title {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-weight: 100;
      font-size: 20px;
      margin: auto 20px;
      @include gridLayout(1, 12, 1, 1);
    }
    .bluebet__profile {
      @include gridLayout(1, 12, 2, 2);
      width: 90%;
      margin: 30px auto;
      .bluebet__profile--details {
        display: flex;
        margin: 10px 0px;
        img {
          width: 50px;
          border-radius: 50%;
          border: 2px solid green;
          margin-left: 10px;
        }
        p {
          margin-left: 20px;
        }
      }
      .bluebet__profile--money {
        border: 1px solid $base_color1;
        padding: 10px;
        display: flex;
        img {
          width: 20px;
          margin: auto 10px auto 5px;
        }
        p {
          margin: auto 0px;
        }
      }
    }
    .bluebet__submenu {
      @include gridLayout(1, 12, 3, 3);
      margin: 30px 20px;

      .bluebet__submenu--football,
      .bluebet__submenu--livescore,
      .bluebet__submenu--stats,
      .bluebet__submenu--forecast {
        margin: 10px 0px;

        &:hover {
          color: $base_color1;
          cursor: pointer;
        }

        img {
          width: 20px;
          margin-right: 20px;
        }
      }
    }
    .bluebet__line {
      @include gridLayout(1, 12, 4, 4);
      margin: 20px 0px;
      hr {
        width: 90%;
        color: $dark_color;
      }
    }
    .bluebet__leaguemenu {
      @include gridLayout(1, 12, 5, 5);

      .bluebet__leaguemenu--favourite,
      .bluebet__leaguemenu--premiere,
      .bluebet__leaguemenu--champions,
      .bluebet__leaguemenu--liga {
        display: flex;
        flex-direction: column;
        margin: 20px 0px;
        transition: color 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;

        &:hover {
          color: $base_color1;
        }

        img {
          width: 30px;
          margin: auto 10px;
        }
      }
    }
  }
</style>

<div class="bluebet">
  <div class="bluebet__title">
    <p>Understand BET</p>
  </div>
  <div class="bluebet__profile">
    <div class="bluebet__profile--details">
      <img
        src="https://randomuser.me/api/portraits/men/85.jpg"
        alt="profile-image" />
      <p>Kabeer Khan. M</p>
    </div>
    <div class="bluebet__profile--money">
      <img src="/img/bluebet/coin.svg" alt="dollar" />
      <p>$951.65</p>
    </div>
  </div>
  <div class="bluebet__submenu">
    <div class="bluebet__submenu--football">
      <img alt="football" src="/img/bluebet/football.svg" />
      <span>Matches</span>
    </div>
    <div class="bluebet__submenu--livescore">
      <img alt="live-score" src="/img/bluebet/live.svg" />
      <span>Live Score</span>
    </div>
    <div class="bluebet__submenu--stats">
      <img alt="statistics" src="/img/bluebet/piechart.svg" />
      <span>Statistics</span>
    </div>
    <div class="bluebet__submenu--forecast">
      <img alt="forecast" src="/img/bluebet/flower.svg" />
      <span>Forecast</span>
    </div>
  </div>
  <div class="bluebet__line">
    <hr />
  </div>
  <div class="bluebet__leaguemenu">
    <div class="bluebet__leaguemenu--favourite">
      <p>Favourite Leagues</p>
      <img src="/img/bluebet/flower.svg" alt="fav-league" />
    </div>
    <div class="bluebet__leaguemenu--premiere">
      <p>Premiere League</p>
      <img src="/img/bluebet/football.svg" alt="fav-league" />
    </div>
    <div class="bluebet__leaguemenu--champions">
      <p>Champions League</p>
      <img src="/img/bluebet/lion.svg" alt="fav-league" />
    </div>
    <div class="bluebet__leaguemenu--liga">
      <p>La Liga</p>
      <img src="/img/bluebet/lion.svg" alt="fav-league" />
    </div>
  </div>
</div>
