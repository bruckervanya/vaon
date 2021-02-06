<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>login</title>
  </head>
  <body>
    <form action="login.php" method="POST">
      <input type="radio" id="design" name="topic" value="design">
      <label for="male">Design</label><br>
      <input type="radio" id="code" name="topic" value="code">
      <label for="female">Code</label><br>
      <input type="radio" id="other" name="topic" value="other">
      <label for="other">Other</label><br>

      Details:<input type="text" name="details"/><br>
      Name:<input type="text" name="name"/><br>
      Email:<input type="text" name="email"/><br>


      <input type="submit" value="Submit">
    </form>
  </body>
</html>
