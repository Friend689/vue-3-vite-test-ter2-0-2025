import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  const users = ref([]);

  const usersFromLS = localStorage.getItem("users");
  if (usersFromLS) {
    users.value = JSON.parse(usersFromLS);
  }

  const addUser = (user) => {
    users.value.push(user);
  };

  const deleteUser = (index) => {
    users.value.splice(index, 1);
  }

  watch(users, (state) => {
    localStorage.setItem("users", JSON.stringify(state));
  }, { deep: true });

  return {
    users,
    addUser,
    deleteUser
  };
});
