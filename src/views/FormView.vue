<script setup>
import { ref, computed } from 'vue';
import InputComponent from '../components/InputComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import { useUsersStore } from '../stores/users';
import { validateRequired, validateFIO, validateBirthDate, validatePhone, validateEmail } from '../validation/validations';

const userStore = useUsersStore();

const form = ref({
  fio: {
    value: 'Чистов Андрей Валентинович',
    type: 'text',
    placeholder: 'ФИО',
    validation: [validateRequired, validateFIO],
    errors: [],
  },
  birthDate: {
    value: '25.02.2025',
    type: 'text',
    placeholder: 'Дата рождения дд.мм.гггг',
    validation: [validateRequired, validateBirthDate],
    errors: [],
  },
  phone: {
    value: '+79999999999',
    type: 'phone',
    placeholder: 'Номер телефона +79999999999',
    validation: [validateRequired, validatePhone],
    errors: [],
  },
  email: {
    value: 'mail@mail.com',
    type: 'email',
    placeholder: 'Электронная почта',
    validation: [validateRequired, validateEmail],
    errors: [],
  },
});

const btnLoading = ref(false);


const sendUser = (e) => {
  e.preventDefault();

  if (formValid.value) {
    btnLoading.value = true;
    userStore.addUser(formatData());

    setTimeout(() => {
      btnLoading.value = false;
      resetForm();
    }, 1000);
  }
}

const formatData = () => {
  let data = {};
  Object.keys(form.value).forEach((key) => {
    const field = form.value[key];
    data[key] = field.value;
  });
  return data;
}

const formValid = computed(() => {
  let noErrors = true;
  Object.keys(form.value).forEach((key) => {
    const field = form.value[key];
    field.errors = [];
    field.validation.forEach((validate) => {
      const error = validate(field.value);
      if (error.length) {
        field.errors.push(error);
        noErrors = false;
      }
    });
  });
  return noErrors;
})

const btnDisabled = computed(() => {
  return !formValid.value;
});

const resetForm = () => {
  Object.keys(form.value).forEach((key) => {
    const field = form.value[key];
    field.value = '';
    field.errors = [];
  });
}
</script>

<template>
  <div class="view__form">
    <form @submit="sendUser">
      <InputComponent v-for="(field, key) in form" :key="key" :type="field.type" v-model="form[key].value"
        :placeholder="field.placeholder" :name="key" :errors="field.errors" />

      <ButtonComponent type="submit" label="Отправить" :loading="btnLoading" :disabled="btnDisabled" />
    </form>
  </div>
</template>

<style scoped>
.view__form {
  display: flex;
  justify-content: center;

  form {
    text-align: center;

    .wrap__input {
      margin-bottom: 10px;
    }

    button {
      margin-top: 25px;
    }
  }
}
</style>