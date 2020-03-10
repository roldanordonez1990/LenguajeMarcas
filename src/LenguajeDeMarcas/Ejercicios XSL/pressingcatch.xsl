<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="iso-8859-1"/>

  <xsl:template match="/wwe">
  <html>
    <head>
      <title>
        Pelea de pressing catch
      </title>
      <style type="text/css">
        body {
        margin: 50px;
        padding: 0px;
        background: #2372DE;
        font-family: 'Open Sans', sans-serif;
        font-size: 11pt;
        color: #FFFFFF;
        text-align:center;
        }

        .tituloTabla {
        font-weight: bold;
        text-align: center;
        }
      </style>
      <body>
        <xsl:apply-templates select="europa"/>
        <xsl:apply-templates select="eeuu"/>
      </body>
    </head>
  </html>
    </xsl:template>

  <xsl:template match="europa">
    <xsl:apply-templates select="personaje"/>
  </xsl:template>
  <xsl:template match="eeuu">
    <xsl:apply-templates select="personaje"/>
  </xsl:template>

  <xsl:template match="personaje">
    <table border="1">
      <tr class="tituloTabla">
        <td>
         Nombre: <xsl:value-of select="nombre"/>
        </td>
      </tr>
      <tr>
        <td class="tituloTabla">
         Edad: <xsl:value-of select="edad"/>
        </td>
      </tr>
    </table>
    <br/>
  </xsl:template>
  
</xsl:stylesheet>