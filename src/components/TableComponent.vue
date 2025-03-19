<script setup>
import { useUsersStore } from '../stores/users';
import ButtonComponent from '../components/ButtonComponent.vue';

const userStore = useUsersStore();

</script>

<template>
  <table>
    <thead>
      <tr>
        <th>ФИО</th>
        <th>Дата Рождения</th>
        <th>Номер Телефона</th>
        <th>Электронная почта</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, userIndex) in userStore.users" :key="userIndex">
        <td>{{ user.fio }}</td>
        <td>{{ user.birthDate }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email }}</td>
        <td><ButtonComponent type="button" label="Удалить" @click="userStore.deleteUser(userIndex)" /></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-color: #f3f3f2;
  color: #24262c;

  thead {
    background-color: #faf9f9;
    font-weight: bold;
  }

  th,
  td {
    width: 1%;
    border: 1px solid #f3f3f2;
    padding: 7px 10px;
  }
}
</style>