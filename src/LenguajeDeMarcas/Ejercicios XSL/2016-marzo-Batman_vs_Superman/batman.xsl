<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" encoding="iso-8859-1"/>

  <xsl:template match="/cine">
   
   
    
    <html>
      <head>
        <title>Batman vs Superman: El Amanecer de la Justicia</title>
        <style>
          img{
          width: 60%;
          }


          h2{
          font-family: serif;

          }
          h3{
          font-family: serif;
          }
          tr{
          text-align: center;
          }
          td img{
          width: 30px;
          }

         
        </style>
      </head>

      <body>
        <h2><xsl:value-of select="@nombre"/></h2>
        <img>
          <xsl:attribute name="src"><xsl:value-of select="titulo/imagen"/></xsl:attribute>
        </img>
        <h2><xsl:value-of select="titulo/@nombre"/></h2>
        <h3><xsl:value-of select="titulo/@estreno"/></h3>
    
        <xsl:call-template name="tablaSesiones"></xsl:call-template>

        <xsl:call-template name="tablaCartelera"></xsl:call-template>
       
      </body>
      
   
    </html>
    
  </xsl:template>

  <xsl:template name="bucleForFila">
    <xsl:param name="i"/>
    <xsl:if test="$i &lt;= 4">
      <tr>
        <xsl:call-template name="bucleForColumna">
          <xsl:with-param name="i"><xsl:value-of select="$i"/></xsl:with-param>
          <xsl:with-param name="j">1</xsl:with-param>
        </xsl:call-template>
      </tr>
      <xsl:call-template name="bucleForFila">
        <xsl:with-param name="i"><xsl:value-of select="$i + 1"/></xsl:with-param>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>


  <xsl:template name="bucleForColumna">
    <xsl:param name="i"/>
    <xsl:param name="j"/>
    <xsl:if test="$j &lt;= 4">
      <xsl:call-template name="celda">
        <xsl:with-param name="x"><xsl:value-of select="$j"/></xsl:with-param>
        <xsl:with-param name="y"><xsl:value-of select="$i"/></xsl:with-param>
      </xsl:call-template>
      <xsl:call-template name="bucleForColumna">
        <xsl:with-param name="i"><xsl:value-of select="$i"/></xsl:with-param>
        <xsl:with-param name="j"><xsl:value-of select="$j + 1"/>
        </xsl:with-param>
      </xsl:call-template>
    </xsl:if> 
  </xsl:template>


  <xsl:template name="celda">
    <xsl:param name="x"/>
    <xsl:param name="y"/>
    <td align="center">
      <xsl:choose>
        <xsl:when test="ocupado[@fila=$y and @asiento=$x]">
          
         <img src="{/cine/imagenes/imagen[@id='ocupado']}"></img>
          
        </xsl:when>
        <xsl:otherwise>
          <img src="{/cine/imagenes/imagen[@id='libre']}"></img>
        </xsl:otherwise>
      </xsl:choose>
    </td>
  </xsl:template>

  
  <xsl:template name="tablaSesiones">
    <table border="1" width="70%">
      <xsl:for-each select="sesiones/sesion">
        <xsl:choose>
          <xsl:when test="position() mod 2 = 1">
            <xsl:call-template name="tablaSesion">
              <xsl:with-param name="color">#99def7</xsl:with-param>
            </xsl:call-template>
          </xsl:when>
          <xsl:otherwise>
            <xsl:call-template name="tablaSesion">
              <xsl:with-param name="color">#ffffff</xsl:with-param>
            </xsl:call-template>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:for-each>
    </table>
  </xsl:template>

  <xsl:template name="tablaSesion">
    <xsl:param name="color" ></xsl:param>
    <tr>
      <td align="center" style="background:{$color}">
        Sesión:
        <xsl:value-of select="position()"/>
        - Hora:
        <xsl:value-of select="@hora"/>
      
      <table border="1" align="center" width="50%">
        <xsl:call-template name="bucleForFila">
          <xsl:with-param name="i">1</xsl:with-param>
        </xsl:call-template>
      </table>
      </td>
    </tr>
  </xsl:template>

  <xsl:template name="tablaCartelera">
    <br></br>
      <table border="1">
        <h2>Otras películas</h2>
        <xsl:for-each select="cartelera/pelicula">
          <xsl:variable name="id"><xsl:value-of select="@id"/></xsl:variable>
        <tr>
          <td><img style="width:250px" src="{/cine/imagenes/imagen[@id=$id]}"></img></td>
         
          <td><xsl:value-of select="@nombre"/></td>
        </tr>
        </xsl:for-each>
      </table>
    
  </xsl:template>
  
  
</xsl:stylesheet>