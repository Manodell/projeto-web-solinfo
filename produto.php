<?php include("header.php"); ?>
    <section id="columns">
    <div class="container">
    <div class="row">
    <section class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div id="content">
    <div class="product-view product-info">

    <div class="product-essential row">

    <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 image-container product-img-box">

        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 no-padding">
            <div id="image-additional" class="image-additional slide carousel vertical more-views">
                <div class="carousel-inner" id="image-gallery-zoom">
                    <div class="item  ">

                        <a href="images/thumbnail/product.jpg"
                           title="" class="colorbox cboxElement"
                           data-zoom-image="images/thumbnail/product.jpg"
                           data-image="images/thumbnail/400x545/product.jpg">
                            <img src="images/thumbnail/80x109/product.jpg"
                                 title="" alt=""
                                 data-zoom-image="images/thumbnail/product.jpg"
                                 class="product-image-zoom img-responsive">
                        </a>

                        <a href="images/thumbnail/product002.jpg"
                           title="" class="colorbox cboxElement"
                           data-zoom-image="images/thumbnail/product002.jpg"
                           data-image="images/thumbnail/400x545/product002.jpg">
                            <img src="images/thumbnail/80x109/product002.jpg"
                                 title="" alt=""
                                 data-zoom-image="images/thumbnail/product002.jpg"
                                 class="product-image-zoom img-responsive">
                        </a>

                        <a href="images/thumbnail/product005.jpg"
                           title="" class="colorbox cboxElement"
                           data-zoom-image="images/thumbnail/product005.jpg"
                           data-image="images/thumbnail/400x545/product005.jpg">
                            <img src="images/thumbnail/80x109/product005.jpg"
                                 title="" alt=""
                                 data-zoom-image="images/thumbnail/product005.jpg"
                                 class="product-image-zoom img-responsive">
                        </a>

                        <a href="images/thumbnail/product013_3.jpg"
                           title="" class="colorbox cboxElement"
                           data-zoom-image="images/thumbnail/product013_3.jpg"
                           data-image="images/thumbnail/400x545/product013_3.jpg">
                            <img src="images/thumbnail/80x109/product013_3.jpg"
                                 title="" alt=""
                                 data-zoom-image="images/thumbnail/product013_3.jpg"
                                 class="product-image-zoom img-responsive">
                        </a>
                    </div>
                    <div class="item ">

                        <a href="images/thumbnail/product006.jpg"
                           title="" class="colorbox cboxElement"
                           data-zoom-image="images/thumbnail/product006.jpg"
                           data-image="images/thumbnail/400x545/product006.jpg">
                            <img src="images/thumbnail/80x109/product006.jpg"
                                 title="" alt=""
                                 data-zoom-image="images/thumbnail/product006.jpg"
                                 class="product-image-zoom img-responsive">
                        </a>

                        <a href="images/thumbnail/product002.jpg"
                           title="" class="colorbox cboxElement"
                           data-zoom-image="images/thumbnail/product002.jpg"
                           data-image="images/thumbnail/400x545/product002.jpg">
                            <img src="images/thumbnail/80x109/product002.jpg"
                                 title="" alt=""
                                 data-zoom-image="images/thumbnail/product002.jpg"
                                 class="product-image-zoom img-responsive">
                        </a>
                    </div>
                </div>
                <div class="carousel-control left" href="#image-additional" data-slide="prev"><i
                        class="fa fa-angle-up"></i></div>
                <div class="carousel-control right" href="#image-additional" data-slide="next"><i
                        class="fa fa-angle-down"></i></div>
            </div>
            <script type="text/javascript">
                jQuery('#image-additional .item:first').addClass('active');
                jQuery('#image-additional').carousel({interval: false})
            </script>
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 no-padding">
            <div class="image">
                <a class="colorbox cboxElement"
                   href="images/thumbnail/product.jpg">
                    <img id="image"
                         class="product-image-zoom img-responsive"
                         data-zoom-image="images/thumbnail/product.jpg"
                         title="Dolore magna aliqua aiusmod tempor incididu"
                         alt="Dolore magna aliqua aiusmod tempor incididu"
                         src="images/thumbnail/400x545/product.jpg">
                </a>
            </div>
        </div>
        <script type="text/javascript" src="js/elevatezoom-min.js"></script>
        <script type="text/javascript">
            jQuery("#image").elevateZoom({
                gallery:'image-additional',
                cursor: 'pointer',
                lensShape : "basic",
                lensSize    : 150,
                galleryActiveClass: 'active'});

        </script>

        <script type="text/javascript"><!--
            jQuery(document).ready(function() {
                jQuery('.colorbox').colorbox({
                    width: '500',
                    height: '500',
                    overlayClose: true,
                    opacity: 0.5,
                    rel: "colorbox"
                });
                jQuery('#image-gallery-zoom').find("a").click(function(){
                    if(jQuery(".product-img-box .image a").length > 0) {
                        var image_link = jQuery(this).attr("href");
                        jQuery(".product-img-box .image a").attr("href", image_link);
                    }
                })
            });
            //--></script>


    </div>

    <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 product-shop product-view">
        <h1 itemprop="name">Nome do Produto em Oferta</h1>
        <form>

        <div class="description" itemprop="description">
            <div class="short-description">
                <h2>Visualização Rapida</h2>

                <div class="std">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>


        </div>

        <div itemtype="http://schema.org/Offer" itemscope="" class="price">

            <p class="availability in-stock">Disponibilidade: <span>Em estoque</span></p>


            <div class="price-box">

                <p class="old-price">
                    <span class="price-label">Preço regular:</span>
                <span class="price" id="old-price-9">
                    R$ 250.00                </span>
                </p>

                <p class="special-price">
                    <span class="price-label">Preço especial</span>
                <span class="price" id="product-price-9">
                    R$ 240.00                </span>
                </p>
            </div>
        </div>


        <div class="product-extra">
            <div class="add-to-box">
                <div class="qty quantity-adder pull-left">
                    <div class="quantity-number pull-left">
                        <label for="qty">QUANT:</label>

                            <input id="qty" class="input-text qty" type="text" title="Quantity" value="1" maxlength="12" name="qty">
                    </div>
                    <div class="quantity-wrapper pull-left">
                        <span class="add-up add-action fa fa-plus"></span>
                        <span class="add-down add-action fa fa-minus"></span>
                    </div>

                </div>
                <div class="add-to-cart pull-left">
                    <button type="button" title="Adicionar a sacola/carrinho"
                            class="btn button btn-cart"
                        <span>
                            <span><i class="fa fa-shopping-cart "> </i>Comprar
                            </span>
                        </span>
                    </button>
                </div>


                <div class="add-to-links action pull-left">
                    <div>
                        <a href="listadesejo.php"
                           title="Lista de desejos"
                           class="wishlist btn"><i class="fa fa-heart">
                           </i>
                        </a>
                    </div>
                    <div>
                        <a href="carrinho.php"
                           title="Sacola de compras"
                           class="wishlist btn"><i class="fa open_bag_produto"><img src="images/open_bag.png"/>

                            </i>
                        </a>
                    </div>

                </div>
            </div>
        </div>


        </form>
    </div>




    </div>
    </div>

    </div>

    </div>
    </div>
    </section>
    <section id="columns">
    <div class="container">
    <div class="row">
    <section class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div id="content">
    <div class=" block productcarousel" id="module5707280431419958629">
    <div class="block-title">
        <h3>Produtos em Ofertas</h3>

        <div class="pretext"></div>
    </div>
    <div class="block-content">
    <div class="box-products carousel" id="productcarousel5707280431419958629">
    <div class="carousel-inner">

    <div class="item first active product-grid no-margin">

    <div class="row products-row">

    <div class="col-xs-12 col-lg-3 col-sm-6 col-6 _item first ">
        <div class="wrap-item">
            <div class="product-block">
                <div class="image ">
                    <div class="product-img img">
                        <a href="produto.php"
                           title="Detalhes do produto" class="product-image img">


                            <img class="img-responsive"
                                 src="images/product001.jpg"
                                 width="279" height="380" alt="Detalhes do produto"/>

                        </a>


                    </div>
                    <div class="action">
                        <div class="add-to-cart">
                            <button type="button" title="Comprar" class="btn btn-cart"
                                    onclick="addToCart('Produto')">
                                <span>Comprar</span></button>

                        </div>
                        <div class="add-to-link">
                            <a class="a-quickview ves-colorbox" title="Visualização rapida"
                               href="produto.php"><i
                                    class="fa fa-eye"></i><span>Visualização rapida </span></a>

                            <a href="carrinho.php"
                               title="Lista de desejos" class="link-wishlist"><i class="fa fa-heart"></i></a>

                        </div>
                    </div>
                </div>


                <div class="product-meta product-shop">

                    <h3 class="product-name name"><a
                            href="produto.php"
                            title="Exercitationem ullam corporis suscipit">Vestido casual talls</a></h3>

                    <div class="price">


                        <div class="price-box">

                            <p class="old-price">
                                <span class="price-label">Preço Regular:</span>
                <span class="price" id="old-price-1_product_carousel_1_5707280431419958629">
                    R$120.00                </span>
                            </p>

                            <p class="special-price">
                                <span class="price-label">Preço Especial</span>
                <span class="price" id="product-price-1_product_carousel_1_5707280431419958629">
                    R$110.00                </span>
                            </p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>


    <div class="col-xs-12 col-lg-3 col-sm-6 col-6 _item product-col  ">
        <div class="wrap-item">
            <div class="product-block">
                <div class="image ">
                    <div class="product-img img">
                        <a href="produto.php"
                           title="Detalhes do produto" class="product-image img">


                            <img class="img-responsive"
                                 src="images/product006_1.jpg"
                                 width="279" height="380" alt="Detalhes do produto"/>

                        </a>


                    </div>
                    <div class="action">
                        <div class="add-to-cart">
                            <button type="button" title="Comprar" class="btn btn-cart"
                                    onclick="addToCart('Produto')">
                                <span>Comprar</span></button>

                        </div>
                        <div class="add-to-link">
                            <a class="a-quickview ves-colorbox" title="Visualização rapida"
                               href="produto.php"><i
                                    class="fa fa-eye"></i><span>Visualização rapida </span></a>

                            <a href="carrinho.php"
                               title="Lista de desejos" class="link-wishlist"><i class="fa fa-heart"></i></a>

                        </div>
                    </div>
                </div>


                <div class="product-meta product-shop">

                    <h3 class="product-name name"><a
                            href="produto.php"
                            title="Exercitationem ullam corporis suscipit">Vestido casual talls</a></h3>

                    <div class="price">


                        <div class="price-box">

                            <p class="old-price">
                                <span class="price-label">Preço Regular:</span>
                <span class="price" id="old-price-1_product_carousel_1_5707280431419958629">
                    R$120.00                </span>
                            </p>

                            <p class="special-price">
                                <span class="price-label">Preço Especial</span>
                <span class="price" id="product-price-1_product_carousel_1_5707280431419958629">
                    R$110.00                </span>
                            </p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>


    <div class="col-xs-12 col-lg-3 col-sm-6 col-6 _item product-col  ">
        <div class="wrap-item">
            <div class="product-block">
                <div class="image ">
                    <div class="product-img img">
                        <a href="produto.php"
                           title="Detalhes do produto" class="product-image img">


                            <img class="img-responsive"
                                 src="images/product001.jpg"
                                 width="279" height="380" alt="Detalhes do produto"/>

                        </a>


                    </div>
                    <div class="action">
                        <div class="add-to-cart">
                            <button type="button" title="Comprar" class="btn btn-cart"
                                    onclick="addToCart('Produto')">
                                <span>Comprar</span></button>

                        </div>
                        <div class="add-to-link">
                            <a class="a-quickview ves-colorbox" title="Visualização rapida"
                               href="produto.php"><i
                                    class="fa fa-eye"></i><span>Visualização rapida </span></a>

                            <a href="carrinho.php"
                               title="Lista de desejos" class="link-wishlist"><i class="fa fa-heart"></i></a>

                        </div>
                    </div>
                </div>


                <div class="product-meta product-shop">

                    <h3 class="product-name name"><a
                            href="produto.php"
                            title="Exercitationem ullam corporis suscipit">Vestido casual talls</a></h3>

                    <div class="price">


                        <div class="price-box">

                            <p class="old-price">
                                <span class="price-label">Preço Regular:</span>
                <span class="price" id="old-price-1_product_carousel_1_5707280431419958629">
                    R$120.00                </span>
                            </p>

                            <p class="special-price">
                                <span class="price-label">Preço Especial</span>
                <span class="price" id="product-price-1_product_carousel_1_5707280431419958629">
                    R$110.00                </span>
                            </p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="col-xs-12 col-lg-3 col-sm-6 col-6 _item last product-col  ">
        <div class="wrap-item">
            <div class="product-block">
                <div class="image ">
                    <div class="product-img img">
                        <a href="produto.php"
                           title="Detalhes do produto" class="product-image img">


                            <img class="img-responsive"
                                 src="images/product001.jpg"
                                 width="279" height="380" alt="Detalhes do produto"/>

                        </a>


                    </div>
                    <div class="action">
                        <div class="add-to-cart">
                            <button type="button" title="Comprar" class="btn btn-cart">
                                <span>Comprar</span></button>

                        </div>
                        <div class="add-to-link">
                            <a class="a-quickview ves-colorbox" title="Visualização rapida"
                               href="produto.php"><i
                                    class="fa fa-eye"></i><span>Visualização rapida </span></a>

                            <a href="carrinho.php"
                               title="Lista de desejos" class="link-wishlist"><i class="fa fa-heart"></i></a>

                        </div>
                    </div>
                </div>


                <div class="product-meta product-shop">

                    <h3 class="product-name name"><a
                            href="produto.php"
                            title="Exercitationem ullam corporis suscipit">Vestido casual talls</a></h3>

                    <div class="price">


                        <div class="price-box">

                            <p class="old-price">
                                <span class="price-label">Preço Regular:</span>
                <span class="price" id="old-price-1_product_carousel_1_5707280431419958629">
                    R$120.00                </span>
                            </p>

                            <p class="special-price">
                                <span class="price-label">Preço Especial</span>
                <span class="price" id="product-price-1_product_carousel_1_5707280431419958629">
                    R$110.00                </span>
                            </p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>



    </div>

    </div>

    </div>
    </div>
    </div>
    </div>

    <div class="productcarousel2 block productcarousel" id="module670609331419958630">
    <div class="block-title">
        <h3>MAIS VISTOS</h3>

        <div class="pretext"></div>
    </div>
    <div class="block-content">
    <div class="box-products carousel" id="productcarousel2670609331419958630">
    <div class="carousel-inner">

    <div class="item first active product-grid no-margin">

    <div class="row products-row">

    <div class="col-xs-12 col-lg-3 col-sm-6 col-6 _item first ">
        <div class="wrap-item">
            <div class="product-block block2">
                <div class="image ">
                    <div class="product-img img">
                        <a href="produto.php"
                           title="Detalhes do produto" class="product-image img">


                            <img class="img-responsive"
                                 src="images/product001.jpg"
                                 width="279" height="380" alt="Detalhes do produto"/>

                        </a>


                    </div>
                    <div class="action">
                        <div class="add-to-cart">
                            <button type="button" title="Comprar" class="btn btn-cart">
                                <span>Comprar</span></button>

                        </div>
                        <div class="add-to-link">
                            <a class="a-quickview ves-colorbox" title="Visualização rapida"
                               href="produto.php"><i
                                    class="fa fa-eye"></i><span>Visualização rapida </span></a>

                            <a href="carrinho.php"
                               title="Lista de desejos" class="link-wishlist"><i class="fa fa-heart"></i></a>

                        </div>
                    </div>
                </div>


                <div class="product-meta product-shop">

                    <h3 class="product-name name"><a
                            href="produto.php"
                            title="Exercitationem ullam corporis suscipit">Vestido casual talls</a></h3>

                    <div class="price">


                        <div class="price-box">

                            <p class="old-price">
                                <span class="price-label">Preço Regular:</span>
                <span class="price" id="old-price-1_product_carousel_1_5707280431419958629">
                    R$120.00                </span>
                            </p>

                            <p class="special-price">
                                <span class="price-label">Preço Especial</span>
                <span class="price" id="product-price-1_product_carousel_1_5707280431419958629">
                    R$110.00                </span>
                            </p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>


    <div class="col-xs-12 col-lg-3 col-sm-6 col-6 _item product-col  ">
        <div class="wrap-item">
            <div class="product-block block2">
                <div class="image ">
                    <div class="product-img img">
                        <a href="produto.php"
                           title="Detalhes do produto" class="product-image img">


                            <img class="img-responsive"
                                 src="images/product006_1.jpg"
                                 width="279" height="380" alt="Detalhes do produto"/>

                        </a>


                    </div>
                    <div class="action">
                        <div class="add-to-cart">
                            <button type="button" title="Comprar" class="btn btn-cart"
                                    onclick="addToCart('Produto')">
                                <span>Comprar</span></button>

                        </div>
                        <div class="add-to-link">
                            <a class="a-quickview ves-colorbox" title="Visualização rapida"
                               href="produto.php"><i
                                    class="fa fa-eye"></i><span>Visualização rapida </span></a>

                            <a href="carrinho.php"
                               title="Lista de desejos" class="link-wishlist"><i class="fa fa-heart"></i></a>

                        </div>
                    </div>
                </div>


                <div class="product-meta product-shop">

                    <h3 class="product-name name"><a
                            href="produto.php"
                            title="Exercitationem ullam corporis suscipit">Vestido casual talls</a></h3>

                    <div class="price">


                        <div class="price-box">

                            <p class="old-price">
                                <span class="price-label">Preço Regular:</span>
                <span class="price" id="old-price-1_product_carousel_1_5707280431419958629">
                    R$120.00                </span>
                            </p>

                            <p class="special-price">
                                <span class="price-label">Preço Especial</span>
                <span class="price" id="product-price-1_product_carousel_1_5707280431419958629">
                    R$110.00                </span>
                            </p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>


    <div class="col-xs-12 col-lg-3 col-sm-6 col-6 _item product-col  ">
        <div class="wrap-item">
            <div class="product-block block2">
                <div class="image ">
                    <div class="product-img img">
                        <a href="produto.php"
                           title="Detalhes do produto" class="product-image img">


                            <img class="img-responsive"
                                 src="images/product006_1.jpg"
                                 width="279" height="380" alt="Detalhes do produto"/>

                        </a>


                    </div>
                    <div class="action">
                        <div class="add-to-cart">
                            <button type="button" title="Comprar" class="btn btn-cart">
                                <span>Comprar</span></button>

                        </div>
                        <div class="add-to-link">
                            <a class="a-quickview ves-colorbox" title="Visualização rapida"
                               href="produto.php"><i
                                    class="fa fa-eye"></i><span>Visualização rapida </span></a>

                            <a href="carrinho.php"
                               title="Lista de desejos" class="link-wishlist"><i class="fa fa-heart"></i></a>

                        </div>
                    </div>
                </div>


                <div class="product-meta product-shop">

                    <h3 class="product-name name"><a
                            href="produto.php"
                            title="Exercitationem ullam corporis suscipit">Vestido casual talls</a></h3>

                    <div class="price">


                        <div class="price-box">

                            <p class="old-price">
                                <span class="price-label">Preço Regular:</span>
                <span class="price" id="old-price-1_product_carousel_1_5707280431419958629">
                    R$120.00                </span>
                            </p>

                            <p class="special-price">
                                <span class="price-label">Preço Especial</span>
                <span class="price" id="product-price-1_product_carousel_1_5707280431419958629">
                    R$110.00                </span>
                            </p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>


    <div class="col-xs-12 col-lg-3 col-sm-6 col-6 _item last product-col  ">
        <div class="wrap-item">
            <div class="product-block block2">
                <div class="image ">
                    <div class="product-img img">
                        <a href="produto.php"
                           title="Detalhes do produto" class="product-image img">


                            <img class="img-responsive"
                                 src="images/product001.jpg"
                                 width="279" height="380" alt="Detalhes do produto"/>

                        </a>


                    </div>
                    <div class="action">
                        <div class="add-to-cart">
                            <button type="button" title="Comprar" class="btn btn-cart"
                                    onclick="addToCart('Produto')">
                                <span>Comprar</span></button>

                        </div>
                        <div class="add-to-link">
                            <a class="a-quickview ves-colorbox" title="Visualização rapida"
                               href="produto.php"><i
                                    class="fa fa-eye"></i><span>Visualização rapida </span></a>

                            <a href="carrinho.php"
                               title="Lista de desejos" class="link-wishlist"><i class="fa fa-heart"></i></a>

                        </div>
                    </div>
                </div>


                <div class="product-meta product-shop">

                    <h3 class="product-name name"><a
                            href="produto.php"
                            title="Exercitationem ullam corporis suscipit">Vestido casual talls</a></h3>

                    <div class="price">


                        <div class="price-box">

                            <p class="old-price">
                                <span class="price-label">Preço Regular:</span>
                <span class="price" id="old-price-1_product_carousel_1_5707280431419958629">
                    R$120.00                </span>
                            </p>

                            <p class="special-price">
                                <span class="price-label">Preço Especial</span>
                <span class="price" id="product-price-1_product_carousel_1_5707280431419958629">
                    R$110.00                </span>
                            </p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>


    </div>

    </div>


    </div>
    </div>
    </div>
    </div>


    </div>
    </section>
    </div>
    </div>
    </section>
<?php include("footer.php"); ?>