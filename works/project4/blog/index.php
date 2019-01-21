<?php require("includes/config.php"); ?>

<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<title>The Smart Miller</title>
		<link href="style/style.css" type="text/css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&amp;subset=latin-ext" rel="stylesheet">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
	</head>
	
	<body>
	
		<div id="blog">
			<div class="headerBlog">
			
				<div id="wrapper">
					<a href="index.html" target="_blank"><img src="../images/logo.png"  class="logoBlog"></a>
					
					<p class="social"><strong>Agrosocial networks: 
					<a href="#" target="_blank"></strong><i class="fab fa-facebook-square fb"></i></a>
					<a href="#" target="_blank"></strong><i class="fab fa-twitter-square tw"></i></a>
					<a href="#" target="_blank"></strong><i class="fab fa-linkedin li"></i></a>
					</p>
					
				</div> <!-- end of wrapper-->
				
			</div> <!-- end of headerBlog-->
				
			<div class="headerCover">
			
				<div class="headerBackground" style="background-color:rgba(0, 0, 0, 0.1);">
					<div id="wrapper">
						<span style="float: right;"><strong>Digitalise Your Yields!</strong></span>
					</div>
				</div>

			</div>
		
			<div class="blog">
				<div id="wrapper">

				<?php
					try {

						$stmt = $db->query('SELECT postID, postTitle, postDesc, postDate FROM blog_posts ORDER BY postID DESC');
						while($row = $stmt->fetch()){
							
							echo '<div>';
								echo '<h2><a href="viewpost.php?id='.$row['postID'].'">'.$row['postTitle'].'</a></h2>';
								echo '<p>'.$row['postDesc'].'</p>';				
								echo '<p><a href="viewpost.php?id='.$row['postID'].'">Read More</a></p><br>';
								echo '<p class="postDate">Posted on '.date('jS M Y H:i:s', strtotime($row['postDate'])).'</p>';								
							echo '</div>';

						}

					} catch(PDOException $e) {
						echo $e->getMessage();
					}
					?>
			
				</div>
				
			
			</div>
			
	
		</div> <!-- end of blog-->
	
	</body> <!-- end of body-->
	
	
</html>