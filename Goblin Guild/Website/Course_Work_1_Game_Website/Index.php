 <?php 
            include('global.php'); 
           head_output("Goblin Guild | Home");
           showstylesheet("/css/homepg.css");
           navbar_output("home");     
    ?>
                                            
                                          
                    <main>
                   
                   <!-- div for controls page section -->
                        <div class="rules_controls_container">
                            <section id="rultrols">
                                <h1 id="page_title_rules">Quest Information</h1>
                                
                                <div id="rule_contents">
                                    <section class="rules">
                                        <h3>Rules</h3>
                                        <p>The Goblin Guild has tasked you to loot the kings gold, Invade the castle and steal as much gold as you can, Dont trip over your bag of gold!</p>                           
                                    </section>
                                                        
                                    <section class="controls">
                                        <h3>Controls</h3>
                                        <p> 

                                            Key(Enter) - Start Game  
                                            <br>Key(W) - Move Up
                                            <br>Key(S) - Move Down
                                            <br>Key(D) - Move Right
                                            <br>Key(A) - Move Legt
                            
                                        
                                        </p>
                                        
                                    </section>       
                                </div>
                            </section>
                        </div>
                        
                        
                        <!-- Game Section -->
                        
                        <section class="main_content">  
                            <Div id="game_screen">
                                <h1>Grab the gold and mark the goblin camps</h1>
                                <!-- using canvas for where the game goes -->
                                <canvas id="game" width="600" height="600"></canvas> 
                            </div>
                            
                        </section>
                        
                        
                        <script src="/JavaScript/Game.js"></script>
                        
                    </main>
                        
    
    
    <?php 
      
      footer_output()         
    
    ?>             