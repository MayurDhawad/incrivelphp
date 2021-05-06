<?php   include_once  "header.php";  ?>

    <section id="careers" class="careers-bg">
        <div class="container section" id="alljobs">
           <div class="text-center content-text">
                <h3 class="text-secondary">Apply Here</h3>
           </div>

            <div class="row">
                <div class="col-6 mx-auto">
                    <div class="card mt-5 shadow border-0">
                        <div class="card-body">
                            <form action="/action_page.php">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="name" class="form-control" placeholder="Enter Name">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" placeholder="Enter Email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Enter Password">
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Select list:</label>
                                    <select class="form-control" id="sel1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                  </div>
                                <div class="form-group">
                                    <label for="comment">Comment:</label>
                                    <textarea class="form-control" rows="5" id="comment"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                              </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php  include_once "footer.php"; ?>