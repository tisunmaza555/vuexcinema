<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>เพิ่มภาพยนต์</h2>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="addmovie()">
            <div class="form-group">
              <label>ชื่อภาพยนต์</label>
              <input type="text" class="form-control" placeholder="ระบุรายการภาพยนต์" v-model="name" />
            </div>
            <div class="form-group">
              <label>ราคาภาพยนต์</label>
              <input type="number" class="form-control" placeholder="ระบุราคาภาพยนต์" v-model="price" />
            </div>
            <button type="submit" class="btn btn-primary">เพิ่มรายภาพยนต์</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: 0
    };
  },
  methods: {
    addmovie() {
      if (this.name) {
        let payload = { name: this.name, price: this.price };
        this.$store.dispatch("addmovie", payload);
      }
    }
  }
};
</script>