#include<stdio.h>
void main() {
    for(int i = 13 ; i <= 60; i++) {
        printf("<option value=\"");
        printf("%d", i);
        printf("\">");
        printf("%d", i);
        printf("</option> \n");
    }
}