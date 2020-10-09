<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>รายการภาพยนต์</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 8.33%">ลำดับ</th>
                <th style="width: 50%">รายการภาพยนต์</th>
                <th style="width: 41.66%">ราคา</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(movie,index) in $store.getters.movie" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ movie.name }}</td>
                <td>{{ movie.price }}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
