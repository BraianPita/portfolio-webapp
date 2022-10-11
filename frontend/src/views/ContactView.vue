<script>
  export default {
    data() {
      return {
        contact: {
          form_email: undefined,
          form_name: undefined,
          form_topic: undefined,
          form_content: undefined
        }
      }
    },
    methods: {
      sendEmail: async function () {
        var response = await this.$backend.post("/contact", {
            email: this.contact.form_email,
            name: this.contact.form_name,
            topic: this.contact.form_topic,
            content: this.contact.form_content
        });
        console.log(response);
      }
    }
  }
</script>

<template>
  <div class="container contact p-3" style="max-width:800px">
    <form class="container-lg h-100" action="POST">
      <h1 class="text-center">Get in Contact with Me</h1>

      <hr>
      
      <div class="row">
        <div class="col-md-6">
          <label for="contact-email">Email</label>
          <input v-model="this.contact.form_email" class="form-control bg-dark" type="email" name="contact-email" placeholder="example@domain.com">
        </div>
        <div class="col-md-6">
          <label for="contact-name">Name</label>
          <input v-model="this.contact.form_name" class="form-control bg-dark" type="text" name="contact-name" placeholder="Firstname Lastname">
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <label for="contact-name">Topic</label>
          <input v-model="this.contact.form_topic" class="form-control bg-dark" type="text" name="contact-topic" placeholder="Topic of the message">
        </div>
      </div>

      <hr>

      <textarea v-model="this.contact.form_content" class="form-control bg-dark" name="contact=content" id="contact-content"></textarea>

      <div class="d-flex"><button class="btn btn-primary my-3 mx-auto" @click="sendEmail" >Submit</button></div>
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
