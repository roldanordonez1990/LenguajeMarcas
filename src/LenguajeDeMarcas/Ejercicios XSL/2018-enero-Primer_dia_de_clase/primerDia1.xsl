<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="primerDia1DAW">
    <html>
      <head>
        <title>Primer día de clase</title>
      </head>

      <style>
        img{
        width: 35px;
        }
        
        td{
        text-align: center;
        }

      </style>
      <body>
        <table border="3" width="90%">
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
              <xsl:sort select="@orden" order="ascending"/>
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

        <table border="3" width="90%">
          <xsl:call-template name="bucleForFila">
            <xsl:with-param name="i">1</xsl:with-param>
          </xsl:call-template>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template name="bucleForFila">
    <xsl:param name="i"/>
    <xsl:if test="$i &lt;= 11">
      <tr>
        <xsl:call-template name="bucleForColumna">
          <xsl:with-param name="i">
            <xsl:value-of select="$i"/>
          </xsl:with-param>
          <xsl:with-param name="j">1</xsl:with-param>
        </xsl:call-template>
      </tr>
      <xsl:call-template name="bucleForFila">
        <xsl:with-param name="i">
          <xsl:value-of select="$i + 1"/>
        </xsl:with-param>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>


  <xsl:template name="bucleForColumna">
    <xsl:param name="i"/>
    <xsl:param name="j"/>
    <xsl:if test="$j &lt;= 11">
      <xsl:call-template name="celda">
        <xsl:with-param name="x">
          <xsl:value-of select="$j"/>
        </xsl:with-param>
        <xsl:with-param name="y">
          <xsl:value-of select="$i"/>
        </xsl:with-param>
      </xsl:call-template>
      <xsl:call-template name="bucleForColumna">
        <xsl:with-param name="i">
          <xsl:value-of select="$i"/>
        </xsl:with-param>
        <xsl:with-param name="j">
          <xsl:value-of select="$j + 1"/>
        </xsl:with-param>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>


  <xsl:template name="celda">
    <xsl:param name="x"/>
    <xsl:param name="y"/>
   
    <td>
      <xsl:for-each select="estructuraAula/bloque">
        
        <xsl:if test="$x = @x and $y = @y">
          <xsl:choose>
            <xsl:when test="@tipo = 'puerta'">
              <xsl:attribute name="style">background:<xsl:value-of select="../color[@tipo='puerta']"/></xsl:attribute>
            </xsl:when>
            <xsl:when test="@tipo = 'pared'">
              <xsl:attribute name="style">background:<xsl:value-of select="../color[@tipo='pared']"/></xsl:attribute>
            </xsl:when>
            <xsl:when test="@tipo = 'ventana'">
              <xsl:attribute name="style">background:<xsl:value-of select="../color[@tipo='ventana']"/></xsl:attribute>
            </xsl:when>
          </xsl:choose>
          <xsl:value-of select="@tipo"/>
        </xsl:if>
        </xsl:for-each>

      <xsl:for-each select="alumnado/alumno">
        <xsl:if test="$x = @x and $y = @y">

          <xsl:choose>
            <xsl:when test="@sexo = 'M'">
              <xsl:attribute name="style">background:#ffbaf4</xsl:attribute>
              <img src="{/primerDia1DAW/alumnado/imagen[@sexo='M']}"></img>
            </xsl:when>
            <xsl:otherwise>
              <xsl:attribute name="style">background:#7af59b</xsl:attribute>
              <img src="{/primerDia1DAW/alumnado/imagen[@sexo='H']}"></img>
            </xsl:otherwise>
             
          </xsl:choose>
          <xsl:value-of select="."/>
        </xsl:if>
      </xsl:for-each> 
    </td>
    
  </xsl:template>


</xsl:stylesheet>