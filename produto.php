<?php include("header.php");?>
<section>
<div class="container">
<div class="row">
<div class="col-lg-2 col-md-2 col-sm-2 col-xs-3 sidebar">
    <ul class="nav nav-sidebar"><br />
        <li class="active">
            <a href="#">
                Calças
                <span class="sr-only">(current)</span>
            </a>
        </li>
        <li>
            <a href="#">Reports</a>
        </li>
        <li>
            <a href="#">Reports</a>
        </li>
    </ul>
    <ul class="banner-nav-sidebar">
        <li><a href="#" title="banner" alt="banner"><img src="images/product007.jpg"></a></li>
        <li><a href="#" title="banner" alt="banner"><img src="images/product007.jpg"></a></li>
        <li><a href="#" title="banner" alt="banner"><img src="images/product007.jpg"></a></li>
    </ul>
</div>


<div  class="col-lg-10 col-md-10 col-sm-10 col-xs-9 produto-show">
<div id="content">


<div class="product-view product-info">

<div class="product-essential row">
<form action=""
      method="post" id="product_addtocart_form">
<input name="form_key" type="hidden" value=""/>

<div class="no-display">
    <input type="hidden" name="product" value="1"/>
    <input type="hidden" name="related_product" id="related-products-field" value=""/>
</div>

<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 image-container product-img-box">

    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 no-padding">
        <div id="image-additional" class="image-additional slide carousel vertical more-views">
            <div class="carousel-inner" id="image-gallery-zoom">
                <div class="item ">

                    <a href="images/product007.jpg"
                       title="" class="colorbox"
                       data-zoom-image="images/thumbnail/product006.jpg"
                       data-image="images/thumbnail/400x545/product006.jpg">
                        <!-- imagem miniatura-->
                        <img src="images/thumbnail/80x109/product006.jpg"
                             title="" alt=""
                             data-zoom-image="images/thumbnail/product006.jpg"
                             class="product-image-zoom img-responsive"/>

                    </a>

                    <a href="images/thumbnail/product004.jpg"
                       title="" class="colorbox"
                       data-zoom-image="images/thumbnail/product004.jpg"
                       data-image="images/thumbnail/400x545/product004.jpg">
                        <img src="images/thumbnail/80x109/product004.jpg"
                             title="" alt=""
                             data-zoom-image="images/thumbnail/product004.jpg"
                             class="product-image-zoom img-responsive"/>
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
               <!-- aqui vai a imagem do produto que foi chamado-->
            <a href="images/product001.jpg"
               title="Titulo" class="colorbox">
                <img id="image"
                     src="images/product001.jpg"
                     alt="" title=""
                     data-zoom-image="images/thumbnail/400x545/product004.jpg"
                     class="product-image-zoom img-responsive"/> </a>
        </div>
    </div>

    <script type="text/javascript"
            src="js/elevatezoom-min.js"></script>
    <script type="text/javascript">
        jQuery("#image").elevateZoom({
            gallery: 'image-additional',
            cursor: 'pointer',
            lensShape: "basic",
            lensSize: 150,
            galleryActiveClass: 'active'});

    </script>

    <script type="text/javascript"><!--64
    jQuery(document).ready(function () {
        jQuery('.colorbox').colorbox({
            width: '500',
            height: '500',
            overlayClose: true,
            opacity: 0.5,
            rel: "colorbox"
        });
        jQuery('#image-gallery-zoom').find("a").click(function () {
            if (jQuery(".product-img-box .image a").length > 0) {
                var image_link = jQuery(this).attr("href");
                jQuery(".product-img-box .image a").attr("href", image_link);
            }
        })
    });
    //--></script>
</div>
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 product-shop product-view">
    <h1 itemprop="name">Nome do Produto esposto</h1>


    <div class="description" itemprop="description">
        <div class="short-description">
            <h2>Visão Rápida</h2>

            <div class="std"> Aqui vai texto referente ao produto.
            </div>
        </div>


    </div>

    <div  class="price">

        <p class="availability in-stock">Disponivel: <span>em estoque</span></p>


        <div class="price-box">

            <p class="old-price">
                <span class="price-label">
                    Preço Regular:
                </span>
                <span class="price" id="old-price-1">
                    R$ 120.00
                </span>
            </p>

            <p class="special-price">
                <span class="price-label">
                    Preço Especial
                </span>
                <span class="price" id="product-price-1">
                    R$ 110.00
                </span>
            </p>


        </div>


    </div>


    <div class="product-extra">
        <div class="add-to-box">
            <div class="qty quantity-adder pull-left">
                <div class="quantity-number pull-left">
                    <label for="qty">Quant:</label>
                    <input type="text" name="qty" id="qty" maxlength="12" value="1" title="Quantidade"
                           class="input-text qty"/>
                </div>

                <div class="quantity-wrapper pull-left">
                    <span class="add-up add-action fa fa-plus"></span>
                    <span class="add-down add-action fa fa-minus"></span>
                </div>
            </div>
            <div class="add-to-cart pull-left">
                <button type="button" title="Comprar" class="btn button btn-cart">
                    <span>
                        <span>
                            <i class="fa fa-shopping-cart "> </i>Comprar
                        </span>
                    </span>
                </button>
            </div>


            <div class="add-to-links action pull-left">
                <div>
                    <a href="#" title="Lista de desejos" class="wishlist btn">
                        <i class="fa fa-heart"></i>
                    </a>
                </div>
                <div class="icon-cart">
                    <a href="carrinho.php"
                       title="Sacola de compras" class="compare btn"><img title="Sacola de compras" alt="Sacola de compras" src="images/open_bag.png" /></a></div>

            </div>
        </div>
    </div>


</div>
</form>

</div>
</div>



<!-- Carousel -->

<script type="text/javascript">
    jQuery('.carousel').carousel({
        interval: 6000, auto: true, pause: 'hover', cycle: true
    });
</script>


<script type="text/javascript">
    jQuery('#tabs a').tabs();
</script>

<script type="text/javascript">
    var lifetime = 3600;
    var expireAt = Mage.Cookies.expires;
    if (lifetime > 0) {
        expireAt = new Date();
        expireAt.setTime(expireAt.getTime() + lifetime * 1000);
    }
    Mage.Cookies.set('external_no_cache', 1, expireAt);
</script>
</div>
</section>
</div>


</div>
</div>
</section>
<?php include("footer.php");?>