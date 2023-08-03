void main(){
   var arr = [44,3,5,24,533,5];
   
   arr.forEach((item){
       print(item);
   });
}


void main(){
   laptop l = new laptop();
   
   print(l.name);
   l.printLaptop();
   
}


class laptop {
    var name= 'umang';
    void printLaptop(){
        print('hello');
    }
}
