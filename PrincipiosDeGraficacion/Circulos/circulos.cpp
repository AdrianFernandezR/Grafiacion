#include <graphics.h>
#include <stdio.h>

main()
{
	initwindow(800,800,"Window");
	
	//Definicion del circulo
	setcolor(WHITE);
	circle(400,400, 50);
	setfillstyle(SOLID_FILL, BLUE);
	floodfill(400, 400, WHITE);
	
	getch();
}
