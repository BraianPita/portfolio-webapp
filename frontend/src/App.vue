<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <header>
      <div class="wrapper">

        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
        <h1 class="green">Braian Pita</h1>

        <nav>
          <RouterLink to="/">About</RouterLink>
          <RouterLink to="/feed">Portfolio</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style>
@import '@/assets/base.css';

#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;

  font-weight: normal;
  overflow-x: hidden;

  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  line-height: 1.5;
  height: fit-content;
}

.logo {
  display: block;
  margin: 1rem auto 1rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  display: none;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  font-size: calc(12px + 1.5vw);
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  font-size: calc(14px + 1.6vw);
  background-color: transparent;
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 0.5rem;
  text-decoration: none;
  color: aquamarine;
}
nav a:hover {
  font-size: calc(14px + 1.6vw);
  background-color: transparent;
  color:aqua;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display:block;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    height: 100vh;
  }

  header {
    display: flex;
    place-items: left;
    height: 75px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width:100vw;
    background-color: var(--color-background);
    box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.25);
    height: 75px;

    align-items: center;
  }
  

  .green {
    display: block;
  }

  .logo {
    margin: auto 1rem;
  }

  nav {
    text-align: left;
    margin-left: auto;
    font-size: 1.5rem;

    margin-right: 2rem;
  }

  nav a:hover {
    font-size: 1.75rem;
    color:aqua;
  }

  nav a.router-link-exact-active:hover {
    font-size: 1.5rem;
    color: var(--color-text);
  }
}
</style>
