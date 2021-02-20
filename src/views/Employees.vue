<template>
  <div>
    <Header />

    <EmployeeEdition
      v-if="editModalIsShowed"
      :employee="employeeToEdit"
      @onSaveModal="saveEmployee"
      @onHideModal="showModal(false)"
    />

    <EmployeeDeleteConfirmation
      v-if="employeeIdToDelete"
      @onCancelDelete="cancelDelete"
      @onConfirmDelete="deleteEmployee"
    />

    <div class="container mb-5">
      <h1 class="text-center m-3">PARADISE Hotel & Resort - Empleados</h1>

      <!-- Filters and add button -->
      <div class="row my-4">
        <div class="col-md-9 border border-secondary rounded bg-light">
          <EmployeeFilter />
        </div>

        <!-- Button add-employee -->
        <div class="col-md-3 align-self-center mt-2">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            @click="onNewEmployee"
          >
            Agregar Empleado
          </button>
        </div>
      </div>

      <ProgressBar v-if="!isLoaded" />

      <table v-if="isLoaded" class="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Categoría</th>
            <th>Salario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <EmployeeRow
          v-for="employee in employees"
          :key="employee.id"
          :employee="employee"
          @onEditEmployee="editEmployee"
          @onDeleteEmployee="setEmployeeToDelete"
        />
      </table>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
import EmployeeRow from "../components/EmployeeRow";
import EmployeeFilter from "../components/EmployeeFilter";
import ProgressBar from "./ProgressBar";
import EmployeeEdition from "../components/EmployeeEdition";
import EmployeeDeleteConfirmation from "../components/EmployeeDeleteConfirmation";

// Api URL
const apiUrl = "https://602d989896eaad00176dca06.mockapi.io/employees/";

export default {
  components: {
    Header,
    Footer,
    EmployeeRow,
    ProgressBar,
    EmployeeFilter,
    EmployeeEdition,
    EmployeeDeleteConfirmation,
  },
  data() {
    return {
      editModalIsShowed: false,
      employeeToEdit: this.getNewEmployee(),
      employeeIdToDelete: "",
      isLoaded: false,
      employees: [],
    };
  },
  mounted() {
    // get employees data from api
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        this.isLoaded = true;
        this.employees = data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    showModal(show) {
      this.editModalIsShowed = show;
    },
    getNewEmployee() {
      return {
        id: "",
        first_name: "",
        last_name: "",
        phone: "",
        category: "",
        salary: "",
      };
    },
    onNewEmployee() {
      this.employeeToEdit = this.getNewEmployee();
      this.showModal(true);
    },
    saveEmployee(employee) {
      this.showModal(false);
      this.isLoaded = false;
      if (employee.id === "") {
        // POST API
        fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(employee),
        })
          .then((res) => res.json())
          .then((data) => {
            this.isLoaded = true;
            // get id from the data
            employee.id = data.id;
            this.employees.push(employee);
          })
          .catch((err) => console.log(err));
      } else {
        // is a modification
        // PUT API
        fetch(`${apiUrl}${employee.id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(employee),
        })
          .then((res) => res.json())
          .then(() => {
            this.isLoaded = true;
            this.employees[this.getIndexById(employee.id, this.employees)] = employee;
          })
          .catch((err) => console.log(err));
      }
    },
    editEmployee(employee) {
      this.employeeToEdit = employee;
      this.editModalIsShowed = true;
    },
    // given an employee id, return the employee index
    getIndexById(id, employees) {
      return employees.findIndex((employee) => employee.id === id);
    },
    setEmployeeToDelete(id) {
      this.employeeIdToDelete = id;
    },
    cancelDelete() {
      this.employeeIdToDelete = "";
    },
    deleteEmployee() {
      const id = this.employeeIdToDelete;
      this.employeeIdToDelete = "";
      this.isLoaded = false;

      // DELETE API
      fetch(`${apiUrl}${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          this.isLoaded = true;
          this.employees = this.employees.filter((employee) => employee.id !== id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="css">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
