<template>
  <div>
    history page
    <input type="file" @change="handleFileChange" />
  </div>
</template>

<script>
import * as XLSX from 'xlsx';
export default {
  name: 'HistoryPage',
  layout: 'GatherLayout',
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        console.log(jsonData);
      };

      reader.readAsArrayBuffer(file);
    },
  },
};
</script>

<style scoped></style>
