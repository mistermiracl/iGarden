class Monitor {
    
    constructor(obj){
        if(obj){
            this.id = obj.id;
            this.ipAdress = obj.ipAdress;
            this.device = obj.device;
            this.userAgent = obj.userAgent;
            this.moisture = obj.moisture;
            this.lectureTime = obj.lectureTime;
        }
    }
}

module.exports = Monitor;