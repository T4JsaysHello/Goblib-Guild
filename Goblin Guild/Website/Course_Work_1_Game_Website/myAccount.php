<?php 
            include('global.php'); 
           head_output("Goblin Guild | myAccount");
           showstylesheet("/css/myAccount.css");
           navbar_output("myAccount");     
    ?>        
        
        
        <main id="loggedPara">
            <div class="main_container">
            <div class="form_container">
                <!-- Login form -->
                <section class="login_content">
                    <h1>Log In</h1>
                    <form class="myAccount_form">
                       <p class="imput_label">User Name <input type="text" id="Usrinput" class="input_box" placeholder="Enter Username"></p>
                       <p class="imput_label">Password <input type="password" id="Passinput" class="input_box" placeholder="Enter Password"></p>
                       <input type="button" onclick="login()" class="submit_button" value="Log In">
                       <p id="CheckLog"></p>
                    </form>
                        
                
                </section>
            </div>



            <!-- register form -->
            <div class="form_container">
                <section class="register_content">
                    <h1>Register</h1>
                    <form class="register_form">
                       <p class="imput_label">User Name <input type="text" id="usrInput" class="input_box" placeholder="Create UserName"></p>
                       <p class="imput_label">Email<input type="email" id="emailInput" class="input_box" placeholder="Enter Email"></p>
                       <p class="imput_label">Password <input type="password" id="passInput" class="input_box" placeholder="Create Password"></p>
                       <p class="imput_label">Confirm Password <input type="password" id="repassInput" class="input_box" placeholder="Re-Enter Password"></p>
                       <input type="button" onclick="storeUser()" class="submit_button" value="Register">
                       <p id="Result"></p>
                    </form>
                </section>
            </div>
            </div>
            <script src="/JavaScript/storage.Js"></script>
        </main>
    
    
    <?php 
      
      footer_output()         
    
    ?>  