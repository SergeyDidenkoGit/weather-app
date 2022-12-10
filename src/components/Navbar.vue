<template>
  <div class="navbar">
    <div class="navbar__wrapper">
      <figure class="navbar__logo-wrapper" @click="$router.push('/')">
        <img class="navbar__logo" src="@/assets/imgs/logo.png" alt="Logo" />
      </figure>
      <div class="navbar__buttons">
        <custom-button
          class="navbar__button-main"
          @click="$router.push('/weather-app/')"
          >Main</custom-button
        >
        <custom-button
          class="navbar__button-favorites"
          @click="$router.push('/weather-app/favorites')"
          >Favorites</custom-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.navbar {
  max-width: 100%;
  background-color: #ffffff;
}

.navbar__wrapper {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 25px 15px;
  display: flex;
  align-items: center;
}

.navbar__logo-wrapper {
  width: 60px;
  height: 40px;
}

.navbar__logo {
  max-width: 100%;
  height: auto;
}

.navbar__buttons {
  margin-left: auto;
}

.navbar__button-main {
  margin-right: 20px;
}
</style>
