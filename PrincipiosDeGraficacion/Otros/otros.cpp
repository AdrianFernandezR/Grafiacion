#include <graphics.h>
#include <stdio.h>

main()
{
	initwindow(800,800,"Window");
	
	pieslice(200, 200, 0, 135, 100);
	bar(600, 600, 400, 400);
	
	putpixel(25, 25, RED);
	
	moveto(600, 600);
	linerel(100, -100);

	
	getch();
}
