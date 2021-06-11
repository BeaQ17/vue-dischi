const root = new Vue({
    el: "#root",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        disks: null,
        error: null
    },
    methods: {},
    mounted(){
        axios
        .get(this.url)
        .then(response => {
            console.log(response.data.response);
            this.disks = response.data.response
        })
        .catch (e => {
            console.error(e);
            this.error = "Could not access API. Retry later." + e;
        })
    }
}) //const root end