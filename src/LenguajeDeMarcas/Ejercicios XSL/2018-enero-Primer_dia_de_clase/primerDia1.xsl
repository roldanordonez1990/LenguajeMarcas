<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="primerDia1DAW">
    <html>
      <head>
        <title>Primer día de clase</title>
      </head>
      <body>
        <table border="1" width="80%">
          <thead>
            <td></td>
            <td>8:30-9:30</td>
            <td>9:30-10:30</td>
            <td>10:30-11:30</td>
            <td>12:00-13:00</td>
            <td>13:00-14:00</td>
            <td>14:00-15:00</td>
          </thead>

          <xsl:for-each select="horario/dia">
          <tr>
            <td> <xsl:value-of select="@desc"/></td>
            <xsl:for-each select="hora">
              <xsl:choose>
                <xsl:when test="position() mod 2 = 1">
              <td style="background: #77c9f2"><xsl:value-of select="."/></td>
                </xsl:when>
                <xsl:otherwise>
                  <td style="background: #ffffff"><xsl:value-of select="."/></td>
                </xsl:otherwise>
              </xsl:choose>
            </xsl:for-each>
          </tr>
          </xsl:for-each> 
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>