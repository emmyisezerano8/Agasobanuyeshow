
import { createApp } from 'vue';

import HelloWorld from './components/HelloWorld.vue';

createApp(HelloWorld).mount('#app');

let existingEmail = "test@example.com";

function signup() {
  let email = document.getElementById("email").value;

  if (email === existingEmail) {
    alert("This email already exists!");
  } else {
    alert("Sign up is successful!");
  }
}
methods: {
  resetPassword() {
    if (!this.loginForm.email) {
      alert("You are not logged in. Please enter your email.");
      return;
    }
    alert("Password reset link sent to your email.");
  }
}
