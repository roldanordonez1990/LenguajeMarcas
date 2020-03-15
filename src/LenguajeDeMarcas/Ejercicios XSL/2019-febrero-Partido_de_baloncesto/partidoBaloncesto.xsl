<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" encoding="UTF-8"/>

	<xsl:template match="/partidoBaloncesto">
		<html>
			<head>
				<title>Partido de Baloncesto</title>
				<style>
          h3{
          text-align: center;
          }
          
          td{
          text-align: center;
          color: #000000
          }
          thead td{
          color: #ffffff;
          }
        </style>
			</head>
			<body>
				<h3>Baloncesto: Baloncesto Lucena - Unicaja Baloncesto</h3>

        <table border="2" width="100%">
          <thead style="background: #2d4b80">
            <td>Equipo</td>
            <td>Jugador</td>
            <td>Dorsal</td>
            <td>Apodo</td>
            <td>Puntos</td>
            <td>Rebotes</td>
            <td>Asistencias</td>
          </thead>

          <xsl:for-each select="equipo">
            <xsl:for-each select="jugador">
            <tr>
            <xsl:choose>
              <xsl:when test="../@tipo='Local' and position() mod 2 = 1">
                <xsl:attribute name="bgcolor">#78e8f5</xsl:attribute>
              </xsl:when>
              <xsl:when test="../@tipo='Visitante' and position() mod 2 = 1">
                <xsl:attribute name="bgcolor">#81f09b</xsl:attribute>
              </xsl:when>
            </xsl:choose>
                <td><img src="{../@imagen}"></img></td>
                <td><xsl:value-of select="@nombre"/></td>
                <td><xsl:value-of select="@dorsal"/></td>
                <td><xsl:value-of select="@apodo"/></td>
                <td><xsl:value-of select="@puntos"/></td>
                <td><xsl:value-of select="@rebotes"/></td>
                <td><xsl:value-of select="@asistencias"/></td>
            </tr>
            </xsl:for-each>
          </xsl:for-each>
        </table>

        <table border="3" width="90%">
          <xsl:call-template name="bucleForFila">
            <xsl:with-param name="i">1</xsl:with-param>
          </xsl:call-template>
        </table>

        <xsl:call-template name="tablita"></xsl:call-template>
			</body>
		</html>
	</xsl:template>

  <xsl:template name="bucleForFila">
    <xsl:param name="i"/>
    <xsl:if test="$i &lt;= 10">
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
    <xsl:if test="$j &lt;= 10">
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
      <xsl:for-each select="equipo/jugador">
        <xsl:if test="$x = @posicionX and $y = @posicionY">
         <xsl:value-of select="@nombre"/>
          <img src="{../@imagen}"/>
        </xsl:if>
      </xsl:for-each>
    </td>
  </xsl:template>

  <xsl:template name="tablita">
    <table border="2">
      <thead style="background: #2d4b80">
        <td>Tiempo</td>
        <td>Jugador</td>
        <td>Apodo</td>
        <td>Descripción</td>
        <td>Icono</td>
      </thead>
      <xsl:for-each select="historico/entrada">
        <xsl:variable name="jugador"><xsl:value-of select="@jugador"/></xsl:variable>
        <xsl:variable name="tipo"><xsl:value-of select="@tipo"/></xsl:variable>
       
        <tr>
          <td><xsl:value-of select="@tiempo"/></td>
          <td><xsl:value-of select="@jugador"/></td>
          <td><xsl:value-of select="/partidoBaloncesto/equipo/jugador[@nombre=$jugador]/@apodo"/></td>
          <td><xsl:value-of select="."/></td>
          <xsl:choose>
            <xsl:when test="@tipo='canasta'">
              <td><img src="{/partidoBaloncesto/historico/imagen[@tipo='canasta']}"></img></td>
            </xsl:when>
            <xsl:when test="@tipo='falta'">
              <td><img src="{/partidoBaloncesto/historico/imagen[@tipo='falta']}"></img></td>
            </xsl:when>
          </xsl:choose>
          
        </tr>
    
      </xsl:for-each>
    </table>
    
  </xsl:template>

 
    
  
  

</xsl:stylesheet>