<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card color="#FF5C00" dark>
          <v-card-title><div class="font-big">จำนวนลูกค้า</div></v-card-title>

          <v-card-text><div class="font-big">50 คน</div></v-card-text>

          <v-card-actions>
            <v-btn text>ข้อมูลลูกค้า</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="#FF7C00" dark>
          <v-card-title><div class="font-big">จำนวนสินค้า</div></v-card-title>

          <v-card-text><div class="font-big">20 ชิ้น</div></v-card-text>

          <v-card-actions>
            <v-btn text>ข้อมูลสินค้า</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="#ff8c00" dark>
          <v-card-title><div class="font-big">จำนวนรายงาน</div></v-card-title>

          <v-card-text><div class="font-big">16 รายการ</div></v-card-text>

          <v-card-actions>
            <v-btn text>ข้อมูลรายงาน</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto text-center" color="gold" dark>
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value"
                color="rgba(255, 140, 0, 1)"
                height="70"
                padding="15"
                stroke-linecap="round"
              >
                <template v-slot:label="item"> {{ item.value }}฿ </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>
          <v-card-text>
            <div class="font-big font-weight-thin">รายงานการขาย</div>
          </v-card-text>

          <v-divider></v-divider>
          <!-- 
          <v-card-actions class="justify-center">
            <v-btn block text>รายงานการขาย</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      value: [111, 999, 111, 999, 111, 999, 111,]
    };
  },
};
</script>

<style scope>
.font-big {
  font-size: 30px;
}
</style>
