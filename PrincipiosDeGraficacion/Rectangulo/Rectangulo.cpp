#include <graphics.h>
using namespace std;

main(){
	
	initwindow(500,500);
	setcolor(BLUE);
	
	setfillstyle(HATCH_FILL, 6);
	rectangle(50, 20, 450, 400);
	floodfill(250, 250, BLUE);
	
	getch();
}
