<template>
  <div class="container contact p-3" style="max-width:800px">
    <form class="container-lg h-100" action="POST">
      <h1 class="text-center">Get in Contact with Me</h1>

      <hr>
      
      <div class="row">
        <div class="col-md-6">
          <label for="contact-email">Email</label>
          <input class="form-control bg-dark" type="email" name="contact-email" placeholder="example@domain.com">
        </div>
        <div class="col-md-6">
          <label for="contact-name">Name</label>
          <input class="form-control bg-dark" type="text" name="contact-name" placeholder="Firstname Lastname">
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <label for="contact-name">Topic</label>
          <input class="form-control bg-dark" type="text" name="contact-topic" placeholder="Topic of the message">
        </div>
      </div>

      <hr>

      <textarea class="form-control bg-dark" name="contact=content" id="contact-content"></textarea>

      <div class="d-flex"><button class="btn btn-primary my-3 mx-auto">Submit</button></div>
    </form>
  </div>
</template>

<style>

  .contact {
    min-height: 100%;
  }

  #contact-content {
    resize: none;
    width: 100%;
    height: 30vh;
  }

</style>
