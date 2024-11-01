#include <graphics.h>

main(){
	initwindow(1000,500);
	
	circle(100,250, 50);
	
	for(int i = 0; i < 1000; i++){
		
		circle(100+i, 250, 50);
		//delay(10);
		//cleardevice();
	}
	
	getch();
}
