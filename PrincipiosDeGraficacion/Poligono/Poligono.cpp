#include <graphics.h>
#include <stdio.h>

main()
{
	initwindow(800,800,"Window");
	
	//Definicion del circulo
	int points[]={320,150,420,300,250,300,320,150};
   
   	drawpoly(4, points);
   	
   	
   	getch();
   	closegraph();
}
