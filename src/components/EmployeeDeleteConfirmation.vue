<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Borrar Empleado</h5>
            </div>
            <div class="modal-body">
                <p>Confirma que desea borrar el Empleado?</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="cancel-btn"
                @click="hideDeleteModal"
              >
                Cancelar
              </button>
              <button
                type="submit"
                @click="confirmDeleteModal"
                class="btn btn-primary"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
    methods: {
        hideDeleteModal() {
            this.$emit('onCancelDelete')

        }, 
        confirmDeleteModal() {
            this.$emit('onConfirmDelete')
        }
    },
};
</script>
<style lang=""></style>
