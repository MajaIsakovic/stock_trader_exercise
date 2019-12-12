<template>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
                </div>    
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link tag="li" to="/portfolio" activeClass="active"><a class="nav-item nav-link">Portfolio</a></router-link>
                    <router-link tag="li" to="/stocks" activeClass="active"><a class="nav-item nav-link">Stocks</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" class="nav-item nav-link">End Day</a></li>
                    <li class="dropdown">
                        <a href="#"
                            class="dropdown-toggle nav-item nav-link"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false">Save & Load<span class="carret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" class="nav-item nav-link">Save Data</a></li>
                                <li><a href="#" class="nav-item nav-link">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>