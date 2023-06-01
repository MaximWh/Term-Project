let flag=getCookie("flag");
if(flag =="true") document.writeln("<td width='100' align=center><a href='logoff.html'><span class='button'>Logoff</a></td>");
else document.writeln("<td width='100' align=center><a href='index.html'><span class='button'>Login</a></td>");	
document.writeln("<td width='100' align=center><a href='about.html'><span class='button'>About</a></td>");  
document.writeln("<td width='100' align=center><a href='products.html'><span class='button'>Product List</a></td>");	
document.writeln("<td width='100' align=center><a href='contact.html'><span class='button'>Contact Us</a></td>");
