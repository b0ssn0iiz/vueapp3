<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <!--  -->
 
        <v-col cols="2"
          ><v-text-field
            v-model="no_p"
            :rules="no_pRules"
            :counter="10"
            label="รหัสสินค้า"
            required
          ></v-text-field
        ></v-col>
 
        <v-col cols="4">
          <v-text-field
            v-model="name_p"
            :counter="30"
            :rules="name_pRules"
            label="ชื่อสินค้า"
            required
          ></v-text-field
        ></v-col>
 
        <v-col cols="3"
          ><v-text-field
            v-model="n"
            :rules="nRules"
            :counter="10"
            label="จำนวนสินค้า"
             required
          ></v-text-field
        ></v-col>
                <v-col cols="3">
      <v-select
        v-model="select"
        :items="type"
        :rules="[v => !!v || 'กรุณาเลือกประเภทสินค้า']"
        label="ประเภทสินค้า"
        required
      ></v-select>
      </v-col>
        
      </v-row>
      <v-row>
        <v-col cols="2"
          ><v-text-field
            v-model="pickup"
            :rules="pickupRules"
            :counter="7"
            label="ราคารับ"
            required
          ></v-text-field
        ></v-col>
                <v-col cols="2"
          ><v-text-field
            v-model="retail"
            :rules="retailRules"
            :counter="7"
            label="ราคาปลีก"
            required
          ></v-text-field
        ></v-col>
                <v-col cols="2"
          ><v-text-field
            v-model="whole"
            :rules="wholeRules"
            :counter="7"
            label="ราคาส่ง"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            v-model="date_ex"
            :rules="date_exRules"
            :counter="10"
            label="วัน/เดือน/ปี ที่ผลิต"
            required
          ></v-text-field
        ></v-col>

<v-col cols="3"
          ><v-text-field
            v-model="date_se"
            :rules="date_seRules"
            :counter="10"
            label="วัน/เดือน/ปี ที่จำหน่าย"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="12"
          ><v-text-field
            v-model="detail_p"
            :rules="detail_pRules"
            :counter="500"
            label="รายละเอียดสินค้า"
            required
          ></v-text-field
        ></v-col>

      </v-row>
      <v-checkbox
        v-model="checkbox"
        :rules="checkboxRules"
        label="ตรวจสอบแล้ว"
        required
      ></v-checkbox>
 
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        เพิ่มสินค้า
      </v-btn>
 
      <v-btn color="error" class="mr-4" @click="reset">
        เคลียร์
      </v-btn>
 
      <v-row>
        <v-col cols="12">
          <!-- ตารางแสดงข้อมูล -->
          <v-card>
            <v-card-title>
              ข้อมูลสินค้า
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-btn
      color="warning"
      @click="resetValidation"
    >
      เคลียร์การตรวจสอบ
    </v-btn> -->
    </v-form>
  </v-container>
</template>
 
<script>
export default {
  data: () => ({
    valid: false,
 
    name_p: "",
    name_pRules: [
      v => !!v || "กรุณากรอกชื่อสินค้า",
      v => (v && v.length <= 30) || "ชื่อต้องมีขนาดไม่เกิน 30 ตัวอักษร"
    ],
 
    n: "",
    nRules: [
      v => !!v || "กรุณากรอกจำนวน",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    

    pickup: "",
    pickupRules: [
      v => !!v || "กรุณากรอกราคา",
      v => (v && v.length <= 7) || "ต้องมีความยาวไม่เกิน 7 หลัก"
    ],


    whole: "",
    wholeRules: [
      v => !!v || "กรุณากรอกราคา",
      v => (v && v.length <= 7) || "ต้องมีความยาวไม่เกิน 7 หลัก"
    ],

            retail: "",
    retailRules: [
      v => !!v || "กรุณากรอกราคา",
      v => (v && v.length <= 7) || "ต้องมีความยาวไม่เกิน 7 หลัก"
    ],

        date_se: "",
    date_seRules: [
      v => !!v || "กรุณากรอก วัน/เดือน/ปี ที่จำหน่าย",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],

            date_ex: "",
    date_exRules: [
      v => !!v || "กรุณากรอก วัน/เดือน/ปี ที่ผลิต",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],

        detail_p: "",
    detail_pRules: [
      v => !!v || "กรุณากรอกรายละเอียดสินค้า",
      v => (v && v.length <= 500) || "ต้องมีความยาวไม่เกิน 500 หลัก"
    ],

 
       no_p: "",
    no_pRules: [
      v => !!v || "กรุณากรอกรหัสสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
 
    checkboxRules: [v => !!v || "คุณต้องตรวจสอบสินค้าก่อน"],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    type: ["ทั่วไป", "อุปกรณ์อิเล็กทรอนิกส์", "เครื่องใช้ไฟฟ้า", " เฟอร์นิเจอร์ตกแต่งบ้าน", "อะไหล่ ชิ้นส่วนรถยนตร์"],
    checkbox: false,
 
    search: "",
    headers: [ 
      {text:"รหัสสินค้า",value:"no_p"},
      {text: "ชื่อสินค้า", value: "name_p"},
      { text: "จำนวนสินค้า", value: "n" },
      { text: "ประเภทสินค้า", value: "type" },
      { text: "ราคารับ", value: "pickup" },
      { text: "ราคาปลีก", value: "retail" },
      { text: "ราคาส่ง", value: "whole" },
      { text: "วัน/เดือน/ปี ที่ผลิต", value: "date_ex" },
      { text: "วัน/เดือน/ปี ที่จำหน่าย", value: "date_se" },
      { text: "รายละเอียดสินค้า", value: "detail_p" },
 
 
    ],
 
    desserts: []
  }),
 
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        //   console.log(this.name);
        //   console.log(this.lastname);
        //   console.log(this.email);
        //   console.log(this.tel);
        //   console.log(this.select);
        //   console.log(this.a_number);
        //   console.log(this.a_group);
        //   console.log(this.a_lane);
        //   console.log(this.a_road);
        //   console.log(this.a_subdis);
        //   console.log(this.a_dis);
        //   console.log(this.a_province);
 
        this.desserts.push({
            name_p:`${this.name_p}`,
            no_p:`${this.no_p}`,
            n:`${this.n}`,
            pickup:`${this.pickup}`,
            whole:`${this.whole}`,
            retail:`${this.retail}`,
            detail_p:`${this.detail_p}`,
            date_se:`${this.date_se}`,
            date_ex:`${this.date_ex}`,
            type:`${this.select}`,

            
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
 
<style></style>