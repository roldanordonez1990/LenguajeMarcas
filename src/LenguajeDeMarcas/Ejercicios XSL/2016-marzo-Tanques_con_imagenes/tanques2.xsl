<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="iso-8859-1" />

  <xsl:template match="juegoTanques">

    <html>
      <head>
        <title>
          El juego de los tanques
        </title>
        <style>
          table thead{
          background:#ff8b1f;
          color:#000000;
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
            <tr>
            <td>Jugadas</td>
            <td>Jugador</td>
            <td>Tanque</td>
            <td>Descripción</td>
            </tr>
          </thead>
          <xsl:for-each select="jugadasDescritas/jugada">
          <xsl:choose>
            <xsl:when test="(position() mod 2 = 1 and @jugador = 1)">
              <xsl:call-template name="pintaFila">
                <xsl:with-param name="color">#4de34b</xsl:with-param>
                <xsl:with-param name="numeroJugador"><xsl:value-of select="@jugador"/></xsl:with-param>
              </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
              <xsl:call-template name="pintaFila">
              <xsl:with-param name="color">#e38a4b</xsl:with-param>
              <xsl:with-param name="numeroJugador"><xsl:value-of select="@jugador"/></xsl:with-param>
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
    <xsl:param name="numeroJugador"></xsl:param>
    <tr style="background: {$color}">
      <td>
        <xsl:value-of select="position()"/>
      </td>
      <td>
        <xsl:value-of select="@jugador"/>
      </td>
      <td>
        <img src="{//juegoTanques/tanques/imagenTanque[@jugador=$numeroJugador]}"></img>
      </td>
      <td>
        <xsl:value-of select="@desc"/>
      </td>
    </tr>
    
  </xsl:template>
  
  
</xsl:stylesheet>