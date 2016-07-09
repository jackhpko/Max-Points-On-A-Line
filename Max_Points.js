var maxPoints = function(points) {
    if(points.length <= 1){
        return points.length;
    }
    var res = -1, count, max, i, j, slopeSet, cur, slope, tmp;
    for(i = 0; i < points.length; i++){
        cur = points[i];
        max = 0;
        count = 1;
        slopeSet = {};
        slopeSet[0] = 0; slopeSet[Infinity] = 0; 
        for(j = 0; j < points.length; j++){
            if(i === j){
                continue;
            }
            if(points[j].x === cur.x && points[j].y === cur.y){
                count++;
            }else{
                slope = (points[j].y - cur.y) / (points[j].x - cur.x);
                if(slopeSet[slope] === undefined){
                    slopeSet[slope] = 1;
                }else{
                    slopeSet[slope]++;
                }
                tmp = slopeSet[slope];
                if(tmp > max){
                    max = tmp;
                }
            }
            if(max + count > res){
                res = max + count;
            }
        }
    }
    return res;
};