<?php 
session_start();
if (isset($_SESSION['auth'])) {
    $_SESSION['flag'] = 2;
    $_SESSION['message'] = "You are aldready logged in";
    header("Location: index.php");
    exit(0);
}
include('includes/header.php');
?>

<div class="py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <?php include('message.php')?>
                <div class="card">
                    <div class="card-header">
                        <div class="text-center">
                            <h4>Register</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="registercode.php" method="POST" class="">
                            <div class="form-group mb-3">
                                <label for="name">Name</label>
                                <input required type="name" placeholder="Enter Name" class = "form-control" name="name">
                            </div>
                            <div class="form-group mb-3">
                                <label for="email">Email</label>
                                <input required type="email" placeholder="Enter Email" class = "form-control" name="email">
                            </div>
                            <div class="form-group mb-3">
                                <label for="password">Password</label>
                                <input required type="password" placeholder="Enter Password" class = "form-control" name="password">
                            </div>
                            <div class="form-group mb-3">
                                <label for="password">Confirm Password</label>
                                <input required type="password" placeholder="Enter Confirm Password" class = "form-control" name="cpassword">
                            </div>
                            <div class="form-group text-center">
                                <button class="btn btn-primary" name = "register_btn" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <p class="text-center">Already have an account? <a href="login.php">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
include('includes/footer.php');
?>