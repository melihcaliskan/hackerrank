class Polygon {
    constructor(heights) {
        let polygon_perimeter = 0;
        for (var index in heights){
                polygon_perimeter += heights[index];
        }
        
        this.perimeter_value = polygon_perimeter;
    }
    
    perimeter() {
        return this.perimeter_value;
    }
}