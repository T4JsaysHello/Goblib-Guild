<!-- where all duplicate html codes are created into functions -->


<?php
// Prints the head of a html page and registering the title of a page
function head_output($pg_title){
    
    
    
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo '<title>' . $pg_title . '</title>';
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" type="text/css" href="/css/global.css">';
    echo '<link rel="shortcut icon" href="/Image_Gallery/2210129.png" type="image/x-icon">';


}

// All pages have a global and individual style sheet, this makes it so the individual style sheet is 
// Printed for their own respectice stylesheets.
function showstylesheet($page_style){
    
     
    
    $style_adress = array("/css/homepg.css", "/css/Leaderboard.css", "/css/myAccount.css");

    for ($y = 0; $y < count($style_adress); $y++){
        if($style_adress[$y] == $page_style){
            echo '<link rel="stylesheet" type="text/css" href="' . $style_adress[$y] . '">';
        }
    }
    echo '</head>';
    echo '<body>';

}

// prints navbar for each webpage

    function navbar_output($page_name){
        
        
        echo '<div class="Web_Container">';
        echo '<div class="img_Container">';
        echo '<div class="header_content">';                      
        echo '<header>';
        echo '<nav>';
        echo '<div id="logo">';
        echo '<h1>Goblin Guild</h1>';
        echo '</div>';
        echo '<ul class="nav_tabs">';

    

        $pg_index = array("home", "Leaderboard", "myAccount");
        $pg_adress = array("Index.php", "Leader.php", "myAccount.php");
    
        

    
        for($x = 0; $x < count($pg_index); $x++){
            echo '<li> ';
            echo '<a ';
            
            //allows global style on current page that is opened up

            if($pg_index[$x] == $page_name ){
                echo 'class = "current_tab"';
            }

           

            echo 'href="' . $pg_adress[$x] . '">' . $pg_index[$x] . '</a>' . '</li>';
        }
    
        
        
        echo '</ul>';
        echo '</nav>';
        echo '</header>';

       
       // My index page has a special code in between "header_content". This function produces that for it soley
       
        if ($pg_index[0] == $page_name){
        
      
      
      echo  '<div class="quest_request">';
      echo  '<h2>Help Wanted!</h2>';
        
      echo  '<p>Join the raid, if you dare</p>';
        
      echo  '<div class="home_button">';
      echo  '<a href="#game_screen"><button id="quest_accepted"><h3>Accept Quest</h3></button></a>';
      echo  '<a href="#rultrols"><button id="quest_info"><h3>Quest Information</h3></button></a>';
      echo  '</div>';
         }

        echo '</div>';
        
    }


//Outputs closing body tag and closing HTML tag
function footer_output(){
    echo '</div>';
    echo '</div>';
    echo '</body>';
    echo '</html>';
    
}