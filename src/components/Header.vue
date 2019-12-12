<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <router-link to="/" class="navbar-brand">Stock Trader</router-link>
               
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <router-link tag="li" to="/portfolio" activeClass="active"><a class="nav-item nav-link">Portfolio</a></router-link>
                    <router-link tag="li" to="/stocks" activeClass="active"><a class="nav-item nav-link">Stocks</a></router-link>
                </ul>
                <ul class="nav navbar-nav">
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
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>