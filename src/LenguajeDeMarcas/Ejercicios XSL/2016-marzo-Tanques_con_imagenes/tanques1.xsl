<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="iso-8859-1" />
  <xsl:template match="juegoTanques">
  <html>
    <head>
      <title>
        Juego de los tanques
      </title>
      <style>
        table thead {
        color: #000000;
        background: #25cffa;
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
          <td>Jugadas</td>
          <td>Tanque</td>
          <td>Imagen</td>
          <td>Descripción</td>
        </thead>
        <xsl:for-each select="jugadasDescritas/jugada">
          <xsl:choose>
            <xsl:when test="(position() mod 2 = 1)">
              <xsl:call-template name="pintaFila">
                <xsl:with-param name="color">#db7272</xsl:with-param>
                <xsl:with-param name="numeroJugador"><xsl:value-of select="@jugador"/></xsl:with-param> 
              </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
              <xsl:call-template name="pintaFila">
                <xsl:with-param name="color">#d0db72</xsl:with-param>
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
    <xsl:param name="color"/>
    <xsl:param name="numeroJugador"/>

    <tr style="background: {$color}">
      <td>
        <xsl:value-of select="position()"/>
      </td>
      <td>
        <xsl:value-of select="@jugador"/>
      </td>
      <td>
        <img src="{//juegoTanques/tanques/imagenTanque[@jugador=$numeroJugador]}"/>
      </td>
      <td>
        <xsl:value-of select="@desc"/>
      </td>
    </tr>
    
    
  </xsl:template>
  
</xsl:stylesheet>