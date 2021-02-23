<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                {{ editedEmployee.id ? "Editar Empleado" : "Nuevo Empleado" }}
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" @click="hideModal">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <div class="form-group">
                  <label for="name-input">Nombre</label>
                  <input
                    type="text"
                    id="name-input"
                    class="form-control"
                    v-model="editedEmployee.first_name"
                    v-focus
                  />
                  <span v-if="$v.editedEmployee.first_name.$dirty && !$v.editedEmployee.first_name.required">
                    Nombre es requerido
                  </span>
                  <span v-if="!$v.editedEmployee.first_name.maxLength">
                    Nombre no puede tener más de 30 caracteres
                  </span>
                </div>
                <div class="form-group">
                  <label for="last-name-input">Apellido</label>
                  <input
                    type="text"
                    id="last-name-input"
                    class="form-control"
                    v-model="editedEmployee.last_name"
                  />
                  <span v-if="$v.editedEmployee.last_name.$dirty && !$v.editedEmployee.last_name.required">
                    Apellido es requerido
                  </span>
                  <span v-if="!$v.editedEmployee.last_name.maxLength">
                    Apellido no puede tener más de 30 caracteres
                  </span>
                </div>
                <div class="form-group">
                  <label for="phone-input">Teléfono</label>
                  <input
                    type="tel"
                    id="phone-input"
                    class="form-control"
                    v-model="editedEmployee.phone"
                  />
                  <span v-if="$v.editedEmployee.phone.$dirty && !$v.editedEmployee.phone.required">
                    Teléfono es requerido
                  </span>
                  <span v-if="!$v.editedEmployee.phone.maxLength">
                    Teléfono no puede tener más de 15 números
                  </span>
                </div>
                <div class="form-group">
                  <label for="category-input">Categoría</label>
                  <select
                    class="form-control"
                    v-model="editedEmployee.category"
                    id="category-input"
                  >
                    <option>Administrativo</option>
                    <option>Botones</option>
                    <option>Conserje</option>
                    <option>Gerente</option>
                    <option>Mantenimiento</option>
                    <option>Mucama</option>
                    <option>Telefonista</option>
                  </select>
                  <span v-if="$v.editedEmployee.category.$dirty && !$v.editedEmployee.category.required">
                    Categoría es requerido
                  </span>
                </div>
                <div class="form-group">
                  <label for="salary-input">Salario</label>
                  <input
                    type="number"
                    v-model="editedEmployee.salary"
                    class="form-control"
                    id="salary-input"
                  />
                  <span v-if="$v.editedEmployee.salary.$dirty && !$v.editedEmployee.salary.required">
                    Salario es requerido
                  </span>
                  <span v-if="$v.editedEmployee.salary.$dirty && !$v.editedEmployee.salary.between">
                    Salario deb ser mayor que 10.000 y menor a 1.000.000
                  </span>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="cancel-btn"
                  @click="hideModal"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" @click="saveModal" class="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { required, maxLength, between } from "vuelidate/lib/validators";
export default {
  props: {
    employee: Object,
  },
  data() {
    return {
      editedEmployee: { ...this.employee },
    }
  },
  methods: {
    hideModal() {
      this.$emit("onHideModal");
    },
    saveModal() {
      this.$v.editedEmployee.$touch();
      if (!this.$v.editedEmployee.$error) {
        this.$emit("onSaveModal", this.editedEmployee);
      }
    },
  },
  validations: {
    editedEmployee: {
      first_name: {
        required,
        maxLength: maxLength(30),
      },
      last_name: {
        required,
        maxLength: maxLength(30),
      },
      phone: {
        required,
        maxLength: maxLength(15),
      },
      category: {
        required,
      },
      salary: {
        between: between(10001, 999999),
        required,
      },
    },
  },
};
</script>
<style lang="css">
</style>
