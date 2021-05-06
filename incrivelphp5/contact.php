
<?php   
$meta_title = 'Contact | Incrivel Technologies';
include_once  "header.php";  ?>

    <section id="contact" class="contact-bg-color">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <div class="main-text">
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
        <div class="container section" data-aos="fade-up">
          <div class="row" data-aos="fade-up" data-aos-delay="100">
  
            <div class="col-lg-6">
  
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <i class="bi bi-map"></i>
                    <h3>Our Address</h3>
                    <p>
                        8-2-686/8/B/1, 4th Floor,<br>
                        Mansingh Square, Rd Number 12,<br>
                        Venkateswara Colony, Banjara Hills,<br>
                        Hyderabad, Telangana 500034
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>info@incriveltech.com</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bi bi-phone"></i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55<br>+1 6678 254445 41</p>
                  </div>
                </div>
              </div>
  
            </div>
  
            <div class="col-12 col-md-6 col-lg-6 my-auto">
                <form action="" method="post"  role="form" class="php-email-form" >
			  
                <p id="successmessage" style="color:green;font-size:20px;text-align:center;font-weight:bold;"></p>
                <p id="errormessage" style="color:red;font-size:20px;text-align:center;font-weight:bold;"></p>

                <div class="row">
                    <div class="col-12 col-sm-6">
                        <input type="text" name="name" class="form-control" id="username" name="username" placeholder="*Your Name"  />
                        <div class="validate"></div>
                    </div>

                    <div class="col-12 col-sm-6">
                        <input type="email" class="form-control" id="email" placeholder="*Your Email"  />
                        <div class="validate"></div>
                    </div>

                    <div class="col-12 col-sm-6">
                        <input type="text" id="company" name="company" class="form-control" id="organization" placeholder="*Your Organization" />
                        <div class="validate"></div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="*Phone"  />
                        <div class="validate"></div>
                    </div>
                </div>
               
                  <div class="">
                      <textarea class="form-control mb-3" name="message" id="message" rows="5"  placeholder="*Message"></textarea>
                      <div class="validate"></div>
                  </div>

                <div class="text-center">
                  <button type="submit" name="contactsubmit" id="contactsubmit">Send Query</button>
                </div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section><!-- End Contact Section -->

   <?php  include_once "footer.php"; ?>