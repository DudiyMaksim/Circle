class circle {
    r;
    getRadius(){
        return this.r;
    };
    setRadius(r){
        this.r=r;
    };
    getDiameter(){
        return this.r*2;
    };

    Show_S(){
        alert(3.14*this.r**2);
    };

    Show_C(){
        alert(2*3.14*this.r)
    }
}

const circ1 = new circle();
circ1.setRadius(4)
circ1.Show_S()
circ1.Show_C()