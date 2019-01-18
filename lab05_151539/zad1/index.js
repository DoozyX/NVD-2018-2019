const vm = new Vue({
    el: "#app",
    data: {
        message: "",
        has_uppercase: false,
        has_lowercase: false,
        has_number: false,
        has_special: false
    },
    watch: {
        message: function (val) {
            this.has_uppercase = /[A-Z]/.test(val);
            this.has_lowercase = /[a-z]/.test(val);
            this.has_number = /\d/.test(val)
            this.has_special = !/^[a-zA-Z0-9\s]*$/.test(val);
        }
    }
});
// Your Vue code here....
