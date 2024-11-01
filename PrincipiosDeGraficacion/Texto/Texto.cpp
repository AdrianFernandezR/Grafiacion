#include <graphics.h>
#include <stdio.h>

main()
{
	initwindow(800,800,"Window");
	
	//Definicion del circulo
	settextstyle(TRIPLEX_FONT, HORIZ_DIR, 1);
	outtext("Esto es un texto no ubicado");
	outtextxy(100, 100, "Esto es un texto ubicado");
	
	int x = 25, y = 25, font = 0;
	
	/*
	for (font = 0; font <= 10; font++)
   {
      settextstyle(font, HORIZ_DIR, 1);
      outtextxy(x, y, "Hola, tengo una fuente nueva");
      y = y + 25;
   }

	*/

	

    




	getch();
}
