#include <graphics.h>
#include <stdio.h>

main()
{
	initwindow(500,00,"Window");
	
	//Definicion del circulo
	setcolor(BLUE);
	arc(300, 300, 0, 180, 100);
	//setfillstyle(SOLID_FILL, WHITE);
	//floodfill(400, 400, BLUE);
	
	getch();
}
