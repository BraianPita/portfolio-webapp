

<template>
  <main class="home">
    <div class="grid-column">
      <img src="../assets/logo.svg" alt="Braian Pita">
    </div>
    <div class ="grid-column">
      <div style="width:100%"><h1>Braian Pita</h1></div>

      <br>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </div>
  </main>
</template>


<style>

  .home {
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: 100%;

    overflow: scroll;
  }

  .home .grid-column {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
  }

  .home h1 {
    font-size: 4rem;
  }

  .home img {
    max-width: 500px;
    margin: 0 auto;
  }

  .home p {
    text-align:justify;
    display: inline-block;
  }

@media (min-width: 1024px) {
  .home {
    display: flex;
    justify-content: center;
  }

  .home .grid-column {
    display: block;
    padding: 2rem;
    width: 50%;
    max-width: 600px;
  }

}
</style>
