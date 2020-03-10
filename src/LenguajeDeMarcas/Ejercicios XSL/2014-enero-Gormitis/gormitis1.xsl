<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="/gormitis">
    <html>
      <head>
        <title>
          Los Gormitis
        </title>
        <style>
          table thead{
          background:#6ce34b;
          color: #000000;
          text-align: center;
          }
          
          img {
          width: 80px;
          }
          
        </style>
      </head>
      <body>
        <table border="1">
          <thead>
            <td>Posición</td>
            <td>Gormiti</td>
            <td>Tribu</td>
          </thead>

          <xsl:for-each select="gormiti">
            <xsl:choose>
              <xsl:when test="(position() mod 2 = 1)">
                <xsl:call-template name="pintaFila">
                  <xsl:with-param name="color">#eb8d8d</xsl:with-param>
                  <xsl:with-param name="numero"><xsl:value-of select="@tribu"/></xsl:with-param>
                </xsl:call-template>
              </xsl:when>

              <xsl:otherwise>
                <xsl:call-template name="pintaFila">
                <xsl:with-param name="color">#69def0</xsl:with-param>
                  <xsl:with-param name="numero"><xsl:value-of select="@tribu"/></xsl:with-param>
                </xsl:call-template>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:for-each>
        </table>
      </body>
    </html>
   
  </xsl:template>

  <xsl:template name="pintaFila">
    <xsl:param name="color"></xsl:param>
    <xsl:param name="numero"></xsl:param>

    <tr style="background: {$color}">
      <td>
        <xsl:value-of select="position()"/>
      </td>
      <td>
        <img src="{/gormitis/gormiti[@tribu=$numero]}"/>
      </td>
      <td >
        <xsl:value-of select="@tribu"/>
      </td>
    </tr>
    
 
  </xsl:template>

</xsl:stylesheet>