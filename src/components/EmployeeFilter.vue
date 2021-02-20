<template lang="">
<div class="row m-3">
                    <div class="col-md-3">
                        <!-- Filter toogle button -->
                        <div class="row justify-content-center">
                            <input type="checkbox" id="filter-checkbox" data-toggle="toggle" data-on="Filtrar"
                                data-off="No Filtrar" data-onstyle="success" data-offstyle="danger">
                        </div>
                        <!-- Clean filters button -->
                        <div class="row justify-content-center my-2">
                            <button type="button" id="clean-filters-btn" class="btn btn-secondary btn-sm">Limpiar
                                filtros</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="last-name-filter-input">Apellido</label>
                            <input type="text" class="form-control" name="last-name-filter-input"
                                id="last-name-filter-input" value="" placeholder="Ingrese parte del Apellido">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="category-filter-input">Categoría</label>
                            <select id="category-filter-input" class="form-control">
                                <option>--Todos--</option>
                                <option>Administrativo</option>
                                <option>Botones</option>
                                <option>Conserje</option>
                                <option>Gerente</option>
                                <option>Mantenimiento</option>
                                <option>Mucama</option>
                                <option>Telefonista</option>
                            </select>
                        </div>
                    </div>
                </div>
 
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>