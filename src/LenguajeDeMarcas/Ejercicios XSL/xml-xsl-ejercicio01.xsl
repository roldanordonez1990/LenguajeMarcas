<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="iso-8859-1"/>

	<xsl:template match="/superheroe">
		<html>
			<head>
				<title>
					Los amigos de Marvel
				</title>
			</head>
				<body>
					<h1>
						<xsl:value-of select="nombre"/>
					</h1>
					<h1>
						<xsl:value-of select="poderes"/>
					</h1>
					<h1>
						<xsl:value-of select="amigos"/>
					</h1>
					<h1>
						<xsl:value-of select="enemigos"/>
					</h1>
				</body>
			
		</html>
	</xsl:template>
</xsl:stylesheet>