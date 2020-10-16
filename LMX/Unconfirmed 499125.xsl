<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>

  <h2>Bookish</h2>
  <table border="1" cellspacing="0">
    <tr bgcolor="#A3D8E8">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Author</th>
	  <th style="text-align:left">Genre</th>
	  <th style="text-align:left">Year</th>
    </tr>
    <xsl:for-each select="books/book">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="author"/></td>
      <td><xsl:value-of select="genre"/></td>
      <td><xsl:value-of select="year"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

