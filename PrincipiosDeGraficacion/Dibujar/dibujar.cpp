#include <graphics.h>
#include <stdio.h>

main()
{
	initwindow(800,800,"Window");
	
	//Definicion del circulo
   	moveto(100, 100);
   	lineto(100, 200);
   	
	moveto(400, 100);
   	lineto(400,200);
   	
	moveto(50, 300);
   	lineto(200, 400);
   	lineto(300,400);
   	lineto(450, 300);

   	
	
	getch();
}
