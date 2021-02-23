<template>
  <div>
    <Header />

    <EmployeeEdition
      v-if="editModalIsShowed"
      :employee="employeeToEdit"
      @onSaveModal="saveEmployee"
      @onHideModal="showModal(false)"
    />

    <ConfirmationModal
      v-if="employeeIdToDelete"
      title="Borrar Empleado"
      question="Confirma que desea borrar el Empleado?"
      @onCancel="cancelDelete"
      @onConfirm="deleteEmployee"
    />

    <div class="container mb-5">
      <h1 class="text-center m-3">PARADISE Hotel & Resort - Empleados</h1>

      <!-- Filters and add button -->
      <div class="row my-4">
        <div class="col-md-3 align-self-center mt-2">
          <!-- Filter toogle button -->
          <div class="row justify-content-center my-2">
            <span>Ocultar Filtros?</span>
          </div>
          <div class="row justify-content-center my-2">
            <input
              type="checkbox"
              v-model="employeeFilter.isHidden"
              @click="hideFilters(!employeeFilter.isHidden)"
            />
          </div>
          <!-- Button add-employee -->
          <button 
            type="button"
            class="btn btn-primary btn-lg btn-block mb-2"
            @click="onNewEmployee"
          >
            Agregar Empleado
          </button>
        </div>

        <div
          v-if="!employeeFilter.isHidden"
          class="col-md-8 border border-secondary rounded bg-light"
        >
          <EmployeeFilter
            @onChangeLastName="onChangeLastNameFilter"
            @onChangeCategory="onChangeCategoryFilter"
          />
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
          v-for="employee in filteredEmployees"
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
import ConfirmationModal from "../components/ConfirmationModal";
import { API_URL, ALL_CATEGORIES } from "../constants"

export default {
  components: {
    Header,
    Footer,
    EmployeeRow,
    ProgressBar,
    EmployeeFilter,
    EmployeeEdition,
    ConfirmationModal,
  },
  data() {
    return {
      employees: [],
      editModalIsShowed: false,
      employeeToEdit: this.getNewEmployee(),
      employeeIdToDelete: "",
      isLoaded: false, // flag to spinner 
      employeeFilter: {
        isHidden: false,
        lastNameFilter: "",
        categoryFilter: ALL_CATEGORIES,
      },
    };
  },
  mounted() {
    // get employees data from api
    fetch(API_URL)
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
      // hidden filters
      this.hideFilters(true);
      if (employee.id === "") {
        // POST API - New
        fetch(API_URL, {
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
        fetch(`${API_URL}${employee.id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(employee),
        })
          .then((res) => res.json())
          .then(() => {
            this.isLoaded = true;
            const employeeIndex = this.getIndexById(employee.id, this.employees);
            this.employees = this.employees.map((e, index) => index === employeeIndex ? employee : e)
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
      fetch(`${API_URL}${id}`, {
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
    hideFilters(hide) {
      this.employeeFilter.isHidden = hide
      this.employeeFilter.lastNameFilter = "";
      this.employeeFilter.categoryFilter = ALL_CATEGORIES;
    },
    onChangeLastNameFilter(lastName) {
      this.employeeFilter.lastNameFilter = lastName;
    },
    onChangeCategoryFilter(category) {
      this.employeeFilter.categoryFilter = category;
    },
  },
  computed: {
    filteredEmployees: function () {
      const employeesFiltered = this.employees.filter((employee) => {
          return (
            employee.last_name
              .toUpperCase()
              .includes(this.employeeFilter.lastNameFilter.toUpperCase()) &&
            (this.employeeFilter.categoryFilter === ALL_CATEGORIES ||
              employee.category === this.employeeFilter.categoryFilter)
          );
        });
        return employeesFiltered;
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
