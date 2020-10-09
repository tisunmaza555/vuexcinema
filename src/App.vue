
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand mr-auto">DOUBLEDUO CINEPLEX </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{name: 'MovieList'}" class="nav-link">รายการภาพยนต์</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'CreateMovie'}" class="nav-link">เพิ่มรายการภาพยนต์</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import { store } from "./store/store";
export default {
  store
};
</script>