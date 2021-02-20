<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{editedEmployee.id ? 'Editar Empleado' : 'Nuevo Empleado'}}</h5>
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
                    v-model="editedEmployee.first_name"
                    class="form-control"
                    id="name-input"
                    maxlength="30"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="last-name-input">Apellido</label>
                  <input
                    type="text"
                    v-model="editedEmployee.last_name"
                    class="form-control"
                    id="last-name-input"
                    maxlength="30"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phone-input">Teléfono</label>
                  <input
                    type="tel"
                    v-model="editedEmployee.phone"
                    class="form-control"
                    id="phone-input"
                    maxlength="20"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="category-input">Categoría</label>
                  <select class="form-control" v-model="editedEmployee.category" id="category-input" required>
                    <option>Administrativo</option>
                    <option>Botones</option>
                    <option>Conserje</option>
                    <option>Gerente</option>
                    <option>Mantenimiento</option>
                    <option>Mucama</option>
                    <option>Telefonista</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="salary-input">Salario</label>
                  <input
                    type="number"
                    v-model="editedEmployee.salary"
                    class="form-control"
                    id="salary-input"
                    min="10001"
                    max="999999"
                    required
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="cancel-btn" @click="hideModal" data-dismiss="modal">
                  Cancelar
                </button>
                <button type="submit" id="save-changes-btn" @click="saveModal" class="btn btn-primary">
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
export default {
    props: {
        employee: Object
    }, 
    data() {
        return {
            editedEmployee: { ...this.employee }
        }
    }, 
    methods: {
        hideModal() {
            this.$emit('onHideModal')
        }, 
        saveModal() {
            this.$emit('onSaveModal', this.editedEmployee)
        }
    },
};
</script>
<style lang=""></style>
