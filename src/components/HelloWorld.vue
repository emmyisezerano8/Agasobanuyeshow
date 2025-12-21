<template>
  <div class="agasobanuyeshow">
    <header>
      <img src="https://www.google.com/imgres?q=agasobanuyeshow&imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2Ffn7Z84nnl4RhFnswzU92faANJ3VMPvpOkQ8DWp3mF-a2SF-ziAXs--dGIFqZnlnY1jHxanRJiQ%3Ds900-c-k-c0x00ffffff-no-rj&imgrefurl=https%3A%2F%2Fwww.youtube.com%2F%40agasobanuyeshow-h4o&docid=79gNj8l5WB1yMM&tbnid=H9IAwfcseCaRGM&vet=12ahUKEwi72cuunKiPAxV_dUEAHahhGe8QM3oECGYQAA..i&w=900&h=900&hcb=2&itg=1&ved=2ahUKEwi72cuunKiPAxV_dUEAHahhGe8QM3oECGYQAA" alt="Agasobanuyeshow Logo" class="logo" />
      <h1>Agasobanuyeshow</h1>
    </header>
  <nav2>
    
      <button @click="view = 'firms'">Firms</button>
      <button @click="view = 'login'">Login</button>
      <button @click="view = 'signup'">Sign Up</button>
       </nav2>
    
         <section v-if="view === 'firms'">
      <h2>Firms</h2>
      <ul>
        <li>
          Hancock
          <iframe width="300" height="200" 
                  src="https://www.youtube.com/embed/6iFcGNOWnA8" 
                  title="Hancock Trailer" frameborder="0" allowfullscreen></iframe>
                  
        </li>
        <li>
          Death Note
          <iframe width="300" height="200" 
                  src="https://www.youtube.com/embed/NlJZ-YgAt-c" 
                  title="Death Note Trailer" frameborder="0" allowfullscreen></iframe>
        </li>
        <li>
          Tai Chi Master
          <iframe width="300" height="200" 
                  src="https://www.youtube.com/embed/PFLHx167qRI" 
                  title="Tai Chi Master Trailer" frameborder="0" allowfullscreen></iframe>
        </li>
      </ul>
    </section>

    <main>

      <section v-if="view === 'login'">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <input v-model="loginForm.email" type="email" placeholder="Email" required />
          <input v-model="loginForm.password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
           <a herf  @click="goToForgotPassword">Forgot Password?</a>
           
        </form> 
<section v-if="view === 'forgotPassword'">
  <h2>Reset Password</h2>
  <form>
    <input placeholder="Enter your email" v-model="loginForm.email" />
    <button type="button" @click="resetPassword">Reset Password</button>
    <button type="button" @click="view='login'">Back to Login</button>
  </form>
</section>

      
         
  </section>
      <section v-if="view === 'signup'">
        <h2>Sign Up</h2>
        <form @submit.prevent="signup">
          <input v-model="signupForm.name" type="text" placeholder="Name" required />
          <input v-model="signupForm.email" type="email" placeholder="Email" required />
          <input v-model="signupForm.password" type="password" placeholder="Password" required />
          <input v-model="signupForm.confirmPassword" type="password" placeholder="Confirm Password" required />
          <input v-model="signupForm.phone" type="tel" placeholder="Phone Number" />
         <div>
        <input type="checkbox" id="agreePolicy" v-model="agreed" />
        <label for="agreePolicy">
          I agree to the <a href="#" target="_blank">Privacy Policy</a>
        </label>
      </div>
        <button type="submit" :disabled="!agreed">
        Submit
      </button>
    </form>
      </section>
    </main>
  </div>
    <footer class="footer">
    <div class="footer-content">
      <p>
       <base-transition> My Website</base-transition>
      </p>
      </div>
    </footer>Enjoy With This Website❤️ 2025

</template>

<script>
import { openBlock } from 'vue';

export default {
  name: "HelloWorld",
  data() {
    return {
      view: "firms",
      firms: [
        { id: 1, name: "hancock" },
        { id: 2, name: "Death note" },
        { id: 3, name: "The taich mast" }
      ],
      loginForm: {
        email: "",
        password: ""
      },
      signupForm: {
        name: "",
        email: "",
        password: "",
        message: "" // to show messages
      }
    };
  },
  methods: {
    login() {
      alert(`Login is succesful`);
    },
    signup() {
      alert(`Sign up is succesful!`);
    
    } 
  }
};
</script>

<style scoped>
.agasobanuyeshow {
  max-width: 400px;
  margin: auto;
  font-family: Arial, sans-serif;
  text-align: center;
}
.logo {
  width: 80px;
  margin-bottom: 10px;
}
nav button {
  margin: 5px;
  padding: 8px 16px;
  cursor: pointer;
}
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}
input {
  padding: 6px;
  font-size: 1em;
}
button[type="submit"] {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
}
</style>  

