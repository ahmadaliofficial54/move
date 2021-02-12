<template>
  <q-page class="page-style move-app-color">
    <div class="parent-div column">
      <div class="logo-div q-pt-md flex flex-center col-3">
        <q-img
          alt="School care logo"
          width="200px"
          height="68px"
          class="logo"
          src="../statics/logos/logo.png"
        />
      </div>
      <div class="q-mt-xl column q-pa-md col-7">
        <span class="q-pb-sm text-tag">Reset Password</span>
        <q-input
          dense
          outlined
          color="green-9"
          v-model="password"
          type="password"
          placeholder="New Password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please enter password']"
        >
          <template v-slot:prepend>
            <q-icon name="las la-lock" />
          </template>
        </q-input>

        <q-input
          dense
          outlined
          color="green-9"
          v-model="confirmPassword"
          @input="checkSamePassword"
          type="password"
          placeholder="Confirm New Password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please enter password']"
        >
          <template v-slot:prepend>
            <q-icon name="las la-lock" />
          </template>
        </q-input>
        <q-btn
          label="Save"
          :disable="flag"
          @click="resetPassword"
          color="move-brand-blue"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import notification from "../common/notificationsAndDialogues.js";
import { mapGetters, mapActions } from "vuex";
import router from "../router";
export default {
  mixins: [notification],
  data() {
    return {
      confirmPassword: null,
      password: null,
      flag: true,
    };
  },
  methods: {
    ...mapActions("authentication", ["resetPasswordWithoutOldPassword"]),
    resetPassword() {
      var userName = localStorage.getItem("userName");
      var request = {
        userName: userName,
        password: this.password,
      };
      this.resetPasswordWithoutOldPassword(request).then((response) => {
        if (response == "Success") {
          this.alertMessage("Success!", "Password reset successfully");
          this.$router.push("/");
        }
      });
    },
    checkSamePassword() {
      if (this.password == this.confirmPassword) {
        this.flag = false;
      }
    },
  },
};
</script>

<style scoped>
.page-style {
  height: 0px;
}

.logo {
  margin-top: 40px;
}

.parent-div {
  height: 100%;
}

.powered-by-img {
  height: 40px;
  width: 40px;
  margin-left: 5px;
}

.text-tag {
  font-size: 15px;
}
</style>
