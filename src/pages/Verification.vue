<template>
  <q-page class="page-style move-app-color">
    <div class="parent-div column">
      <div class="logo-div flex flex-center col-4">
        <q-img
          alt="School care logo"
          class="logo"
          src="../statics/logos/verification.png"
        />
      </div>
      <div class="btn-div column q-pa-md col-7">
        <span class="q-pb-sm text-h6 flex flex-center">Verification</span>
        <span class="q-pb-sm flex flex-center"
          >OTP has been sent to your contact number</span
        >
        <q-input
          dense
          outlined
          color="green-9"
          v-model="otp"
          placeholder="Contact Number"
          mask="             #      #      #      #      #      #"
          fill-mask
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please enter otp']"
        >
          <template v-slot:prepend>
            <q-icon name="las la-key" />
          </template>
        </q-input>
        <q-btn @click="validateOtpPaswword" label="Continue" color="move-brand-blue" />
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
      otp: null,
    };
  },
  computed: {
    ...mapGetters("authentication", ["getOtp"]),
  },
  methods: {
    ...mapActions("authentication", ["validateOtp"]),
    showMessage() {
      this.alertMessage("Success!", "You have registered successfully");
      this.$router.push("/");
    },
    validateOtpPaswword() {
      var userName = localStorage.getItem("userName");
      var otpForRequest = this.otp.split(" ").join("");
      var request = {
        userName: userName,
        otp: otpForRequest,
      };
      this.validateOtp(request).then((response) => {
        if (response.length == 1) {
          this.$router.push("resetPassword");
        } else {
          this.alertMessage("Error!", "OTP is not correct");
        }
      });
      //this.$router.push('verification');
    },
  },
};
</script>

<style scoped>
.page-style {
  height: 0px;
}

.logo {
  height: 250px;
  max-width: 200px;
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
