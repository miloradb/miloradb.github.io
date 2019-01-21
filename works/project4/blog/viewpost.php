<?php require('includes/config.php'); 

$stmt = $db->prepare('SELECT postID, postTitle, postCont, postDate FROM blog_posts WHERE postID = :postID');
$stmt->execute(array(':postID' => $_GET['id']));
$row = $stmt->fetch();

//if post does not exists redirect user.
if($row['postID'] == ''){
	header('Location: ./');
	exit;
}

?>
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="utf-8">
		<title>Blog - <?php echo $row['postTitle'];?></title>
		<link href="style/style.css" type="text/css" rel="stylesheet">

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
			
			<div class="hero">
			
				<div id="wrapper">

		
					<p><a href="./">Back to Blog</a></p>
					
					<hr />

					<?php	
						echo '<div>';
							echo '<h3>'.$row['postTitle'].'</h3>';
							echo '<p>Posted on '.date('jS M Y', strtotime($row['postDate'])).'</p>';
							echo '<p>'.$row['postCont'].'</p>';				
						echo '</div>';
					?>
				</div>
			</div>

	</div>

</body>
</html>