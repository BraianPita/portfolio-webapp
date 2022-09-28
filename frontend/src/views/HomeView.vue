

<template>
  <main class="container-fluid">

    <div class="home row">
      <div class="col-lg-6 d-flex">
        <img class="img-fluid" src="../assets/img/me.jpg" alt="Braian Pita">
      </div>
      <div class ="col-lg-6 d-flex flex-column">
        <div style="width:100%"><h1>Braian Pita</h1></div>

        <br>
        <p class="p-sm">
          I am a programmer graduated as a Computer Information Systems Major from the University of Houston.
          I am knowledgeable in fullstack development, data science, and I have some game development knowledge.
          I can code in Javascript, HTML, CSS, python, R, C#, and some C++ and Java; furthermore, I understand how to utilize git for efficient and documented project tracking and collaboration.
          I believe my strenghts are in problem solving, versatility, fast learning and logic skills.

          This portfolio was created using the NodeJS, Vue, bootstrap, express, and MongoDB technologies. 
          My aim is to showcase my work in a user-friendly manner, which will allow users to
          understand current knowledge and skillset. 
          It is my hope that through this portal I can communicate and showcase of my capabilties to potential employers.
        </p>

      </div>
    </div>

    <div class="row">
      <hr>
      <div style="width:100%"><h1>Skills</h1></div>
      <br>

      <h2>These are my skills</h2>
    </div>


  </main>
</template>


<style>

  .home {
    height: 95vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 100%;
    padding: 5rem 0;
    

    overflow-x: hidden;
  }

  .home .grid-column {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
  }

  .home h1 {
    font-size: 4rem;
    text-align: center;
  }

  .home img {
    max-width: 475px;
    max-height: 600px;
    margin: 1rem auto;
    display: block;
  }

  .home p {
    text-align:justify;
    display: inline-block;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .p-sm {
    max-width: 750px;
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

  .home h1 {
    text-align: start;
  }

  .home p {
    text-align: start;
    margin: 0;
  }

}
</style>
