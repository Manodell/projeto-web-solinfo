<?php include("header.php");?>
    <section>
    <div class="container">
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-4 sidebar">
                <ul class="nav nav-sidebar"><br />
                    <li class="active">
                        <a href="#">
                            Calças
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">Categoria 01</a>
                    </li>
                    <li>
                        <a href="#">Categoria 02</a>
                    </li>
                </ul>
                <ul class="banner-nav-sidebar">
                    <li><a href="#" title="banner" alt="banner"><img src="images/product007.jpg"></a></li>
                    <li><a href="#" title="banner" alt="banner"><img src="images/product007.jpg"></a></li>
                    <li><a href="#" title="banner" alt="banner"><img src="images/product007.jpg"></a></li>
                </ul>
            </div>
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-8 main">
                    <h1 class="page-header">Boas Compras</h1>
                    <form oninput="outputproduct1.value = (quantproduct1.valueAsNumber || 0) * (valproduct1.valueAsNumber || 0)">
                         <div class="row placeholders">
                        <h2 class="sub-header">Sacola de Compras</h2>
                        <div class="table-responsive carrinhodecompras">
                            <table class="table table-striped">
                                <thead>
                                <tr class="sacola-valor">
                                    <td><span>Valor total</span></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>R$ 1020,00</td>
                                    <td><a href="#" title="Comprar"><img  alt="Comrar" src="images/comprar.png"></a></td>
                                </tr>
                                <tr>
                                    <th>#</th>
                                    <th>Nome Produto</th>
                                    <th>Pequena expecificação</th>
                                    <th>Quantidade</th>
                                    <th>Valor Unitário</th>
                                    <th>Valor</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a href="/produto.php"><img src="images/thumbnail/80x109/product004.jpg"></a></td>
                                    <td>Calça longa</td>
                                    <td>Calça longa com barras feitas a mão tingida </td>
                                    <td>
                                        <div class="qty quantity-adder pull-left">
                                            <div class="quantity-number pull-left">
                                                <input id="qty" class="input-text qty" type="text" title="Quantity" value="1" maxlength="12" name="qty">
                                            </div>
                                            <div class="quantity-wrapper pull-left">
                                                <span class="add-up add-action fa fa-plus"></span>
                                                <span class="add-down add-action fa fa-minus"></span>
                                            </div>

                                        </div>
                                    </td>
                                    <td>R$ 25,00</td>
                                    <td>R$ 25,00</td>
                                </tr>
                                <tr>
                                    <td><a href="/produto.php"><img src="images/thumbnail/80x109/product.jpg"></a></td>
                                    <td>Saia Calça</td>
                                    <td>Saia Calça com barras feitas a mão tingida </td>
                                    <td>
                                        <div class="qty quantity-adder pull-left">
                                            <div class="quantity-number pull-left">
                                                <input id="qty" class="input-text qty" type="text" title="Quantity" value="1" maxlength="12" name="qty">
                                            </div>
                                            <div class="quantity-wrapper pull-left">
                                                <span class="add-up add-action fa fa-plus"></span>
                                                <span class="add-down add-action fa fa-minus"></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>R$ 120,00</td>
                                    <td>R$ 240,00</td>
                                </tr>
                                <tr>
                                    <td><a href="/produto.php"><img src="images/thumbnail/80x109/product006.jpg"></a></td>
                                    <td>Saia Calça</td>
                                    <td>Saia Calça com barras feitas a mão tingida </td>
                                    <td>
                                        <div class="qty quantity-adder pull-left">
                                            <div class="quantity-number pull-left">
                                                <input id="qty" class="input-text qty" type="text" title="Quantity" value="1" maxlength="12" name="qty">
                                            </div>
                                            <div class="quantity-wrapper pull-left">
                                                <span class="add-up add-action fa fa-plus"></span>
                                                <span class="add-down add-action fa fa-minus"></span>
                                            </div>

                                        </div>
                                    </td>
                                    <td>R$ 120,00</td>
                                    <td>R$ 240,00</td>
                                </tr>
                                <tr>
                                    <td><a href="/produto.php"><img src="images/thumbnail/80x109/product006.jpg"></a></td>
                                    <td>Saia Calça</td>
                                    <td>Saia Calça com barras feitas a mão tingida </td>
                                    <td>
                                        <div class="qty quantity-adder pull-left">
                                            <div class="quantity-number pull-left">
                                                <input id="qty" class="input-text qty" type="text" title="Quantity" value="1" maxlength="12" name="qty">
                                            </div>
                                            <div class="quantity-wrapper pull-left">
                                                <span class="add-up add-action fa fa-plus"></span>
                                                <span class="add-down add-action fa fa-minus"></span>
                                            </div>

                                        </div>
                                    </td>
                                    <td>R$ 120,00</td>
                                    <td>R$ 240,00</td>
                                </tr>
                                 </tbody>
                            </table>
                        </div>
                    </div>
                    </form>
                </div>
        </div>
    </div>
    </section>


<?php include("footer.php");?>