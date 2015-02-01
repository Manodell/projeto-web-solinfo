<?php include("header.php");?>
    <section>
    <div class="container">
    <div class="row">
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-4 sidebar">
        <ul class="nav nav-sidebar"><br/>
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
        <div class="row contato">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-6">
                <h3>Envie sua Mensagem</h3>
                <form name="sentMessage" id="contactForm" novalidate>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Name completo:</label>
                            <input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name.">
                            <p class="help-block"></p>
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Numéro telefone:</label>
                            <input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number.">
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Email:</label>
                            <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address.">
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Mensagem:</label>
                            <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
                        </div>
                    </div>
                    <div id="success"></div>
                    <!-- For success/fail messages -->
                    <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
                </form>
            </div>

        </div>
    </div>
    </div>
    </section>
<?php include("footer.php");?>