<?php 
            include('global.php'); 
           head_output("Goblin Guild | Leaderboard");
           showstylesheet("/css/Leaderboard.css");
           navbar_output("Leaderboard");     
    ?>        
        
        
        <main>
            
                <div class="tableStyle">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Points</th>
                        </tr>
                        </thead>
                        <tbody id="tableData"></tbody>

                    </table> 
                </div> 
                                

                <script src="/JavaScript/HsStorage.js"></script>
        </main>
    
    
    <?php 
      
      footer_output()         
    
    ?>  