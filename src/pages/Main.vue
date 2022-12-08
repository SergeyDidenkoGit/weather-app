<template>
  <div></div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      ipData: (state) => state.ip.ipData,
    }),
    ...mapGetters({}),
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchIP: "ip/fetchIP",
    }),
  },
  mounted() {
    this.fetchIP();
    console.log(this.ipData);
  },
};
</script>

<style></style>
